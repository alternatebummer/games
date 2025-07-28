// script.js
const locations = [
  'cafe', 'newsroom', 'park', 'library', 'hotel',
  'market', 'riverbank', 'police station', 'party office'
];

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
  gameDiv.innerHTML += '<br>' + text;
  gameDiv.scrollTop = gameDiv.scrollHeight;
}

function clearDialogueOptions() {
  dialogDiv.innerText = '';
}

function showDialogueOptions() {
  // Always same options
  dialogDiv.innerText = 'Dialogue Options: bribe, intimidate, include in report, end conversation';
}

function updateInventory() {
  document.getElementById('inventory').innerText = 'Inventory: ' + inventory.join(', ');
}

function showPresence() {
  for (const [name, w] of Object.entries(witnesses)) {
    if (w.location === currentLocation && !w.reported) show(`- ${titleCase(name)} is also here.`);
  }
  if (currentLocation === 'party office') show('- Comrade Elisa is also here.');
}

function init() {
  show(`You are at the ${currentLocation}.`);
  showPresence();
  updateInventory();
  clearDialogueOptions();
  show("- Type 'help' to see available commands.");
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
  // Prevent non-dialogue actions during questioning
  if (currentInteraction && !['bribe','intimidate','include in report','end conversation'].includes(command)) {
    return show("<br>You can't do this while questioning a witness.");
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

  } else if (command === 'use homicide report') {
    show('<br>Homicide Report Contents:');
    if (!report.length) show('(no entries yet)'); else report.forEach(entry => show(`- ${titleCase(entry.name)}: "${entry.statement}"`));

  } else if (command.startsWith('walk to ')) {
    const loc = command.slice(8);
    if (locations.includes(loc)) {
      currentLocation = loc;
      show(`<br>You walk to the ${loc}.`);
      showPresence();
      updateInventory();
    } else {
      show('<br>Unknown location.');
    }

  } else if (command.startsWith('talk to ')) {
    const name = command.slice(8);
    if (currentLocation === 'party office' && name === 'comrade elisa') {
      report.length === 6
        ? show('good enough, comrade. The party thanks you for your expeditious work.')
        : show('This report is incomplete, comrade. Finish your job before speaking with me again.');
    } else {
      const w = witnesses[name];
      if (w && w.location === currentLocation && !w.reported) {
        if (w.initialTruth === null) w.initialTruth = Math.random() < 0.5;
        show(`<br>${name} says: "${w.initialTruth ? w.trueStatement : w.falseStatement}"`);
        showDialogueOptions();
        currentInteraction = { name, step: 1 };
      } else {
        show('<br>No one by that name here.');
      }
    }

  } else if (['bribe','intimidate','include in report','end conversation'].includes(command) && currentInteraction) {
    handleInteraction(command);

  } else {
    show('Unknown command.');
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
      ? `${currentInteraction.name} says: "I already told you everything I know."`
      : `You ${cmd} ${currentInteraction.name}. They then tell you the truth: "${w.trueStatement}"`);
    currentInteraction.step = 2;
    showDialogueOptions();
    show('- Type include in report to record this.');

  } else {
    show('<br>Invalid option.');
  }
}

init();
