document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    const calendarElement = document.getElementById('calendar');
    const operationSelect = document.getElementById('operation');
    const navigationSelect = document.getElementById('navigation');
    const confirmOrdersButton = document.getElementById('confirmOrders');
    const statusElement = document.getElementById('status');
    const countdownElement = document.getElementById('countdown');
    const cargoHoldElement = document.getElementById('cargo-hold');
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
    const accountBalanceElement = document.getElementById('account-balance');
    const fuelLevelElement = document.getElementById('fuel-level');

    const locations = {
        'crab_harbour': {
            name: 'Crab Harbour',
            fishMarket: true,
            portCity: true,
            fishingLocation: false,
            openWater: false
        },
        'hanks_lagoon': {
            name: "Hank's Lagoon",
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

    let boatStatus = {
        location: 'crab_harbour',
        operation: 'Docked',
        fuel: 40,
        cargo: 0,
        fish: {}
    };

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

    function updateStatus() {
        statusElement.textContent = `Status: ${boatStatus.operation} at ${locations[boatStatus.location].name}`;

        let cargoDescription = `Total Cargo: ${boatStatus.cargo}/200 lbs`;
        if (boatStatus.cargo === 0) {
            cargoDescription += " (Empty)";
        } else {
            const fishTypes = Object.entries(boatStatus.fish)
                .map(([type, weight]) => `${weight} lbs ${type}`)
                .join(', ');
            cargoDescription += ` (${fishTypes})`;
        }

        cargoHoldElement.innerHTML = `<p>${cargoDescription}</p>`;
        fuelLevelElement.textContent = boatStatus.fuel;
    }

    function populateOperations(location) {
        const operations = [];
        if (location.fishMarket) operations.push('<option value="fish_market">Fish Market</option>');
        if (location.portCity) operations.push('<option value="fuel_station">Fuel Station</option>');
        if (location.fishingLocation) operations.push('<option value="fish">Fish</option>');
        if (location.openWater) operations.push('<option value="anchor">Anchor</option>');
        operations.push('<option value="set_sail">Set Sail</option>');

        operationSelect.innerHTML = operations.join('');
    }

    function startJourney(destination) {
        const travelTime = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
        let countdown = travelTime;
        countdownElement.textContent = '|'.repeat(10);
        confirmOrdersButton.disabled = true;

        const interval = setInterval(() => {
            countdown--;
            const progress = Math.floor((countdown / travelTime) * 10);
            countdownElement.textContent = '|'.repeat(progress);

            // Deplete fuel at 1 gallon per 1.5 seconds
            if (countdown % 1.5 === 0) {
                boatStatus.fuel -= 1;
                if (boatStatus.fuel <= 0) {
                    boatStatus.fuel = 0;
                    clearInterval(interval);
                    countdownElement.textContent = 'Out of fuel';
                    statusElement.textContent = 'The Minnow is out of fuel and cannot complete the journey.';
                    confirmOrdersButton.disabled = false;
                    return;
                }
                fuelLevelElement.textContent = boatStatus.fuel;
            }

            if (countdown <= 0) {
                clearInterval(interval);
                countdownElement.textContent = 'ARRIVED';
                boatStatus.operation = 'Docked';
                boatStatus.location = destination;
                updateStatus();
                populateOperations(locations[destination]);
                confirmOrdersButton.disabled = false;
            }
        }, MS_PER_SECOND);
    }


    function fishCheck() {
        const baseChance = 6; // 60% chance
        const randomRoll = Math.floor(Math.random() * 10) + 1;

        if (randomRoll <= baseChance) {
            const fishTypeChance = Math.random();
            let fishWeight;
            let fishType;
            if (fishTypeChance < 0.6) { // 60% chance for Trout
                fishWeight = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
                fishType = 'Trout';
            } else { // 40% chance for Bass
                fishWeight = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
                fishType = 'Bass';
            }

            boatStatus.cargo += fishWeight;
            if (boatStatus.cargo > 200) {
                const excess = boatStatus.cargo - 200;
                boatStatus.cargo = 200; // Cap at cargo hold limit
                fishWeight -= excess;
            }

            if (!boatStatus.fish[fishType]) {
                boatStatus.fish[fishType] = 0;
            }
            boatStatus.fish[fishType] += fishWeight;

            statusElement.textContent = `Caught ${fishWeight} lbs of ${fishType}. Total cargo: ${boatStatus.cargo}/200 lbs`;
        } else {
            statusElement.textContent = `No catch this time. Total cargo: ${boatStatus.cargo}/200 lbs`;
        }
    }

    function startFishing() {
        let countdown = 10;
        countdownElement.textContent = '|'.repeat(10);

        fishingInterval = setInterval(() => {
            countdown--;
            const progress = Math.floor((countdown / 10) * 10);
            countdownElement.textContent = '|'.repeat(progress);

            if (countdown <= 0) {
                fishCheck();
                countdown = 10; // Reset countdown
                countdownElement.textContent = '|'.repeat(10);
                updateStatus();
            }
        }, MS_PER_SECOND);
    }

    function stopFishing() {
        clearInterval(fishingInterval);
        countdownElement.textContent = '';
    }

    function priceCheck() {
        const prices = {
            Trout: (Math.random() * (2 - 1.5) + 1.5).toFixed(2),
            Bass: (Math.random() * (3.5 - 3) + 3).toFixed(2),
            Fuel: (Math.random() * (4 - 3.5) + 3.5).toFixed(2)
        };

        fishPricesElement.innerHTML = Object.entries(boatStatus.fish).map(([type, weight]) => {
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

    function handleSale() {
        const checkboxes = document.querySelectorAll('#fish-prices input[type="checkbox"]:checked');
        let totalSale = 0;

        checkboxes.forEach(checkbox => {
            const type = checkbox.dataset.type;
            const price = parseFloat(checkbox.dataset.price);
            const weight = parseFloat(checkbox.dataset.weight);
            const value = weight * price;

            totalSale += value;

            boatStatus.cargo -= weight;
            delete boatStatus.fish[type];
        });

        accountBalance += totalSale;
        accountBalanceElement.textContent = accountBalance.toFixed(2);

        updateStatus();
        fishMarketElement.style.display = 'none';
    }

    function handleFuelSelection() {
        const pricePerGallon = parseFloat(dockElement.querySelector('#selectFuel').dataset.price);
        const fuelAmount = parseInt(fuelAmountInput.value);
        const totalCost = (pricePerGallon * fuelAmount).toFixed(2);
        dockElement.querySelector('#fuel-total').textContent = `Total: $${totalCost}`;
    }

    function handleFuelPurchase() {
        const pricePerGallon = parseFloat(dockElement.querySelector('#selectFuel').dataset.price);
        const fuelAmount = parseInt(fuelAmountInput.value);
        const totalCost = parseFloat(pricePerGallon * fuelAmount).toFixed(2);

        if (accountBalance < totalCost) {
            alert("You cannot afford this transaction.");
            return;
        }

        if (boatStatus.fuel + fuelAmount > 40) {
            alert("You cannot purchase more fuel than the boat can handle.");
            return;
        }

        accountBalance -= totalCost;
        boatStatus.fuel += fuelAmount;

        accountBalanceElement.textContent = accountBalance.toFixed(2);
        updateStatus();
        dockElement.style.display = 'none';
    }

    confirmOrdersButton.addEventListener('click', () => {
        const selectedOperation = operationSelect.value;
        const selectedNavigation = navigationSelect.value;

        if (selectedOperation === 'set_sail' && selectedNavigation !== boatStatus.location) {
            boatStatus.operation = 'Set Sail';
            updateStatus();
            stopFishing(); // Ensure fishing stops when en route
            startJourney(selectedNavigation);
        } else if (selectedNavigation !== boatStatus.location) {
            statusElement.textContent = `The Minnow must travel to ${locations[selectedNavigation].name} first.`;
        } else if (selectedOperation === 'fish' && locations[selectedNavigation].fishingLocation) {
            boatStatus.operation = 'Fishing';
            updateStatus();
            startFishing();
        } else if (selectedOperation === 'anchor' && locations[selectedNavigation].openWater) {
            boatStatus.operation = 'Anchored';
            updateStatus();
            stopFishing();
        } else if (selectedOperation === 'fuel_station' && locations[selectedNavigation].portCity) {
            boatStatus.operation = 'Fuel Station';
            updateStatus();
            priceCheck();
            dockElement.style.display = 'block';
            fishMarketElement.style.display = 'none';
            stopFishing();
        } else if (selectedOperation === 'fish_market' && locations[selectedNavigation].fishMarket) {
            boatStatus.operation = 'Fish Market';
            updateStatus();
            priceCheck();
            fishMarketElement.style.display = 'block';
            dockElement.style.display = 'none';
            stopFishing();
        }
    });

    navigationSelect.addEventListener('change', () => {
        const selectedNavigation = navigationSelect.value;
        populateOperations(locations[selectedNavigation]);
    });

    selectFuelButton.addEventListener('click', handleFuelSelection);
    acceptFuelButton.addEventListener('click', handleFuelPurchase);
    declineFuelButton.addEventListener('click', () => {
        dockElement.style.display = 'none';
    });

    acceptSaleButton.addEventListener('click', handleSale);
    declineSaleButton.addEventListener('click', () => {
        fishMarketElement.style.display = 'none';
    });

    updateClockAndCalendar();
    updateStatus();
    populateOperations(locations[boatStatus.location]);
    setInterval(updateClockAndCalendar, MS_PER_HALF_HOUR);
});
