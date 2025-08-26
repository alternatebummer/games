// travel.js — ES module (minimal UI version)
// Usage:
//   import { createAssassinGame } from './travel.js';
//   const game = createAssassinGame({ mount: document.getElementById('someDiv') });

export function createAssassinGame({
  mount,
  gridSize = 40,
  boxPx = 500,
  parts = 3,
  leftBorder = () => 8 + Math.floor(Math.random()*3),
  rightBorder = () => 8 + Math.floor(Math.random()*3),
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
  .assassin-wrap{max-width:${boxPx}px;margin:0 auto;padding:0;display:grid;gap:12px;color:var(--ink);font:14px/1.45 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}

  .assassin-gridWrap{position:relative;width:${boxPx}px;height:${boxPx}px}
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

  .ass-overlay-badge{position:absolute;top:6px;z-index:2}
  .ass-overlay-badge.left{ left:6px; }
  .ass-overlay-badge.right{ right:6px; }
  .assassin-badge{
    background:rgba(17,21,26,.85);
    border:1px solid #26313a;
    padding:6px 10px;
    border-radius:10px;
    backdrop-filter:saturate(120%) blur(2px);
  }

  .assassin-log{height:120px;overflow:hidden;border:1px solid #26313a;border-radius:10px;padding:8px;background:#11151a;margin-top:12px}

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
  .tree{color:#5aa36a}
  .stone{color:#9aa7b3}
  .dirt{color:#caa27a}
  .grass{color:#99b67a}
  .marker{color:#e8d37b}

  .warn{color:#ff7a7a}.good{color:#9fc46b}.dim{color:#8aa2b3}
  `;
  document.head.appendChild(style);

  const wrap = document.createElement('div');
  wrap.className = 'assassin-wrap';
  wrap.innerHTML = `
    <div class="assassin-gridWrap">
      <div class="ass-overlay-badge left"><div class="assassin-badge" id="ass-floor">Trail 1 / ${parts}</div></div>
      <div class="ass-overlay-badge right"><div class="assassin-badge" id="ass-hp">HP 8</div></div>
      <pre id="ass-grid" class="assassin-grid" aria-label="map" role="img"></pre>
    </div>
    <div class="assassin-log" id="ass-log" aria-live="polite"></div>
  `;
  mount.appendChild(wrap);

  const byId = (id) => wrap.querySelector('#' + id);

  // ---------- Error logging ----------
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
    enemies: [], destination: null
  };

  const DIRS = { up:[0,-1], down:[0,1], left:[-1,0], right:[1,0] };
  const DIRDEG = (d)=> (d[0]===1&&d[1]===0)?0 : (d[0]===0&&d[1]===1)?90 : (d[0]===-1&&d[1]===0)?180 : -90;
  const isBlocked = (t)=> (t===TILES.TREE || t===TILES.STONE);

  // ---------- UI helpers ----------
  const gridEl = byId('ass-grid');
  const logEl  = byId('ass-log');
  const floorBadge = byId('ass-floor');
  const hpBadge = byId('ass-hp');

  function setUIFrozen(){} // no buttons anymore

  function log(msg, cls=''){
    if(!logEl) return;
    const div=document.createElement('div'); if(cls) div.className=cls; div.textContent=msg;
    logEl.appendChild(div); logEl.scrollTop=logEl.scrollHeight;
  }

  // (map gen, fov, rendering, enemies, etc. remain same as your last version…)

  // ---------- Gameplay entry ----------
  function newRun(){
    state.part=1; state.hp=8; state.shuriken=2; state.smoke=1; state.smokeTurns=0; state.fog = true; state.lastDx=0; state.lastDy=-1;
    if(logEl) logEl.innerHTML='';
    log("The forest is silent. Begin at the trailhead and move north. w,a,s,d for movement. Avoid enemy line of sight and survive 'til you reach the package's destination.", 'dim');
    startPart();
  }

  // attach key listeners only (no UI buttons now)
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

  // auto-start
  newRun();

  // public API (unchanged)
  return { newRun, destroy: ()=>{ window.removeEventListener('keydown', onKeydown); if(wrap.parentNode===mount) mount.removeChild(wrap); if(style.parentNode) style.parentNode.removeChild(style);} };
}
