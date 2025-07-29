// script.js
const locations = [
  'cafe', 'newsroom', 'park', 'library', 'hotel',
  'market', 'riverbank', 'police station', 'party office'
];

// Descriptions for each location
const locationDescriptions = {
  'cafe': "Café Stilyagi sits on the corner of the district's mainstreet. It looks humid inside, with grime and condensation advancing unchecked upon the large plate glass windows. The café's patio is roped off. The victim's blood still stains the old concrete.",
  'newsroom': "The newsroom buzzes with activity. Desks cluttered with papers form a chaotic maze. The faint smell of coffee and cigarette smoke lingers. Bulletin boards display headlines plastered with red 'Party Approved' stickers.",
  'park': "Oakwood Park offers a small patch of green amidst the urban sprawl. A few benches line the winding paths. The morning dew glistens on the grass, and bird chatter is barely audible under the city's hum.",
  'library': "The old library's towering shelves create narrow aisles. Dust motes float in shafts of light from the high windows. The air is cool and silent, save for the soft rustle of pages.",
  'hotel': "The Grand Meridian Hotel lobby is grand but eerily empty. Crystal chandeliers hang from a vaulted ceiling. The receptionist desk lies abandoned, and a lone bell sits silent.",
  'market': "Harvest Market is a riot of color and sound. Stalls overflow with fruits and vegetables. The scent of spices drifts through the air. Vendors shout their wares, though the faces look tense.",
  'riverbank': "The riverbank stretches along the murky water. A low stone wall borders the bank. Weeds push through cracks in the pavement, and the river's gentle lapping contrasts with the city's bustle.",
  'police station': "You are this district's homicide detective and this is your workplace. Comrade Elisa, the district's party officer, has issued you a work order. It should be in here somewhere if you haven't already picked it up.",
  'party office': "The Party Office's grand facade hides a dim interior. Red banners drape the walls. A large table sits in the center, strewn with papers stamped 'Urgent'."
};

let currentLocation = 'police station';
const gameDiv = document.getElementById('game');
const dialogDiv = document.getElementById('dialogue-options');
const input = document.getElementById('input');
let report = [];
let currentInteraction = null;
let inventory = ['district map', 'homicide report'];

const witnesses = {
  rudolpho: { location: 'cafe', trueStatement: 'I saw him reading the paper when a man in a dark coat crept up behind him and shot him execution style.', falseStatement: 'I didn\'t notice anything unusual; I thought someone dropped something heavy.', initialTruth: null, reported: false },
  marisol:  { location: 'park', trueStatement: 'I heard the shot and saw the shooter limp away after being bitten by the dog.', falseStatement: 'It sounded like a car backfiring; maybe someone popped a balloon.', initialTruth: null, reported: false },
  anton:    { location: 'library', trueStatement: 'The shooter held a police pistol and had a scar on his right cheek.', falseStatement: 'I think the shot came from the street, but I couldn\'t see who fired.', initialTruth: null, reported: false },
  lucia:    { location: 'market', trueStatement: 'He wore a black suit with the party insignia; I recognized it from their posters.', falseStatement: 'I saw a street performer drop his prop gun; it made a loud bang.', initialTruth: null, reported: false },
  fernando: { location: 'hotel', trueStatement: 'The little white dog ran at the shooter and bit his ankle hard.', falseStatement: 'That dog is always running around; I thought it was chasing a cat, not biting anyone.', initialTruth: null, reported: false },
  isabel:   { location: 'riverbank', trueStatement: 'I saw the man clutch his ankle and stumble, blood seeping from a bite wound.', falseStatement: 'Everyone was crowding the street; I couldn\'t really get a clear look.', initialTruth: null, reported: false }
};

function titleCase(str) {
  return str.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
}

function show(text) {
  gameDiv.innerHTML += '' + text;
  gameDiv.scrollTop = gameDiv.scrollHeight;
}

function clearDialogueOptions() {
  dialogDiv.innerText = '';
}

function showDialogueOptions() {
  dialogDiv.innerText = 'Dialogue Options: bribe, intimidate, include in report, end conversation';
}

function updateInventory() {
  document.getElementById('inventory').innerText = 'Inventory: ' + inventory.join(', ');
}

