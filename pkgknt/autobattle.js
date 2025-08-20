// autobattle.js — pure logic (no DOM). ES module.

// ===== Small utils =====
const r = (min,max)=> Math.floor(Math.random()*(max-min+1))+min;
const chance = (p)=> Math.random() < p;
const clamp = (n,min,max)=> Math.max(min, Math.min(max, n));

// ===== Move labels (optional export for UIs) =====
export const moveLabels = {
  'Knight|normal':'Knight — Normal Attack',
  'Knight|double':'Knight — Double Strike',
  'Knight|flourish':'Knight — Improvised Flourish',
  'Knight|perry':'Knight — Perry',
  'Knight|block':'Knight — Block',
  'Knight|counter':'Knight — Counter',

  'Goblin Sapper|normal':'Goblin Sapper — Fire Cracker',
  'Goblin Sapper|bomb':'Goblin Sapper — Goblin Bomb',
  'Goblin Sapper|perry':'Goblin Sapper — Perry',
  'Goblin Sapper|block':'Goblin Sapper — Block',
  'Goblin Sapper|counter':'Goblin Sapper — Counter',

  'Wandering Blade|normal':'Wandering Blade — Normal Attack',
  'Wandering Blade|poised_charge':'Wandering Blade — Poised (Defensive Stance)',
  'Wandering Blade|poised_unleash':'Wandering Blade — Poised Strike',
  'Wandering Blade|perry':'Wandering Blade — Perry',
  'Wandering Blade|block':'Wandering Blade — Block',
  'Wandering Blade|counter':'Wandering Blade — Poised Counter',

  'Knave|normal':'Knave — Normal Attack',
  'Knave|poison':'Knave — Poison Needle',
  'Knave|snipe':'Knave — Snipe',
  'Knave|smoke':'Knave — Smoke Bomb (Hidden)',
  'Knave|perry':'Knave — Perry',
  'Knave|block':'Knave — Block',
  'Knave|counter':'Knave — Counter'
};

// ===== Stats recorder (wired at runtime by runAutobattle) =====
let _recordMove = () => {};
let _recordDefense = () => {};

// ===== Fighter factory =====
function makeFighter(cfg){
  return {
    name: cfg.name,
    maxHp: cfg.maxHp,
    hp: cfg.maxHp,
    crit: cfg.crit || 0,
    potions: cfg.potions || 0,
    bloodPotions: cfg.bloodPotions || 0,
    bloodlustTurns: 0,
    stunTurns: 0,
    poisoned: false,
    hidden: false,
    _queuedCounter:false,
    defenseRates: cfg.defenseRates,
    counterBase: cfg.counterBase,
    regenTicks: 0,
    poisedQueued: false,
    ai: cfg.ai
  };
}

// ===== Core engine helpers (pure) =====
function dealImmediate(target, amount, log, label){
  const before = target.hp;
  target.hp = clamp(target.hp - amount, 0, target.maxHp);
  log(`${label} ${before} → ${target.hp}.`);
  return before - target.hp;
}
function healImmediate(target, amount, log, label){
  const before = target.hp;
  target.hp = clamp(target.hp + amount, 0, target.maxHp);
  log(`${label} ${before} → ${target.hp}.`);
  return target.hp - before;
}
function rollDefenseChoice(defender, opts){
  if(opts && opts.unblockable) return 'none';
  if(defender.hidden) return 'none';
  const canPerry   = chance(defender.defenseRates.perry);
  const canCounter = chance(defender.defenseRates.counter);
  const canBlock   = chance(defender.defenseRates.block);
  if(canPerry) return 'perry';
  if(canCounter) return 'counter';
  if(canBlock) return 'block';
  return 'none';
}
function applyDefense(defender, incoming, attacker, log, opts){
  if (opts && opts.unblockable) {
    defender._queuedCounter = false;
    return { finalDamage: incoming };
  }
  if (defender.stunTurns > 0){
    return { finalDamage: incoming };
  }
  if (defender.hidden){
    return { finalDamage: 0 };
  }
  const def = rollDefenseChoice(defender, opts);
  let dmg = incoming;
  defender._queuedCounter = false;

  if(def === 'perry'){
    log(`${defender.name} parries! ${attacker.name} is stunned into next turn.`);
    attacker.stunTurns = Math.max(attacker.stunTurns, 1);
    _recordDefense(defender.name,'perry');
    dmg = 0;
  } else if(def === 'counter'){
    defender._queuedCounter = true;
    _recordDefense(defender.name,'counter');
  } else if(def === 'block'){
    const blocked = Math.floor(dmg/2);
    log(`${defender.name} blocks, reducing ${dmg} → ${blocked}.`);
    _recordDefense(defender.name,'block');
    dmg = blocked;
  }
  return { finalDamage: dmg };
}
function resolveCounter(defender, attacker, log){
  if(!defender._queuedCounter) return 0;
  const base = defender.counterBase;
  const isCrit = chance(defender.crit);
  const dmg = isCrit ? base*2 : base;
  defender._queuedCounter = false;
  return dealImmediate(attacker, dmg, log, `${defender.name} counters for ${dmg}${isCrit?' (CRIT)':''} damage:`);
}

