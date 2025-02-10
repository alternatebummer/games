<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wrestling Auto-Battler</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #222;
            color: white;
        }
        #game-container {
            width: 80%;
            margin: auto;
        }
        #logs-container {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        #battle-log, #betting-log {
            width: 48%;
            height: 150px;
            overflow-y: auto;
            background: #333;
            padding: 10px;
            border-radius: 10px;
        }
        .wrestler {
            display: inline-block;
            width: 40%;
            margin: 20px;
            padding: 20px;
            background: #444;
            border-radius: 10px;
        }
        .health-bar {
            width: 100%;
            height: 20px;
            background: red;
            margin-top: 10px;
            border-radius: 5px;
            position: relative;
        }
        .health {
            height: 100%;
            width: 100%;
            background: lime;
            border-radius: 5px;
        }
        .health-depleted {
            background: gray !important;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            background: orange;
            border: none;
            border-radius: 5px;
        }
        button:disabled {
            background: grey;
            cursor: not-allowed;
        }
    </style>
</head>
<body>
    <div id="game-container">
        <h1>Wrestling Auto-Battler</h1>
        <button id="start-btn">Start Match</button>
        <div id="logs-container">
            <div id="battle-log"></div>
            <div id="betting-log">
                <h2>Betting Log</h2>
                <p>Balance: $<span id="player-balance">10.00</span></p>
                <button id="buy-win">Buy Win</button>
                <button id="buy-lose">Buy Lose</button>
                <button id="sell-win">Sell Win</button>
                <button id="sell-lose">Sell Lose</button>
                <div id="bet-log"></div>
            </div>
        </div>
        <div id="wrestlers">
            <div class="wrestler" id="wrestler1">
                <h2>Wrestler 1</h2>
                <div class="health-bar"><div class="health" id="health1"></div></div>
            </div>
            <div class="wrestler" id="wrestler2">
                <h2>Wrestler 2</h2>
                <div class="health-bar"><div class="health" id="health2"></div></div>
            </div>
        </div>
    </div>
    <script>
        let wrestlers;
        let attackerIndex;
        let defenderIndex;
        let interval;
        let playerBalance = 10.00;
        let heldBets = { win: 0, lose: 0 };

        function initializeMatch() {
            wrestlers = [
                { name: "Wrestler 1", health: 100, healthBar: "health1" },
                { name: "Wrestler 2", health: 100, healthBar: "health2" }
            ];
            attackerIndex = Math.floor(Math.random() * 2);
            defenderIndex = attackerIndex === 0 ? 1 : 0;
            document.getElementById("battle-log").innerHTML = "";
            document.getElementById("health1").style.width = "100%";
            document.getElementById("health2").style.width = "100%";
            document.getElementById("health1").classList.remove("health-depleted");
            document.getElementById("health2").classList.remove("health-depleted");
            const startButton = document.getElementById("start-btn");
            startButton.textContent = "Reset Game";
            startButton.onclick = resetGame;
            interval = setInterval(() => {
                attack();
                updateBetPrices();
            }, 1000);
        }

        function updateBetPrices() {
            let winProb = calculateWinProbability();
            let buyWinPrice = Math.min(1, winProb);
            let buyLosePrice = Math.min(1, 1 - winProb);
            document.getElementById("bet-log").innerHTML += `<p>Updated Prices - Buy Win: $${buyWinPrice.toFixed(2)}, Buy Lose: $${buyLosePrice.toFixed(2)}</p>`;
        }

        function buyBet(type) {
            let cost = calculateBetCost(type);
            if (playerBalance >= cost) {
                playerBalance -= cost;
                heldBets[type] += 1;
                document.getElementById("player-balance").innerText = playerBalance.toFixed(2);
                document.getElementById("bet-log").innerHTML += `<p>Bought ${type.toUpperCase()} for $${cost.toFixed(2)}</p>`;
            }
        }

        function sellBet(type) {
            if (heldBets[type] > 0) {
                let sellPrice = calculateBetCost(type);
                playerBalance += sellPrice;
                heldBets[type] -= 1;
                document.getElementById("player-balance").innerText = playerBalance.toFixed(2);
                document.getElementById("bet-log").innerHTML += `<p>Sold ${type.toUpperCase()} for $${sellPrice.toFixed(2)}</p>`;
            }
        }

        document.getElementById("buy-win").addEventListener("click", () => buyBet("win"));
        document.getElementById("buy-lose").addEventListener("click", () => buyBet("lose"));
        document.getElementById("sell-win").addEventListener("click", () => sellBet("win"));
        document.getElementById("sell-lose").addEventListener("click", () => sellBet("lose"));
        document.getElementById("start-btn").addEventListener("click", initializeMatch);
    </script>
</body>
</html>
