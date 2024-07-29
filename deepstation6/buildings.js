const buildings = [
    {
        name: "Dormitory",
        description: "Determines the population limit. Adds +30 to the max population."
    }
];

function initializeBuildings() {
    const buildingContainer = document.getElementById('buildings');
    buildings.forEach(building => {
        const buildingElement = document.createElement('li');
        buildingElement.className = 'building';
        buildingElement.textContent = building.name;
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = building.description;
        buildingElement.appendChild(tooltip);
        buildingContainer.appendChild(buildingElement);
    });
}

initializeBuildings();