// ===== AIs (unchanged logic, pure logs + recorders) =====
const KnightAI = {
  preAction(actor, target, log){
    if(actor.hp < 5 && actor.potions > 0){
      actor.potions -= 1;
      healImmediate(actor, 5, log, `Knight drinks a potion:`);
    }
  },
  chooseMove(actor){
    const canFlourish = (actor.hp < 10) && chance(0.20);
    const canDouble = chance(0.10);
    if(canFlourish) return 'flourish';
    if(canDouble) return 'double';
    return 'normal';
  },
  executeMove(actor, target, move, log){
    const isCrit = chance(actor.crit);
    if(move === 'flourish'){
      const roll = r(1,5);
      let total = roll + 2;
      if(isCrit) total *= 2;
      log(`Knight uses Improvised Flourish (${roll}+2${isCrit?' ×2 CRIT':''}).`);
      return {
        rawDamage: total,
        onHit(a, t){
          if(chance(0.30)){
            t.stunTurns = Math.max(t.stunTurns, 1);
          }
        }
      };
    }
    if(move === 'double'){
      const a = r(1,3), b = r(3,5);
      const total = isCrit ? (a*2 + b*2) : (a + b);
      log(`Knight uses Sidearm Assisted Strike (${a}${isCrit?'×2':''}+${b}${isCrit?'×2':''}).`);
      return { rawDamage: total };
    }
    const roll = r(3,5);
    const total = isCrit ? roll*2 : roll;
    log(`Knight uses Heavy Strike (${isCrit?roll+"×2":roll}).`);
    return { rawDamage: total };
  }
};

const GoblinAI = {
  preAction(actor){
    if(actor.hp < 5 && actor.bloodlustTurns === 0 && actor.bloodPotions > 0){
      actor.bloodPotions -= 1;
      actor.bloodlustTurns = 3;
      // (Log inside execute for brevity)
    }
  },
  chooseMove(actor){
    if(actor.hp === 1 && chance(0.50)) return 'bomb';
    return 'normal';
  },
  executeMove(actor, target, move, log){
    const isCrit = chance(actor.crit);

    if(move === 'bomb'){
      const base = r(5,6);
      const metaStun = chance(0.10);
      let total = isCrit ? base*2 : base;

      log(`Goblin Sapper uses Goblin Bomb (${isCrit?base+"×2":base}).`);
      if(actor.bloodlustTurns > 0){
        total += 2;
        log(`Blood Lust adds +2 damage.`);
        actor.bloodlustTurns -= 1;
      }

      return {
        rawDamage: total,
        unblockable: true,
        onHit(a, t){ if(metaStun){ t.stunTurns = Math.max(t.stunTurns, 1); } }
      };
    }

    const a = r(1,1), b = r(1,2), c = r(1,3);
    const baseSum = a + b + c;
    let total = isCrit ? baseSum * 2 : baseSum;

    log(`Goblin Sapper uses Fire Cracker (${a}+${b}+${c}${isCrit ? ` = ${baseSum} ×2` : ''}).`);
    if(actor.bloodlustTurns > 0){
      total += 2;
      log(`Blood Lust adds +2 damage.`);
      actor.bloodlustTurns -= 1;
    }
    return { rawDamage: total, unblockable: true };
  }
};

