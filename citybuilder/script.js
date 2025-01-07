let day = 1;
let month = 1;
let year = 1;
let funds = 1000;
let population = 0;
let populationLimit = 0;
let workingPop = 0;
let workingPopLimit = 0;
let labour = 10;
let happiness = 10;
let residentialZones = 0;
let industrialZones = 0;
let recreationalZones = 0;

function updateStats() {
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
    document.getElementById('year').textContent = year;
    document.getElementById('funds').textContent = funds;
    document.getElementById('population').textContent = population;
    document.getElementById('populationLimit').textContent = populationLimit;
    document.getElementById('workingPop').textContent = workingPop;
    document.getElementById('workingPopLimit').textContent = workingPopLimit;
    document.getElementById('labour').textContent = labour;
    document.getElementById('happiness').textContent = happiness;
    document.getElementById('residentialZones').textContent = residentialZones;
    document.getElementById('industrialZones').textContent = industrialZones;
    document.getElementById('recreationalZones').textContent = recreationalZones;
}

function processCommand() {
    const command = document.getElementById('command-input').value.trim().toLowerCase();
    if (command === 'build housing') {
        if (funds >= 250) {
            funds -= 250;
            residentialZones += 1;
            populationLimit += 10;
        }
    } else if (command === 'build industrial') {
        if (funds >= 500) {
            funds -= 500;
            industrialZones += 1;
            workingPopLimit += 5;
        }
    } else if (command === 'build park') {
        if (funds >= 100) {
            funds -= 100;
            recreationalZones += 1;
            happiness += 2;
        }
    }
    document.getElementById('command-input').value = '';
    updateStats();
}

function nextTurn() {
    day += 1;
    if (day > 30) {
        day = 1;
        month += 1;
        if (month > 12) {
            month = 1;
            year += 1;
        }
    }

    // Population growth
    if (population < populationLimit) {
        population += Math.min(4, populationLimit - population);
    }

    // Working population
    if (workingPop < workingPopLimit) {
        workingPop += Math.min(2, workingPopLimit - workingPop);
    }

    // Generate labour and funds, decrease happiness from industrial zones
    if (workingPop >= 5) {
        labour += 3 * Math.floor(workingPop / 5);
    }
    funds += 50 * industrialZones;
    happiness -= industrialZones;

    // Update stats
    updateStats();
}

// Update stats initially
updateStats();

// Set interval to advance the game by 1 day every 10 seconds
setInterval(nextTurn, 10000);
