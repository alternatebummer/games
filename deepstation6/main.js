let population = 9;
let maxPopulation = 30;
let currentDate = new Date(2140, 0, 6, 7, 0);
const oneDayInSeconds = 60;
const colonistList = [];
let newColonistTime;
let colonyFunds = 100.00;

function updateStats() {
    document.getElementById('population').innerText = `${population}/${maxPopulation}`;
    document.getElementById('time').innerText = currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    document.getElementById('date').innerText = currentDate.toLocaleDateString('en-GB');
    document.getElementById('payroll').innerText = calculatePayroll().toFixed(2);
    document.getElementById('production').innerText = calculateDailyProduction();
    document.getElementById('colony-funds').innerText = colonyFunds.toFixed(2);
}

function calculatePayroll() {
    return colonistList.reduce((sum, colonist) => sum + colonist.wage, 0);
}

function calculateDailyProduction() {
    return colonistList.reduce((sum, colonist) => sum + (colonist.health >= 2 ? 1 : 0), 0);
}

function advanceTime() {
    const previousDay = currentDate.getDate();
    currentDate.setSeconds(currentDate.getSeconds() + (86400 / oneDayInSeconds));
    updateStats();

    if (currentDate >= newColonistTime) {
        addColonist();
        setNewColonistTime(); // Set the next time for new colonist arrival
    }

    const currentDay = currentDate.getDate();
    // Check if the day has changed
    if (currentDay !== previousDay) {
        // Perform daily operations at the start of a new day
        const dailyProduction = calculateDailyProduction();
        colonyFunds += dailyProduction;
        totalProduction += dailyProduction; // If you need to track the total production

        const statusUpdateElement = document.createElement('li');
        statusUpdateElement.textContent = `[${currentDate.toLocaleDateString('en-GB')}, ${currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}] Daily production added: ${dailyProduction} points.`;
        document.getElementById('status-updates').appendChild(statusUpdateElement);
    }

    // Payroll deduction on the 15th and last day of the month
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    if (currentDay === 15 || currentDay === daysInMonth) {
        const payroll = calculatePayroll();
        colonyFunds -= payroll;
        if (colonyFunds < 0) colonyFunds = 0; // Prevent negative funds

        const payrollUpdateElement = document.createElement('li');
        payrollUpdateElement.textContent = `[${currentDate.toLocaleDateString('en-GB')}, ${currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}] Payroll deducted: $${payroll.toFixed(2)}.`;
        document.getElementById('status-updates').appendChild(payrollUpdateElement);
    }
}

function setNewColonistTime() {
    newColonistTime = new Date(currentDate.getTime());
    newColonistTime.setHours(Math.floor(Math.random() * 24));
    newColonistTime.setMinutes(Math.floor(Math.random() * 60));
    newColonistTime.setSeconds(0);
    // Ensure the new colonist time is in the future
    if (newColonistTime <= currentDate) {
        newColonistTime.setDate(newColonistTime.getDate() + 1);
    }
}

function initializeGame() {
    // Initialize colonists
    for (let i = 0; i < population; i++) {
        const randomIndex = Math.floor(Math.random() * colonists.length);
        const colonist = createColonist(colonists.splice(randomIndex, 1)[0]);
        colonistList.push(colonist);
        const colonistElement = createColonistElement(colonist);
        document.getElementById('colonists').appendChild(colonistElement);
    }

    // Set the initial time for the new colonist arrival
    setNewColonistTime();
    updateStats();
}

setInterval(advanceTime, 1000); // Fast forward the time, so that 60 seconds represent one day

initializeGame();
