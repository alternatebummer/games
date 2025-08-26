// travel.js — ES module (minimal UI, embedded panel version)
// Usage:
//   import { createAssassinGame } from './travel.js';
//   const game = createAssassinGame({ mount: document.getElementById('someDiv') });

export function createAssassinGame({
  mount,
  gridSize = 40,         // logical grid (gridSize x gridSize)
  boxPx = 500,           // square render size in pixels
  parts = 3,             // number of trail parts
  leftBorder = () => 8 + Math.floor(Math.random()*3),  // left treeline width (cols)
  rightBorder = () => 8 + Math.floor(Math.random()*3), // right treeline width (cols)
} = {}) {
  if (!mount) throw new Error('createAssassinGame: mount element is required');

  // ---------- DOM + Styles ----------
  const style = document.createElement('style');
  style.textContent = `
  :root{
    --bg:#0b0e12; --panel:#11151a; --ink:#cfe3ef; --muted:#8aa2b3; --accent:#9fc46b; --danger:#ff7a7a;
    --guard-fov-bg:#705f1a;
    --grass:#99b67a;
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

  /* Overlays inside the grid */
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

  .assassin-log{
    height:120px;
    overflow:auto;                         /* auto scroll */
    border:1px solid #26313a;border-radius:10px;padding:8px;background:#11151a;margin-top:12px
  }
  /* Scrollbar styled with grass color */
  .assassin-log::-webkit-scrollbar{ width:10px; height:10px; }
  .assassin-log::-webkit-scrollbar-track{ background:#0f1418; }
  .assassin-log::-webkit-scrollbar-thumb{ background:var(--grass); border-radius:8px; }
  .assassin-log{ scrollbar-color: var(--grass) #0f1418; scrollbar-width: thin; }

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
    MARKER:'H', DEST:'⯐'
  };

  const state = {
    part: 1,
    hp: 8,
    map: [],
    seenMask: [],
    fog: true,
    px: 0, py: 0,
    lastDx: 0, lastDy: -1,
    enemies: [], // {x,y,dir:[dx,dy],patrolTimer:int}
    destination: null
  };

  const DIRS = { up:[0,-1], down:[0,1], left:[-1,0], right:[1,0] };
  const DIRDEG = (d)=> (d[0]===1&&d[1]===0)?0 : (d[0]===0&&d[1]===1)?90 : (d[0]===-1&&d[1]===0)?180 : -90;
  const isBlocked = (t)=> (t===TILES.TREE || t===TILES.STONE);

  // Input gating
  let inputEnabled = true;

  // Autobattle gating
  let losArmed = false;           // becomes true only after the player has moved
  let inAutobattle = false;       // prevents re-entry while a battle is running

  // ---------- UI helpers ----------
  const gridEl = byId('ass-grid');
  const logEl  = byId('ass-log');
  const floorBadge = byId('ass-floor');
  const hpBadge = byId('ass-hp');

  function log(msg, cls=''){
    if(!logEl) return;
    const div=document.createElement('div'); if(cls) div.className=cls; div.textContent=msg;
    logEl.appendChild(div); logEl.scrollTop=logEl.scrollHeight;
  }

  // ---------- Map generation (forest trail) ----------
  function genTrailMap(finalPart=false){
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

    // meandering trail bottom -> top (start X inside borders)
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

  function enemySeesPoint(g, x, y){
    // Raycast 4 forward tiles; return true if it reaches (x,y) before hitting a blocker
    let cx=g.x, cy=g.y;
    for(let r=1;r<=4;r++){
      cx+=g.dir[0]; cy+=g.dir[1]; if(!inBounds(cx,cy)) break;
      const t=state.map[cy][cx]; if(isBlocked(t)) return false;
      if(cx===x && cy===y) return true;
    }
    return false;
  }

  function anyEnemySeesPlayer(){
    for(const g of state.enemies){
      if(enemySeesPoint(g, state.px, state.py)) return true;
    }
    return false;
  }

  // ---------- Autobattle handshake ----------
  async function triggerAutobattle(reason='spotted'){
    if (inAutobattle) return;
    inAutobattle = true;
    inputEnabled = false;
    log(`Enemy sighted (${reason}). Entering autobattle...`, 'warn');
    try{
      const { beginAutoBattle } = await import('./autobattle.js');
      // Pass minimal context; expand later as needed
      const result = await beginAutoBattle?.({ part: state.part, hp: state.hp }) ?? { outcome:'resume' };
      // Handle basic outcomes
      if(result.outcome === 'defeat'){
        log('Defeated in battle. Mission failed.', 'warn');
        state.hp = 0;
      }else if(result.hpDelta){
        state.hp = Math.max(0, state.hp + result.hpDelta);
        log(`Battle ends. HP ${state.hp}`, result.hpDelta < 0 ? 'warn':'good');
      }else{
        log('Battle ends. You slip back onto the trail...', 'dim');
      }
    }catch(err){
      log(`Autobattle error: ${String(err)}`, 'warn');
    }finally{
      inAutobattle = false;
      inputEnabled = state.hp > 0; // resume only if alive
      render();
    }
  }

  // ---------- Rendering (cropped to 17 rows centered on player) ----------
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

    // Cropping window: 17 rows total (8 up, self, 8 down)
    const viewHalf = 8;
    const yStart = Math.max(0, Math.min(H - (2*viewHalf + 1), state.py - viewHalf));
    const yEnd = Math.min(H - 1, yStart + 2*viewHalf); // inclusive

    let html='';
    for(let y=yStart; y<=yEnd; y++){
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
        if(t===TILES.TREE) cls='tree';
        else if(t===TILES.STONE) cls='stone';
        else if(t===TILES.DIRT) cls='dirt';
        else if(t===TILES.GRASS) cls='grass';
        else if(t===TILES.MARKER) cls='marker';

        const wrap = (isHL && !isBlocked(t)) ? `assassin-cell gv ${cls}` : `assassin-cell ${cls}`;
        html += `<span class="${wrap}">${ch}</span>`;
      }
      html += '<br/>';
    }
    gridEl.innerHTML = html;

    if(floorBadge) floorBadge.textContent = `Trail ${state.part} / ${PARTS}`;
    if(hpBadge) hpBadge.textContent = `HP ${state.hp}`;
  }

  // ---------- Core loop helpers ----------
  function tryMove(dx,dy){
    if(!inputEnabled) return;
    const nx=state.px+dx, ny=state.py+dy; if(!(nx>=0&&ny>=0&&nx<W&&ny<H)) return;
    const t=state.map[ny][nx]; if(isBlocked(t)) return;

    state.px=nx; state.py=ny; state.lastDx=dx; state.lastDy=dy;

    // We only arm LOS after the first successful move in a part/run
    if(!losArmed) losArmed = true;

    postMove();
  }

  function postMove(){
    // Progression checks happen first
    const here = state.map[state.py][state.px];
    if(state.part < PARTS && here===TILES.MARKER){
      state.part++;
      losArmed = false;          // disarm on load of the next section to avoid instant battles
      log('You advance to the next section of the trail...', 'dim');
      startPart();
      return;
    }
    if(state.part===PARTS && state.destination && state.px===state.destination.x && state.py===state.destination.y){
      inputEnabled = false;
      log('You reach the rendezvous point. Mission complete.', 'good');
      render();
      return;
    }

    // LOS check ONLY when player moves, and ONLY if LOS is armed
    if(losArmed && anyEnemySeesPlayer()){
      // Pause and enter autobattle; render first so highlights reflect the risky tile
      render();
      triggerAutobattle('line-of-sight');
      return;
    }

    // Then enemies move (but their LOS won’t trigger autobattle — only collisions can)
    enemiesAct();
    render();
  }

  function enemiesAct(){
    const dirChoices=[DIRS.up,DIRS.down,DIRS.left,DIRS.right];
    for(const g of state.enemies){
      // (No pre-LOS check here — per spec, only player movement triggers LOS battles)

      let nx=g.x+g.dir[0], ny=g.y+g.dir[1];
      const pass = (nx>=0&&ny>=0&&nx<W&&ny<H) && !isBlocked(state.map[ny][nx]);
      if(pass){ g.x=nx; g.y=ny; } else { g.dir = choice(dirChoices); }

      g.patrolTimer--; if(g.patrolTimer<=0){ g.dir = choice(dirChoices); g.patrolTimer=rnd(6)+3; }

      // (No post-LOS check here either)
      if(g.x===state.px && g.y===state.py){
        // Direct collision can also trigger autobattle
        render();
        triggerAutobattle('collision');
        return;
      }
    }
  }

  function startPart(){
    const final = (state.part===PARTS);
    const {m, enemies, px, py, destination} = genTrailMap(final);
    state.map=m; state.enemies=enemies; state.px=px; state.py=py; state.destination=destination;
    losArmed = false;          // disarm LOS on fresh part
    inputEnabled = true;       // ensure controls are on
    if(final){ log('Final stretch. Reach the destination at the top.', 'good'); }
    else { log(`Forest trail — part ${state.part}. Head north.`, 'dim'); }
    render();
  }

  function newRun(){
    inputEnabled = true;
    losArmed = false;
    inAutobattle = false;
    state.part=1; state.hp=8; state.fog = true; state.lastDx=0; state.lastDy=-1;
    if(logEl) logEl.innerHTML='';
    log("The forest is silent. Begin at the trailhead and move north. w,a,s,d for movement. Avoid enemy line of sight and survive 'til you reach the package's destination.", 'dim');
    startPart();
  }

  // ---------- Inputs ----------
  function onKeydown(e){
    if(!inputEnabled && e.key!=='Enter') return;
    const k = e.key.toLowerCase();
    if(k==='arrowup' || k==='w') tryMove(0,-1);
    else if(k==='arrowdown' || k==='s') tryMove(0,1);
    else if(k==='arrowleft' || k==='a') tryMove(-1,0);
    else if(k==='arrowright' || k==='d') tryMove(1,0);
  }
  window.addEventListener('keydown', onKeydown);

  // auto-start
  newRun();

  // ---------- Public API ----------
  return {
    newRun,
    freeze: (on=true)=> { inputEnabled = !on; },
    setFog: (on)=> { state.fog = !!on; render(); },
    config: { get gridSize(){return gridSize;}, get boxPx(){return boxPx;}, get parts(){return PARTS;}},
    destroy: ()=>{
      window.removeEventListener('keydown', onKeydown);
      if (wrap.parentNode === mount) mount.removeChild(wrap);
      if (style.parentNode) style.parentNode.removeChild(style);
    }
  };
}