function showPresence() {
  for (const [name, w] of Object.entries(witnesses)) {
    if (w.location === currentLocation && !w.reported) show(`<span class="details">- ${titleCase(name)} is also here.</span>`);
  }
  if (currentLocation === 'party office') show('<span class="details">- Comrade Elisa is also here.</span>');
}

function describeLocation(loc) {
  const desc = locationDescriptions[loc];
  if (desc) show(`<br><span class="details">- ${desc}</span>`);
}

function init() {
  show(`You are at the ${currentLocation}.`);
  describeLocation(currentLocation);
  showPresence();
  updateInventory();
  clearDialogueOptions();
  show("- Type 'help' to see available commands.<br>");
  input.focus();
}

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const cmd = input.value.trim().toLowerCase();
    input.value = '';
    handle(cmd);
  }
});

function handle(command) {
  if (currentInteraction && !['bribe','intimidate','include in report','end conversation'].includes(command)) {
    return show("You can't do this while questioning a witness.");
  }

  if (command === 'help') {
    show('<br>Available commands:');
    show('- walk to [location]');
    show('- talk to [name]');
    show('- use [item] (e.g., district map, homicide report)');
    show('- help');
    show('Rules:');
    show('- You can only talk to witnesses by visiting their location.');
    show('- To file your report, visit the party office and talk to Comrade Elisa after interviewing all 6 witnesses.');

  } else if (command === 'use district map') {
    show('<br>District Map – Locations you can walk to:');
    show(locations.join('<br>'));
    show('<br>');

  } else if (command === 'use homicide report') {
    show('<br>Homicide Report Contents:');
    show('<br>');
    if (!report.length) show('(no entries yet)'); else report.forEach(entry => show(`- ${titleCase(entry.name)}: "${entry.statement}"<br>`));
    show('<br>');

  } else if (command.startsWith('walk to ')) {
    const loc = command.slice(8);
    if (locations.includes(loc)) {
      currentLocation = loc;
      show(`<br>You walk to the ${loc}.`);
      describeLocation(loc);
      showPresence();
      updateInventory();
    } else {
      show('<br>Unknown location.');
    }

  } else if (command.startsWith('talk to ')) {
    const name = command.slice(8);
    if (currentLocation === 'party office' && name === 'comrade elisa') {
      report.length === 6
        ? show('<br>Good enough, comrade. The party thanks you for your expeditious work.')
        : show('<br>This report is incomplete, comrade. Finish your job before speaking with me again.');
    } else {
      const w = witnesses[name];
      if (w && w.location === currentLocation && !w.reported) {
        if (w.initialTruth === null) w.initialTruth = Math.random() < 0.5;
        show(`<span class="testimony">${titleCase(name)} says: "${w.initialTruth ? w.trueStatement : w.falseStatement}"</span>`);
        showDialogueOptions();
        currentInteraction = { name, step: 1 };
      } else {
        show('<br>No one by that name here.');
      }
    }

  } else if (['bribe','intimidate','include in report','end conversation'].includes(command) && currentInteraction) {
    handleInteraction(command);

  } else {
    show('<br>Unknown command.<br>');
  }
}

function handleInteraction(cmd) {
  const w = witnesses[currentInteraction.name];
  if (cmd === 'end conversation') {
    show('<br>You end the conversation.');
    clearDialogueOptions();
    currentInteraction = null;

  } else if (cmd === 'include in report') {
    const recorded = currentInteraction.step === 2 ? w.trueStatement : (w.initialTruth ? w.trueStatement : w.falseStatement);
    report.push({ name: currentInteraction.name, statement: recorded });
    w.reported = true;
    show('<br>Statement recorded.');
    clearDialogueOptions();
    currentInteraction = null;

  } else if (currentInteraction.step === 1 && (cmd === 'intimidate' || cmd === 'bribe')) {
    show(w.initialTruth
      ? `<br><span class="testimony">${titleCase(currentInteraction.name)} says: "I already told you everything I know."</span>`
      : `<br>You ${cmd} ${titleCase(currentInteraction.name)}. <span class="testimony">They then tell you the truth: "${w.trueStatement}"</span>`);
    currentInteraction.step = 2;
    showDialogueOptions();
  } else {
    show('<br>Invalid option.');
  }
}

init();
