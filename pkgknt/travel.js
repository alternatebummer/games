// assassin.js  — ES module
// Usage:
//   import { createAssassinGame } from './assassin.js';
//   const game = createAssassinGame({ mount: document.getElementById('someDiv') });
//   game.newRun(); // optional; auto-starts

export function createAssassinGame({
  mount,
  gridSize = 40,         // logical grid (gridSize x gridSize)
  boxPx = 500,           // square render size in pixels
  parts = 3,             // number of trail parts
  leftBorder = () => 8 + Math.floor(Math.random()*3),  // 8–10 columns of trees
  rightBorder = () => 8 + Math.floor(Math.random()*3), // 8–10 columns of trees
} = {}) {
  if (!mount) throw new Error('createAssassinGame: mount element is required');

  // ---------- DOM + Styles ----------
  const style = document.createElement('style');
  style.textContent = `
  :root{
    --bg:#0b0e12; --panel:#11151a; --ink:#cfe3ef; --muted:#8aa2b3; --accent:#9fc46b; --danger:#ff7a7a;
    --guard-fov-bg:#705f1a;
  }
  *{box-sizing:border-box}
  .assassin-wrap{max-width:${boxPx}px;margin:0 auto;padding:16px;display:grid;gap:12px;color:var(--ink);font:14px/1.45 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
  .assassin-header{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
  .assassin-h1{margin:0;font-size:18px}
  .assassin-hud{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
  .assassin-badge{background:#11151a;border:1px solid #26313a;padding:6px 10px;border-radius:10px}
  .assassin-board{display:grid;grid-template-columns:1fr;gap:8px}
  .assassin-panel{display:inline-block}

  .assassin-gridWrap{width:${boxPx}px;height:${boxPx}px}
  .assassin-grid{width:100%;height:100%;white-space:normal;font-size:0;line-height:0;color:#cfe3ef}
  .assassin-cell{
    display:inline-block;
    width:calc(${boxPx}px / var(--W));
    height:calc(${boxPx}px / var(--H));
    line-height:calc(${boxPx}px / var(--H));
    text-align:center;vertical-align:top;
    font-weight:900;font-size:calc(${boxPx}px / var(--H));
    transform-origin:center center;
  }

  /* Glow */
  .p,.e,.dest{ text-shadow:0 0 2px currentColor, 0 0 6px currentColor; }
  .tree,.stone,.dirt,.grass,.marker{ text-shadow:0 0 1px currentColor, 0 0 3px currentColor; }
  .gv .p,.gv .e,.gv .dest,.gv .tree,.gv .stone,.gv .dirt,.gv .grass,.gv .marker{
    text-shadow:0 0 2px currentColor, 0 0 6px currentColor;
  }

  /* Colors */
  .gv{background:var(--guard-fov-bg)}
  .p{color:#ff4d4d}
  .e{color:#ff9a3a}
  .dest{color:#5ad16a}
  .tree{color:#5aa36a}   /* A */
  .stone{color:#9aa7b3}  /* ◍ */
  .dirt{color:#caa27a}   /* . */
  .grass{color:#99b67a}  /* " */
  .marker{color:#e8d37b} /* H */

  .assassin-log{height:120px;overflow:hidden;border:1px solid #26313a;border-radius:10px;padding:8px;background:#11151a}

  .assassin-controls{display:flex;gap:30px;align-items:center;flex-wrap:wrap}
  .assassin-dpad{display:grid;grid-template-columns:60px 60px 60px;grid-template-rows:60px 60px 60px;gap:14px}
  .assassin-dpad button{width:70px;height:70px}
  .assassin-actions button{min-width:120px;height:60px;margin-bottom:60px}
  .assassin-btn:disabled{opacity:.5;pointer-events:none;cursor:not-allowed}
  .assassin-btn{background:black;color:white;border:2px dashed #2a3640;border-radius:10px;padding:8px 10px;cursor:pointer}
  .assassin-btn:hover{border-color:#3a4854}

  .warn{color:#ff7a7a}.good{color:#9fc46b}.dim{color:#8aa2b3}
  `;
  document.head.appendChild(style);

  mount.classList.add('assassin-host');

  const wrap = document.createElement('div');
  wrap.className = 'assassin-wrap';
  wrap.innerHTML = `
    <div class="assassin-header">
      <h1 class="assassin-h1">ASSASSIN</h1>
      <div class="assassin-hud">
        <div class="assassin-badge" id="ass-floor">Trail 1 / ${parts}</div>
        <div class="assassin-badge" id="ass-hp">HP 8</div>
        <button class="assassin-btn" id="ass-new">New Run</button>
      </div>
    </div>

    <div class="assassin-log" id="ass-log" aria-live="polite"></div>

    <div class="assassin-board">
      <div class="assassin-panel">
        <div class="assassin-gridWrap"><pre id="ass-grid" class="assassin-grid" aria-label="map" role="img"></pre></div>
      </div>

      <div class="assassin-controls">
        <div class="assassin-dpad">
          <span></span><button class="assassin-btn" id="ass-up" aria-label="Up">W</button><span></span>
          <button class="assassin-btn" id="ass-left" aria-label="Left">A</button>
          <button class="assassin-btn" id="ass-down" aria-label="Down">S</button>
          <button class="assassin-btn" id="ass-right" aria-label="Right">D</button>
          <span></span><span></span><span></span>
        </div>
        <div class="assassin-actions">
          <button class="assassin-btn" id="ass-shuriken" aria-label="Throw shuriken">Shuriken (0)</button>
          <button class="assassin-btn" id="ass-smoke" aria-label="Use smoke bomb">Smoke Bomb (0)</button>
        </div>
      </div>
    </div>
  `;
  mount.appendChild(wrap);

  const byId = (id) => wrap.querySelector('#' + id);

  // ---------- Error logging hook ----------
  window.addEventListener('error', (e)=>{
    try { log(`JS Error: ${e.message}`, 'warn'); } catch {}
  });

  // ---------- Game constants/state ----------
  const W = gridSize, H = gridSize;
  const PARTS = parts;

  const rnd = (n) => Math.floor(Math.random()*n);
  const choice = (arr) => arr[rnd(arr.length)];

  const TILES = {
    TREE:'A', STONE:'◍', GRASS:'"', DIRT:'.',
    MARKER:'H', DEST:'⯐',
    SHURIKEN:'x', SMOKE:'o'
  };

  const state = {
    part: 1, hp: 8, shuriken: 2, smoke: 1, smokeTurns: 0,
    map: [], seenMask: [], fog: true,
    px: 0, py: 0, lastDx: 0, lastDy: -1,
    enemies: [], // {x,y,dir:[dx,dy],patrolTimer:int}
    destination: null
  };

  const DIRS = { up:[0,-1], down:[0,1], left:[-1,0], right:[1,0] };
  const DIRDEG = (d)=> (d[0]===1&&d[1]===0)?0 : (d[0]===0&&d[1]===1)?90 : (d[0]===-1&&d[1]===0)?180 : -90;
  const isBlocked = (t)=> (t===TILES.TREE || t===TILES.STONE);

  // ---------- UI helpers ----------
  const gridEl = byId('ass-grid');
  const logEl  = byId('ass-log');
  const floorBadge = byId('ass-floor');
  const hpBadge = byId('ass-hp');

  function setUIFrozen(frozen){
    ['ass-up','ass-down','ass-left','ass-right','ass-shuriken','ass-smoke'].forEach(id=>{
      const el = byId(id); if(el){ el.disabled = !!frozen; el.setAttribute('aria-disabled',frozen?'true':'false'); }
    });
  }

  function log(msg, cls=''){
    if(!logEl) return;
    const div=document.createElement('div'); if(cls) div.className=cls; div.textContent=msg;
    logEl.appendChild(div); logEl.scrollTop=logEl.scrollHeight;
  }

  // ---------- Map generation (forest trail) ----------
  function genTrailMap(finalPart=false){
    // base grass
    const m = Array.from({length:H},()=>Array.from({length:W},()=>TILES.GRASS));

    // scatter trees + stones
    for(let y=1;y<H-1;y++){
      for(let x=1;x<W-1;x++){
        const r=Math.random();
        if(r<0.12) m[y][x]=TILES.TREE;
        else if(r<0.16) m[y][x]=TILES.STONE;
      }
    }

    // left/right tree borders
    const borderL = typeof leftBorder === 'function' ? leftBorder() : leftBorder;
    const borderR = typeof rightBorder === 'function' ? rightBorder() : rightBorder;
    for(let y=0;y<H;y++){
      for(let x=0;x<borderL;x++) m[y][x] = TILES.TREE;
      for(let x=W-borderR;x<W;x++) m[y][x] = TILES.TREE;
    }

    // meandering trail bottom -> top
    // ensure start X falls between borders
    let x = rnd(Math.max(4, W - (borderL + borderR) - 4)) + borderL + 2;
    x = Math.max(borderL+2, Math.min(W-borderR-3, x));
    let y = H-2;
    const startX = x;

    while(y>1){
      m[y][x] = TILES.DIRT;
      if(Math.random()<0.25 && x+1<W-1 && x+1<W-borderR) m[y][x+1]=TILES.DIRT;
      if(Math.random()<0.25 && x-1>0   && x-1>borderL)   m[y][x-1]=TILES.DIRT;

      const dx = choice([-1,0,1,0]);
      const nx = Math.max(borderL+1, Math.min(W-borderR-2, x+dx));
      const ny = y-1;
      x = nx; y = ny;
      m[y][x] = TILES.DIRT;
    }

    // place markers / destination
    const bottomY = H-2;
    const bottomX = startX;
    m[bottomY][bottomX] = TILES.MARKER;

    const topY = 1;
    let topX = x;
    for(let sx=0; sx<W; sx++){
      const tx = Math.max(borderL+1, Math.min(W-borderR-2, x + (sx%2? -Math.ceil(sx/2): Math.ceil(sx/2))));
      if(m[topY][tx]===TILES.DIRT){ topX = tx; break; }
    }
    if(finalPart) m[topY][topX] = TILES.DEST; else m[topY][topX] = TILES.MARKER;

    // items
    function placeOnWalkable(sym, n){
      let tries=0;
      while(n>0 && tries++<8000){
        const px = rnd(W), py = rnd(H);
        const t = m[py][px];
        if((t===TILES.DIRT || t===TILES.GRASS) && px>borderL && px<W-borderR){
          m[py][px] = sym; n--;
        }
      }
    }
    placeOnWalkable(TILES.SHURIKEN, 3);
    placeOnWalkable(TILES.SMOKE, 2);

    // enemies
    const enemies=[]; const dirChoices=[DIRS.up,DIRS.down,DIRS.left,DIRS.right];
    let ecount = 8 + (state.part-1)*3 + rnd(3);
    let guard=0;
    while(ecount>0 && guard++<12000){
      const ex=rnd(W), ey=rnd(H);
      if(ex<=borderL || ex>=W-borderR) continue;
      if((m[ey][ex]===TILES.DIRT || m[ey][ex]===TILES.GRASS) &&
         !(ey===bottomY && ex===bottomX) && !(ey===topY && ex===topX)){
        enemies.push({x:ex,y:ey,dir:choice(dirChoices),patrolTimer:rnd(6)+3}); ecount--;
      }
    }

    const destination = finalPart ? {x:topX,y:topY} : null;
    return { m, enemies, px: bottomX, py: bottomY, destination };
  }

  // ---------- Visibility ----------
  const inBounds=(x,y)=> x>=0 && y>=0 && x<W && y<H;

  function tilesInEnemyFOV(g){
    const out=[]; let x=g.x, y=g.y;
    for(let r=1;r<=4;r++){
      x+=g.dir[0]; y+=g.dir[1]; if(!inBounds(x,y)) break;
      const t=state.map[y][x]; if(isBlocked(t)) break;
      out.push([x,y]);
    }
    return out;
  }

  function revealAll(){ state.seenMask = Array.from({length:H},()=>Array.from({length:W},()=>true)); }
  function fov(){
    if(!state.fog){ revealAll(); return; }
    const R=7; const seen = Array.from({length:H},()=>Array.from({length:W},()=>false));
    for(let dy=-R; dy<=R; dy++){
      for(let dx=-R; dx<=R; dx++){
        const tx=state.px+dx, ty=state.py+dy; if(!inBounds(tx,ty)) continue; if(dx*dx+dy*dy>R*R) continue;
        const steps = Math.max(Math.abs(dx), Math.abs(dy));
        const stepx = dx/steps || 0, stepy = dy/steps || 0;
        let cx=state.px, cy=state.py;
        for(let s=0; s<=steps; s++){
          const ix=Math.round(cx), iy=Math.round(cy); if(!inBounds(ix,iy)) break;
          seen[iy][ix]=true; if(isBlocked(state.map[iy][ix])) break; cx += stepx; cy += stepy;
        }
      }
    }
    state.seenMask = seen;
  }

  function enemySeesPlayer(g){
    if(state.smokeTurns>0) return false;
    let x=g.x, y=g.y;
    for(let r=1;r<=4;r++){
      x+=g.dir[0]; y+=g.dir[1]; if(!inBounds(x,y)) break;
      const t=state.map[y][x]; if(isBlocked(t)) return false;
      if(x===state.px && y===state.py) return true;
    }
    return false;
  }

  // ---------- Rendering ----------
  function render(){
    fov();
    if(!gridEl) return;
    gridEl.style.setProperty('--W', W);
    gridEl.style.setProperty('--H', H);

    const highlight = new Set();
    for(const g of state.enemies){
      if(state.fog && !(state.seenMask[g.y] && state.seenMask[g.y][g.x])) continue;
      for(const [hx,hy] of tilesInEnemyFOV(g)) highlight.add(hy*W+hx);
    }

    const eIndex = new Map();
    for(const g of state.enemies) eIndex.set(g.y*W+g.x, g);

    let html='';
    for(let y=0;y<H;y++){
      for(let x=0;x<W;x++){
        const visible = !state.fog || (state.seenMask[y] && state.seenMask[y][x]);
        const key=y*W+x;
        if(!visible){ html += '<span class="assassin-cell"> </span>'; continue; }

        const enemyHere = eIndex.get(key);
        const isPlayer = (state.px===x && state.py===y);
        const isDest = (state.destination && state.destination.x===x && state.destination.y===y);
        const isHL = highlight.has(key);

        if(isPlayer){
          const deg = DIRDEG([state.lastDx,state.lastDy]);
          html += `<span class="assassin-cell p${isHL?' gv':''}" style="transform:rotate(${deg}deg)">➤</span>`;
          continue;
        }
        if(enemyHere){
          const deg = DIRDEG(enemyHere.dir);
          html += `<span class="assassin-cell e${isHL?' gv':''}" style="transform:rotate(${deg}deg)">➤</span>`;
          continue;
        }
        if(isDest){
          html += `<span class="assassin-cell dest${isHL?' gv':''}">⯐</span>`;
          continue;
        }

        const t = state.map[y][x];
        const ch = (t+'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

        let cls='';
        if(t==='A') cls='tree';
        else if(t==='◍') cls='stone';
        else if(t==='.') cls='dirt';
        else if(t==='"') cls='grass';
        else if(t==='H') cls='marker';
        else if(t==='x' || t==='o') cls='dirt';

        const wrap = (isHL && !isBlocked(t)) ? `assassin-cell gv ${cls}` : `assassin-cell ${cls}`;
        html += `<span class="${wrap}">${ch}</span>`;
      }
      html += '<br/>';
    }
    gridEl.innerHTML = html;

    if(floorBadge) floorBadge.textContent = `Trail ${state.part} / ${PARTS}`;
    if(hpBadge) hpBadge.textContent = `HP ${state.hp}`;
    const bs = byId('ass-shuriken'); if(bs) bs.textContent = `Shuriken (${state.shuriken})`;
    const bm = byId('ass-smoke'); if(bm) bm.textContent = `Smoke Bomb (${state.smoke})`;
  }

  // ---------- Core loop helpers ----------
  function autoPickup(){
    const t=state.map[state.py][state.px];
    if(t==='x'){ state.shuriken++; state.map[state.py][state.px]='.'; log('You find a shuriken.'); }
    else if(t==='o'){ state.smoke++; state.map[state.py][state.px]='.'; log('You find a smoke bomb.'); }
  }

  function gameOver(msg){
    setUIFrozen(true);
    log(msg, 'warn');
    log('Mission failed. Press "New Run" to try again.');
    state.hp=0; render();
  }
  function win(){
    setUIFrozen(true);
    log('You reach the rendezvous point. Mission complete.', 'good');
    state.hp=0; render();
  }

  function tryMove(dx,dy){
    const nx=state.px+dx, ny=state.py+dy; if(!(nx>=0&&ny>=0&&nx<W&&ny<H)) return;
    const t=state.map[ny][nx]; if(isBlocked(t)) return;
    state.px=nx; state.py=ny; state.lastDx=dx; state.lastDy=dy; postMove();
  }

  function postMove(){
    autoPickup();
    if(state.smokeTurns>0){ state.smokeTurns--; if(state.smokeTurns===0) log('The smoke clears.', 'dim'); }

    const here = state.map[state.py][state.px];
    if(state.part < PARTS && here==='H'){ state.part++; log('You advance to the next section of the trail...', 'dim'); startPart(); return; }
    if(state.part===PARTS && state.destination && state.px===state.destination.x && state.py===state.destination.y){ return win(); }

    for(const g of state.enemies){ if(enemySeesPlayer(g)) return gameOver('An enemy spots you. The chase ends your mission.'); }

    enemiesAct();
    render();
  }

  function throwShuriken(dx,dy){
    if(state.shuriken<=0){ log('Out of shuriken.', 'dim'); return; }
    if(dx===0 && dy===0){ dx=1; dy=0; }
    state.shuriken--;
    let x=state.px, y=state.py;
    for(let i=0;i<8;i++){
      x+=dx; y+=dy; if(!(x>=0&&y>=0&&x<W&&y<H)) break;
      const t=state.map[y][x]; if(isBlocked(t)) break;
      const gi= state.enemies.findIndex(g=>g.x===x && g.y===y);
      if(gi>=0){ state.enemies.splice(gi,1); log('A silent strike drops an enemy.'); render(); return; }
    }
    log('The shuriken vanishes between the trees.', 'dim');
  }
  function smoke(){ if(state.smoke<=0){ log('No smoke bombs left.', 'dim'); return; } state.smoke--; state.smokeTurns=3; log('You vanish into smoke (3 turns).'); render(); }

  function enemiesAct(){
    const dirChoices=[DIRS.up,DIRS.down,DIRS.left,DIRS.right];
    for(const g of state.enemies){
      if(enemySeesPlayer(g)) return gameOver('An enemy spots you. The chase ends your mission.');

      let nx=g.x+g.dir[0], ny=g.y+g.dir[1];
      const pass = (nx>=0&&ny>=0&&nx<W&&ny<H) && !isBlocked(state.map[ny][nx]);
      if(pass){ g.x=nx; g.y=ny; } else { g.dir = choice(dirChoices); }

      g.patrolTimer--; if(g.patrolTimer<=0){ g.dir = choice(dirChoices); g.patrolTimer=rnd(6)+3; }

      if(enemySeesPlayer(g)) return gameOver('An enemy spots you. The chase ends your mission.');
      if(g.x===state.px && g.y===state.py) return gameOver('An enemy barrels into you!');
    }
  }

  function startPart(){
    const final = (state.part===PARTS);
    const {m, enemies, px, py, destination} = genTrailMap(final);
    state.map=m; state.enemies=enemies; state.px=px; state.py=py; state.destination=destination;
    if(final){ log('Final stretch. Reach the destination at the top.', 'good'); }
    else { log(`Forest trail — part ${state.part}. Head north.`, 'dim'); }
    render();
  }

  function newRun(){
    setUIFrozen(false);
    state.part=1; state.hp=8; state.shuriken=2; state.smoke=1; state.smokeTurns=0; state.fog = true; state.lastDx=0; state.lastDy=-1;
    if(logEl) logEl.innerHTML='';
    log('The forest is silent. Begin at the trailhead and move north...', 'dim');
    startPart();
  }

  // ---------- Inputs ----------
  function onKeydown(e){
    if(state.hp<=0 && e.key!=='Enter') return;
    const k = e.key.toLowerCase();
    if(k==='arrowup' || k==='w') tryMove(0,-1);
    else if(k==='arrowdown' || k==='s') tryMove(0,1);
    else if(k==='arrowleft' || k==='a') tryMove(-1,0);
    else if(k==='arrowright' || k==='d') tryMove(1,0);
    else if(k==='f') throwShuriken(state.lastDx, state.lastDy);
    else if(k==='v') smoke();
  }
  window.addEventListener('keydown', onKeydown);

  byId('ass-new')?.addEventListener('click', newRun);
  byId('ass-up')?.addEventListener('click', ()=>tryMove(0,-1));
  byId('ass-down')?.addEventListener('click', ()=>tryMove(0,1));
  byId('ass-left')?.addEventListener('click', ()=>tryMove(-1,0));
  byId('ass-right')?.addEventListener('click', ()=>tryMove(1,0));
  byId('ass-shuriken')?.addEventListener('click', ()=>throwShuriken(state.lastDx, state.lastDy));
  byId('ass-smoke')?.addEventListener('click', smoke);

  // auto-start
  newRun();

  // ---------- Public API ----------
  return {
    newRun,
    freeze: (on=true)=> setUIFrozen(on),
    setFog: (on)=> { state.fog = !!on; render(); },
    config: { get gridSize(){return gridSize;}, get boxPx(){return boxPx;}, get parts(){return PARTS;}},
    destroy: ()=>{
      window.removeEventListener('keydown', onKeydown);
      if (wrap.parentNode === mount) mount.removeChild(wrap);
      if (style.parentNode) style.parentNode.removeChild(style);
    }
  };
}
