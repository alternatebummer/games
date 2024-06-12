class Building {
    constructor(name, turnsToBuild) {
        this.name = name;
        this.turnsToBuild = turnsToBuild;
        this.turnsLeft = turnsToBuild;
        this.completed = false;
    }

    buildTurn() {
        if (this.turnsLeft > 0) {
            this.turnsLeft -= 1;
            if (this.turnsLeft === 0) {
                this.completed = true;
                return `${this.name} has been built.`;
            }
        }
        return null;
    }
}

const buildings = [];
const underConstruction = [];
const populationLimit = 30;

const addBuilding = (name) => {
    if (name === "Dormitory") {
        buildings.push(new Building(name, 2));
    }
}

const buildTurn = () => {
    let messages = [];
    for (let building of underConstruction) {
        const message = building.buildTurn();
        if (message) {
            messages.push(message);
            if (building.completed) {
                buildings.push(building);
            }
        }
    }
    return messages;
}