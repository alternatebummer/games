document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    const calendarElement = document.getElementById('calendar');
    const accountBalanceElement = document.getElementById('account-balance');
    const fishMarketElement = document.getElementById('fish-market');
    const fishPricesElement = document.getElementById('fish-prices');
    const acceptSaleButton = document.getElementById('acceptSale');
    const declineSaleButton = document.getElementById('declineSale');
    const dockElement = document.getElementById('dock');
    const fuelPricesElement = document.getElementById('fuel-prices');
    const fuelAmountInput = document.getElementById('fuel-amount');
    const selectFuelButton = document.getElementById('selectFuel');
    const fuelTotalElement = document.getElementById('fuel-total');
    const acceptFuelButton = document.getElementById('acceptFuel');
    const declineFuelButton = document.getElementById('declineFuel');

    const locations = {
        'crab_harbour': {
            name: 'Crab Harbour',
            locationDes: true,
            fishMarket: true,
            portCity: true,
            fishingLocation: false,
            openWater: false
        },
        'open_ocean': {
            name: 'Open Ocean',
            locationDes: true,
            fishMarket: false,
            portCity: false,
            fishingLocation: true,
            openWater: true
        },
        'hanks_lagoon': {
            name: "Hank's Lagoon",
            locationDes: true,
            fishMarket: false,
            portCity: false,
            fishingLocation: true,
            openWater: true
        }
    };

    let currentDate = new Date('2024-05-01T00:00:00');
    const MS_PER_SECOND = 1000;
    const MS_PER_HALF_HOUR = MS_PER_SECOND;
    let fishingInterval;
    let accountBalance = 0;

    let boats = [
        {
            name: 'Silver Arowana',
            location: 'crab_harbour',
            operation: 'Docked',
            fuel: 40,
            cargo: 0,
            maxCargo: 500,
            maxFuel: 40,
            baseChance: 6,
            fish: {}
        },
        {
            name: 'The Minnow',
            location: 'crab_harbour',
            operation: 'Docked',
            fuel: 30,
            cargo: 0,
            maxCargo: 80,
            maxFuel: 30,
            baseChance: 5,
            fish: {}
        }
    ];

    function updateClockAndCalendar() {
        currentDate.setMinutes(currentDate.getMinutes() + 30);

        let hours = currentDate.getHours();
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');

        let period = 'AM';
        if (hours >= 12) {
            period = 'PM';
        }
        if (hours > 12) {
            hours -= 12;
        }
        if (hours === 0) {
            hours = 12;
        }

        const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${period}`;
        clockElement.textContent = `Time: ${timeString}`;

        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        const dateString = `${year}-${month}-${day}`;
        calendarElement.textContent = `Date: ${dateString}`;
    }

    function updateStatus(boatIndex) {
        const boat = boats[boatIndex];
        const boatContainer = document.getElementById(`boat-${boat.name.toLowerCase().replace(' ', '-')}`);
        const cargoHoldElement = boatContainer.querySelector('.cargo-hold');
        const fuelLevelElement = boatContainer.querySelector('.fuel-level');
        const statusElement = boatContainer.querySelector('.status');

        statusElement.textContent = `Status: ${boat.operation} at ${locations[boat.location].name}`;

        let cargoDescription = `Total Cargo: ${boat.cargo}/${boat.maxCargo} lbs`;
        if (boat.cargo === 0) {
            cargoDescription += "<br>(Empty)";
        } else {
            const fishTypes = Object.entries(boat.fish)
                .map(([type, weight]) => `${weight} lbs ${type}`)
                .join(', ');
            cargoDescription += `<br>(${fishTypes})`;
        }

        cargoHoldElement.innerHTML = `<p>${cargoDescription}</p>`;
        fuelLevelElement.textContent = boat.fuel;
    }

    function populateOperations(boatIndex, isTraveling = false) {
        const boat = boats[boatIndex];
        const location = locations[boat.location];
        const operationSelect = document.getElementById(`operation-${boat.name.toLowerCase().replace(' ', '-')}`);
        const operations = [];
        if (isTraveling) {
            operations.push('<option value="set_sail">Set Sail</option>');
        } else {
            if (location.locationDes) operations.push('<option value="none">Operations</option>');
            if (location.fishMarket) operations.push('<option value="fish_market">Fish Market</option>');
            if (location.portCity) operations.push('<option value="fuel_station">Fuel Station</option>');
            if (location.fishingLocation) operations.push('<option value="fish">Fish</option>');
            operations.push('<option value="set_sail">Set Sail</option>');
        }
        operationSelect.innerHTML = operations.join('');
    }

    function startJourney(boatIndex, destination) {
        const boat = boats[boatIndex];
        let travelTime;
        if ((boat.location === 'crab_harbour' && destination === 'open_ocean') ||
            (boat.location === 'open_ocean' && destination === 'crab_harbour')) {
            travelTime = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
        } else if ((boat.location === 'hanks_lagoon' && destination === 'open_ocean') ||
            (boat.location === 'open_ocean' && destination === 'hanks_lagoon')) {
            travelTime = Math.floor(Math.random() * (20 - 15 + 1)) + 15;
        } else {
            travelTime = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
        }

        let countdown = travelTime;
        const countdownElement = document.getElementById(`countdown-${boat.name.toLowerCase().replace(' ', '-')}`);
        const confirmOrdersButton = document.getElementById(`confirmOrders-${boat.name.toLowerCase().replace(' ', '-')}`);
        const statusElement = document.getElementById(`boat-${boat.name.toLowerCase().replace(' ', '-')}`).querySelector('.status');
        confirmOrdersButton.disabled = true;
        statusElement.textContent = `${boat.name} has set sail for ${locations[destination].name}.`;

        const interval = setInterval(() => {
            countdown--;
            const progress = Math.floor((countdown / travelTime) * 10);
            countdownElement.textContent = '|'.repeat(progress);

            // Deplete fuel at 1 gallon per 1.5 seconds
            if (countdown % 1.5 === 0) {
                boat.fuel -= 1;
                if (boat.fuel <= 0) {
                    boat.fuel = 0;
                    clearInterval(interval);
                    countdownElement.textContent = 'Out of fuel';
                    statusElement.textContent = `${boat.name} is out of fuel and cannot complete the journey.`;
                    confirmOrdersButton.disabled = false;
                    return;
                }
                updateStatus(boatIndex);
            }

            if (countdown <= 0) {
                clearInterval(interval);
                countdownElement.textContent = 'ARRIVED';
                boat.operation = 'Docked';
                boat.location = destination;
                updateStatus(boatIndex);
                populateOperations(boatIndex);
                confirmOrdersButton.disabled = false;
            }
        }, MS_PER_SECOND);
    }

    function fishCheck(boatIndex) {
        const boat = boats[boatIndex];
        const randomRoll = Math.floor(Math.random() * 10) + 1;

        if (randomRoll <= boat.baseChance) {
            const fishTypeChance = Math.random();
            let fishWeight;
            let fishType;
            if (boat.location === 'hanks_lagoon') {
                if (fishTypeChance < 0.8) { // 80% chance for Trout
                    fishWeight = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
                    fishType = 'Trout';
                } else { // 20% chance for Bass
                    fishWeight = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
                    fishType = 'Bass';
                }
            } else if (boat.location === 'open_ocean') {
                if (fishTypeChance < 0.3) { // 30% chance for Trout
                    fishWeight = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
                    fishType = 'Trout';
                } else if (fishTypeChance < 0.7) { // 40% chance for Bass
                    fishWeight = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
                    fishType = 'Bass';
                } else { // 30% chance for Sturgeon
                    fishWeight = Math.floor(Math.random() * (400 - 300 + 1)) + 300;
                    fishType = 'Sturgeon';
                }
            }

            boat.cargo += fishWeight;
            if (boat.cargo > boat.maxCargo) {
                const excess = boat.cargo - boat.maxCargo;
                boat.cargo = boat.maxCargo; // Cap at cargo hold limit
                fishWeight -= excess;
            }

            if (!boat.fish[fishType]) {
                boat.fish[fishType] = 0;
            }
            boat.fish[fishType] += fishWeight;

            updateStatus(boatIndex);
        } else {
            updateStatus(boatIndex);
        }
    }

    function startFishing(boatIndex) {
        let countdown = 10;
        const boatContainer = document.getElementById(`boat-${boats[boatIndex].name.toLowerCase().replace(' ', '-')}`);
        const countdownElement = boatContainer.querySelector('.countdown');
        const confirmOrdersButton = boatContainer.querySelector('.confirmOrders');
        const hoistNetsButton = boatContainer.querySelector('.hoistNets');

        countdownElement.textContent = '|'.repeat(10);

        fishingInterval = setInterval(() => {
            countdown--;
            const progress = Math.floor((countdown / 10) * 10);
            countdownElement.textContent = '|'.repeat(progress);

            if (countdown <= 0) {
                fishCheck(boatIndex);
                countdown = 10; // Reset countdown
                countdownElement.textContent = '|'.repeat(10);
                updateStatus(boatIndex);
            }
        }, MS_PER_SECOND);
        confirmOrdersButton.style.display = 'none';
        hoistNetsButton.style.display = 'inline';
    }

    function stopFishing(boatIndex) {
        clearInterval(fishingInterval);
        const boatContainer = document.getElementById(`boat-${boats[boatIndex].name.toLowerCase().replace(' ', '-')}`);
        const countdownElement = boatContainer.querySelector('.countdown');
        const confirmOrdersButton = boatContainer.querySelector('.confirmOrders');
        const hoistNetsButton = boatContainer.querySelector('.hoistNets');

        countdownElement.textContent = '';
        confirmOrdersButton.style.display = 'inline';
        hoistNetsButton.style.display = 'none';
        boats[boatIndex].operation = 'Docked';  // Update the status to Docked after fishing stops
        updateStatus(boatIndex);
    }

    function priceCheck(boatIndex) {
        const prices = {
            Trout: (Math.random() * (2 - 1.5) + 1.5).toFixed(2),
            Bass: (Math.random() * (4 - 3) + 3).toFixed(2),
            Sturgeon: (Math.random() * (6 - 5) + 5).toFixed(2),
            Fuel: (Math.random() * (4 - 3.5) + 3.5).toFixed(2)
        };

        fishPricesElement.innerHTML = Object.entries(boats[boatIndex].fish).map(([type, weight]) => {
            const pricePerLb = prices[type];
            const totalValue = (weight * pricePerLb).toFixed(2);
            return `
                <div>
                    <input type="checkbox" id="sell-${type}" data-type="${type}" data-price="${pricePerLb}" data-weight="${weight}">
                    <label for="sell-${type}">${weight} lbs of ${type} @ $${pricePerLb}/lb = $${totalValue}</label>
                </div>
            `;
        }).join('');

        dockElement.querySelector('#fuel-total').textContent = `Total: $0.00`;
        fuelAmountInput.value = '';
        dockElement.querySelector('#selectFuel').dataset.price = prices.Fuel;
    }

    function handleSale(boatIndex) {
        const boat = boats[boatIndex];
        const checkboxes = document.querySelectorAll('#fish-prices input[type="checkbox"]:checked');
        let totalSale = 0;

        checkboxes.forEach(checkbox => {
            const type = checkbox.dataset.type;
            const price = parseFloat(checkbox.dataset.price);
            const weight = parseFloat(checkbox.dataset.weight);
            const value = weight * price;

            totalSale += value;

            boat.cargo -= weight;
            delete boat.fish[type];
        });

        accountBalance += totalSale;
        accountBalanceElement.textContent = accountBalance.toFixed(2);

        updateStatus(boatIndex);
        fishMarketElement.style.display = 'none';
    }

    function handleFuelSelection() {
        const pricePerGallon = parseFloat(dockElement.querySelector('#selectFuel').dataset.price);
        const fuelAmount = parseInt(fuelAmountInput.value);
        const totalCost = (pricePerGallon * fuelAmount).toFixed(2);
        dockElement.querySelector('#fuel-total').textContent = `Total: $${totalCost}`;
    }

    function handleFuelPurchase(boatIndex) {
        const boat = boats[boatIndex];
        const pricePerGallon = parseFloat(dockElement.querySelector('#selectFuel').dataset.price);
        const fuelAmount = parseInt(fuelAmountInput.value);
        const totalCost = parseFloat(pricePerGallon * fuelAmount).toFixed(2);

        if (accountBalance < totalCost) {
            alert("You cannot afford this transaction.");
            return;
        }

        if (boat.fuel + fuelAmount > boat.maxFuel) {
            alert("You cannot purchase more fuel than the boat can handle.");
            return;
        }

        accountBalance -= totalCost;
        boat.fuel += fuelAmount;

        accountBalanceElement.textContent = accountBalance.toFixed(2);
        updateStatus(boatIndex);
        dockElement.style.display = 'none';
    }

    document.querySelectorAll('.confirmOrders').forEach((button, index) => {
        button.addEventListener('click', () => {
            const boat = boats[index];
            const operationSelect = document.getElementById(`operation-${boat.name.toLowerCase().replace(' ', '-')}`);
            const navigationSelect = document.getElementById(`navigation-${boat.name.toLowerCase().replace(' ', '-')}`);
            const selectedOperation = operationSelect.value;
            const selectedNavigation = navigationSelect.value;

            if (selectedOperation === 'set_sail' && selectedNavigation !== boat.location) {
                boat.operation = 'Set Sail';
                updateStatus(index);
                stopFishing(index); // Ensure fishing stops when en route
                startJourney(index, selectedNavigation);
            } else if (selectedNavigation !== boat.location) {
                const statusElement = document.getElementById(`boat-${boat.name.toLowerCase().replace(' ', '-')}`).querySelector('.status');
                statusElement.textContent = `${boat.name} must travel to ${locations[selectedNavigation].name} first.`;
            } else if (selectedOperation === 'fish' && locations[selectedNavigation].fishingLocation) {
                boat.operation = 'Fishing';
                updateStatus(index);
                startFishing(index);
            } else if (selectedOperation === 'fuel_station' && locations[selectedNavigation].portCity) {
                boat.operation = 'Fuel Station';
                updateStatus(index);
                priceCheck(index);
                dockElement.style.display = 'block';
                fishMarketElement.style.display = 'none';
                stopFishing(index);
            } else if (selectedOperation === 'fish_market' && locations[selectedNavigation].fishMarket) {
                boat.operation = 'Fish Market';
                updateStatus(index);
                priceCheck(index);
                fishMarketElement.style.display = 'block';
                dockElement.style.display = 'none';
                stopFishing(index);
            }
        });
    });

    document.querySelectorAll('.hoistNets').forEach((button, index) => {
        button.addEventListener('click', () => stopFishing(index));
    });

    document.querySelectorAll('.navigation').forEach((select, index) => {
        select.addEventListener('change', () => {
            const boat = boats[index];
            const selectedNavigation = select.value;
            if (selectedNavigation !== boat.location) {
                populateOperations(index, true); // Only show "Set Sail"
            } else {
                populateOperations(index); // Show full operations menu
            }
        });
    });

    selectFuelButton.addEventListener('click', handleFuelSelection);
    acceptFuelButton.addEventListener('click', () => handleFuelPurchase(selectedBoatIndex));
    declineFuelButton.addEventListener('click', () => {
        dockElement.style.display = 'none';
    });

    acceptSaleButton.addEventListener('click', () => handleSale(selectedBoatIndex));
    declineSaleButton.addEventListener('click', () => {
        fishMarketElement.style.display = 'none';
    });

    updateClockAndCalendar();
    boats.forEach((_, index) => {
        updateStatus(index);
        populateOperations(index);
    });
    setInterval(updateClockAndCalendar, MS_PER_HALF_HOUR);
});
