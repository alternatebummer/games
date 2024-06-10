class Stock {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.quantity = 0;
        this.priceHistory = [price];
    }

    fluctuate() {
        const change = Math.random() * 10 - 5;
        this.price = Math.max(1, this.price + change);
        this.priceHistory.push(this.price);
    }
}

class Player {
    constructor() {
        this.balance = 100;
        this.portfolioValueHistory = [100];
    }

    buy(stock, amount) {
        const totalCost = stock.price * amount;
        if (this.balance >= totalCost && amount > 0) {
            this.balance -= totalCost;
            stock.quantity += amount;
            return true;
        }
        return false;
    }

    sell(stock, amount) {
        if (stock.quantity >= amount && amount > 0) {
            const totalGain = stock.price * amount;
            this.balance += totalGain;
            stock.quantity -= amount;
            return true;
        }
        return false;
    }

    maxBuy(stock) {
        return Math.floor(this.balance / stock.price);
    }

    maxSell(stock) {
        return stock.quantity;
    }

    updatePortfolioValue() {
        const portfolioValue = stocks.reduce((total, stock) => total + stock.price * stock.quantity, this.balance);
        this.portfolioValueHistory.push(portfolioValue);
    }
}

const stocks = [
    new Stock("Stock A", 10),
    new Stock("Stock B", 15),
    new Stock("Stock C", 20),
    new Stock("Stock D", 25),
    new Stock("Stock E", 30),
];

const player = new Player();
let chart = null;
let portfolioChart = null;
const selectedStocks = Array(stocks.length).fill(true); // Set all checkboxes to be checked initially

function updateUI() {
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = player.balance.toFixed(2);

    const stockTable = document.getElementById('stock-table');
    stockTable.innerHTML = '';

    stocks.forEach((stock, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><input type="checkbox" id="select-${index}" ${selectedStocks[index] ? 'checked' : ''} onchange="toggleStock(${index})"></td>
            <td>${stock.name}</td>
            <td>$${stock.price.toFixed(2)}</td>
            <td>${stock.quantity}</td>
            <td>
                <input type="number" id="buy-${index}" min="1" placeholder="Qty" style="width:40px; background-color: #878686; font-weight: bold; font-size: 15px;">
                <button style="background-color: #878686;" onclick="buyStock(${index})">Buy</button>
                <button style="background-color: #878686;" onclick="maxBuyStock(${index})">Max</button>
            </td>
            <td>
                <input type="number" id="sell-${index}" style="width:40px; background-color: #878686; font-weight: bold; font-size: 15px;" min="1" placeholder="Qty">
                <button style="background-color: #878686;" onclick="sellStock(${index})">Sell</button>
                <button style="background-color: #878686;" onclick="maxSellStock(${index})">Max</button>
            </td>
        `;

        stockTable.appendChild(row);
    });

    updateCharts();
}

function nextTurn() {
    stocks.forEach(stock => stock.fluctuate());
    player.updatePortfolioValue();
    updateUI();
}

function buyStock(index) {
    const amount = parseInt(document.getElementById(`buy-${index}`).value);
    if (!isNaN(amount)) {
        player.buy(stocks[index], amount);
        updateUI();
    }
}

function sellStock(index) {
    const amount = parseInt(document.getElementById(`sell-${index}`).value);
    if (!isNaN(amount)) {
        player.sell(stocks[index], amount);
        updateUI();
    }
}

function maxBuyStock(index) {
    const maxAmount = player.maxBuy(stocks[index]);
    document.getElementById(`buy-${index}`).value = maxAmount;
}

function maxSellStock(index) {
    const maxAmount = player.maxSell(stocks[index]);
    document.getElementById(`sell-${index}`).value = maxAmount;
}

function toggleStock(index) {
    selectedStocks[index] = !selectedStocks[index];
    updateCharts();
}

function updateCharts() {
    const stockCtx = document.getElementById('stock-chart').getContext('2d');
    const portfolioCtx = document.getElementById('portfolio-chart').getContext('2d');

    if (chart) {
        chart.destroy();
    }
    if (portfolioChart) {
        portfolioChart.destroy();
    }

    const stockDatasets = stocks.filter((_, index) => selectedStocks[index]).map(stock => ({
        label: stock.name,
        data: stock.priceHistory,
        borderColor: getRandomColor(),
        fill: false
    }));

    chart = new Chart(stockCtx, {
        type: 'line',
        data: {
            labels: Array.from({ length: stocks[0].priceHistory.length }, (_, i) => i + 1),
            datasets: stockDatasets
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Turn'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Price'
                    }
                }
            }
        }
    });

    portfolioChart = new Chart(portfolioCtx, {
        type: 'line',
        data: {
            labels: Array.from({ length: player.portfolioValueHistory.length }, (_, i) => i + 1),
            datasets: [{
                label: 'Portfolio Value',
                data: player.portfolioValueHistory,
                borderColor: getRandomColor(),
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Turn'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startTimer(duration, display) {
    let timer = duration, seconds;
    const interval = setInterval(() => {
        seconds = parseInt(timer % 60, 10);
        const dots = '··········'.substring(0, Math.ceil(seconds / 2));
        display.textContent = `${seconds} seconds ${dots}`;
        if (--timer < 0) {
            nextTurn();
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    const timerDisplay = document.getElementById('timer');
    startTimer(20, timerDisplay);
    updateUI();
};