const BladeAI = {
  preAction(actor, target, log){
    if(actor.potions > 0){
      actor.potions -= 1;
      healImmediate(actor, 2, log, `Wandering Blade drinks Regen Potion:`);
      actor.regenTicks += 2;
    }
  },
  chooseMove(actor){
    if(actor.poisedQueued) return 'poised_unleash';
    if(chance(0.40)) return 'poised_charge';
    return 'normal';
  },
  executeMove(actor, target, move, log){
    const isCrit = chance(actor.crit);

    if(move === 'poised_charge'){
      actor.poisedQueued = true;
      log(`Wandering Blade switches to Defensive Stance.`);
      return { rawDamage: 0, unblockable: true };
    }

    if(move === 'poised_unleash'){
      actor.poisedQueued = false;
      const base = r(4,8);
      const total = isCrit ? base*2 : base;
      log(`Wandering Blade unleashes Poised Strike! (${isCrit?base+"×2":base}).`);
      return { rawDamage: total };
    }

    const base = r(1,5);
    const total = isCrit ? base*2 : base;
    log(`Wandering Blade uses Quick Slash (${isCrit?base+"×2":base}).`);
    return { rawDamage: total };
  }
};

const KnaveAI = {
  preAction(){},
  chooseMove(actor, target){
    if(!target.poisoned && chance(0.20)) return 'poison';
    if(actor.hidden && chance(0.25)) return 'snipe';
    return 'normal';
  },
  executeMove(actor, target, move, log){
    const isCrit = chance(actor.crit);

    if(move === 'snipe'){
      const base = r(5,7);
      const total = isCrit ? base*2 : base;
      log(`Knave uses Snipe from the shadows! (${isCrit?base+"×2":base}).`);
      _recordMove('Knave','snipe');
      return { rawDamage: total };
    }

    if(actor.hidden && (move === 'normal' || move === 'poison')){
      actor.hidden = false;
      log(`Knave reveals itself!`);
    }

    if(move === 'poison'){
      const base = r(1,2);
      const total = isCrit ? base*2 : base;
      log(`Knave uses Poison Needle (${isCrit?base+"×2":base}).`);
      return {
        rawDamage: total,
        onHit(a, t){
          if(!t.poisoned){
            t.poisoned = true;
            log(`${t.name} is poisoned and will take 1 damage each round.`);
          }
        },
        after(a, t){
          if(chance(0.35)){
            a.hidden = true;
            _recordMove('Knave','smoke');
            log(`Knave vanishes in the smoke.`);
          }
        }
      };
    }

    const base = r(2,4);
    const total = isCrit ? base*2 : base;
    log(`Knave uses Shank (${isCrit?base+"×2":base}).`);
    return {
      rawDamage: total,
      after(a, t){
        if(chance(0.25)){
          a.hidden = true;
          _recordMove('Knave','smoke');
          log(`Knave vanishes in the smoke.`);
        }
      }
    };
  }
};

// ===== Roster (exported) =====
export const ROSTER = {
  Knight: ()=> makeFighter({
    name:'Knight', maxHp:12, crit:0.15, potions:1,
    defenseRates:{ perry:0.10, counter:0.10, block:0.10 },
    counterBase:2, ai: KnightAI
  }),
  'Goblin Sapper': ()=> makeFighter({
    name:'Goblin Sapper', maxHp:8, crit:0.10, bloodPotions:1,
    defenseRates:{ perry:0.10, counter:0.10, block:0.10 },
    counterBase:2, ai: GoblinAI
  }),
  'Wandering Blade': ()=> makeFighter({
    name:'Wandering Blade', maxHp:8, crit:0.20, potions:1,
    defenseRates:{ perry:0.15, counter:0.15, block:0.15 },
    counterBase:4, ai: BladeAI
  }),
  Knave: ()=> makeFighter({
    name:'Knave', maxHp:7, crit:0.15,
    defenseRates:{ perry:0.15, counter:0.20, block:0.05 },
    counterBase:2, ai: KnaveAI
  })
};

