let population = 10;
let populationLimit = 30;
let turn = 0;

const updateUI = () => {
    document.getElementById("population").textContent = population;
    document.getElementById("population-limit").textContent = populationLimit;

    const buildingsList = document.getElementById("buildings");
    buildingsList.innerHTML = '';
    for (let building of buildings) {
        if (building.completed) {
            const li = document.createElement("li");
            li.textContent = building.name;
            buildingsList.appendChild(li);
        }
    }

    const underConstructionList = document.getElementById("under-construction");
    underConstructionList.innerHTML = '';
    for (let building of underConstruction) {
        const li = document.createElement("li");
        li.textContent = `${building.name} (under construction, ${building.turnsLeft} turns left)`;
        underConstructionList.appendChild(li);
    }
}

const startBuilding = (name) => {
    const newBuilding = new Building(name, 2);
    underConstruction.push(newBuilding);
    updateUI();
}

const gameTurn = () => {
    turn += 1;

    // Add a new colonist every 10 seconds
    if (turn % 2 === 0) {
        if (population < populationLimit) {
            colonists.push(generateColonist());
            population += 1;
        }
    }

    // Process building construction
    const messages = buildTurn();
    for (let message of messages) {
        if (message) {
            console.log(message);
        }
    }

    // Update population limit if a new dormitory is completed
    for (let building of buildings) {
        if (building.name === "Dormitory" && building.completed) {
            populationLimit += 30;
        }
    }

    updateUI();
}

// Start the game loop
setInterval(gameTurn, 30000); // 60 seconds per turn

updateUI();