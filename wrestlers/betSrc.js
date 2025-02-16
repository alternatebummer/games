function calculateWinProbability() {
    let health1 = parseFloat(document.getElementById("health1").style.width) || 0;
    let health2 = parseFloat(document.getElementById("health2").style.width) || 0;

    let totalHealth = health1 + health2;
    if (totalHealth === 0) return 0.5;  // Default 50/50 split if healths are zero

    return health1 / totalHealth; // Probability of Wrestler 1 winning
}

function calculateBetCost(type) {
    let winProb = calculateWinProbability();

    if (type === "win") return Math.max(0.05, winProb); // Win bet cost is proportional to winning chance
    if (type === "lose") return Math.max(0.05, 1 - winProb); // Lose bet cost is proportional to losing chance
}

function cashOutBets(winner) {
    let payout = 0;

    if (winner === "Wrestler 1" && heldBets.win > 0) {
        payout += heldBets.win;
    }
    if (winner === "Wrestler 2" && heldBets.lose > 0) {
        payout += heldBets.lose;
    }

    playerBalance += payout;
    heldBets = { win: 0, lose: 0 }; // Reset bets
    updateBalance();
    document.getElementById("bet-log").innerHTML += `<p>Cashed out: $${payout.toFixed(2)}</p>`;
}

// Listen for match end (modify `matchSrc.js` to call this function)
function onMatchEnd(winner) {
    cashOutBets(winner);
}