// ===== Turn engine (pure) =====
function takeTurn(actor, target, log){
  if(actor.stunTurns > 0){
    log(`${actor.name} is stunned and cannot attack.`);
    actor.stunTurns = Math.max(0, actor.stunTurns - 1);
    return { ended:false };
  }

  if(actor.regenTicks > 0){
    healImmediate(actor, 2, log, `${actor.name} regenerates:`);
    actor.regenTicks -= 1;
  }

  actor.ai.preAction?.(actor, target, log, healImmediate);
  if(target.hidden){
    log(`${actor.name} can't find the Knave..!`);
    return { ended:false };
  }

  const moveId = actor.ai.chooseMove(actor, target);
  _recordMove(actor.name, moveId);

  const moveResult = actor.ai.executeMove(actor, target, moveId, log);
  const total = moveResult.rawDamage || 0;
  const opts = { unblockable: !!moveResult.unblockable };

  const { finalDamage } = applyDefense(target, total, actor, log, opts);
  if(finalDamage > 0){
    dealImmediate(target, finalDamage, log, `${actor.name} deals ${finalDamage} damage:`);
    if(target.hp <= 0){
      moveResult.after?.(actor, target, log);
      return { ended:true, winner:actor.name };
    }
  }

  moveResult.onHit?.(actor, target, log, { stunNow: (t)=> t.stunTurns = Math.max(t.stunTurns,1) });
  const counterDealt = resolveCounter(target, actor, log);
  if(counterDealt > 0 && actor.hp <= 0){
    moveResult.after?.(actor, target, log);
    return { ended:true, winner:target.name };
  }

  moveResult.after?.(actor, target, log);
  return { ended:false };
}

// ===== Public entry point =====
/**
 * Run a single autobattle and return a pure result.
 * @param {Object} opts
 * @param {string[]} opts.fighters Two names from ROSTER (e.g., ['Knight','Goblin Sapper'])
 * @param {number} [opts.maxRounds=200]
 * @returns {{winner:string|null, rounds:number, log:string[], moves:Object<string,number>, finalHP:Record<string,number>}}
 */
export function runAutobattle({ fighters=['Knight','Goblin Sapper'], maxRounds=200 } = {}){
  const log = [];
  const append = (s)=> log.push(s);

  // per-battle stats
  const moves = {};
  _recordMove    = (name, moveId)=> { const k=`${name}|${moveId}`; moves[k]=(moves[k]||0)+1; };
  _recordDefense = (name, kind)=> { const k=`${name}|${kind}`; moves[k]=(moves[k]||0)+1; };

  if(!fighters || fighters.length !== 2) throw new Error('runAutobattle: provide exactly two fighter names.');
  const A = ROSTER[fighters[0]]?.();
  const B = ROSTER[fighters[1]]?.();
  if(!A || !B) throw new Error('Unknown fighter name in ROSTER.');

  append(`Battle starts: ${A.name} vs ${B.name}`);
  append('────────────────────────────────');

  const startAFirst = Math.random() < 0.5;
  let round = 1;

  while(A.hp > 0 && B.hp > 0 && round < maxRounds){
    append(`— Round ${round} —`);

    // Poison ticks
    if(A.poisoned){
      dealImmediate(A, 1, append, `${A.name} suffers poison:`);
      if(A.hp<=0){ append(`${B.name} wins!`); cleanup(); return result(round, B.name, A, B, log, moves); }
    }
    if(B.poisoned){
      dealImmediate(B, 1, append, `${B.name} suffers poison:`);
      if(B.hp<=0){ append(`${A.name} wins!`); cleanup(); return result(round, A.name, A, B, log, moves); }
    }

    const startA = (round % 2 === 1) ? startAFirst : !startAFirst;
    const first  = startA ? A : B;
    const second = startA ? B : A;

    const t1 = takeTurn(first, second, append);
    if(t1.ended){ append(`${t1.winner} wins!`); cleanup(); return result(round, t1.winner, A, B, log, moves); }

    const t2 = takeTurn(second, first, append);
    if(t2.ended){ append(`${t2.winner} wins!`); cleanup(); return result(round, t2.winner, A, B, log, moves); }

    append(`${A.name}: ${A.hp}/${A.maxHp}, ${B.name}: ${B.hp}/${B.maxHp}`);
    append('────────────────────────────────');
    round++;
  }

  cleanup();
  if(round >= maxRounds){ append('Safety stop reached.'); }
  return result(round, null, A, B, log, moves);

  function cleanup(){ _recordMove = ()=>{}; _recordDefense = ()=>{}; }
  function result(rounds, winner, A, B, log, moves){
    return {
      winner,
      rounds,
      log,
      moves,
      finalHP: { [A.name]: A.hp, [B.name]: B.hp }
    };
  }
}
