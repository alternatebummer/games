let wrestlers;
let attackerIndex;
let defenderIndex;
let interval;

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

    interval = setInterval(attack, 3000);
}

function resetGame() {
    clearInterval(interval);
    initializeMatch();
}

function getAttackDescription(damage, attacker, defender) {
    if (damage <= 7) return `${attacker} lands a weak punch on ${defender}!`;
    if (damage <= 10) return `A quick 1-2 punch to the body of ${defender}!`;
    if (damage <= 13) return `Oh no, ${defender} is thrown to the ropes and eats a clothesline from ${attacker}!`;
    if (damage <= 17) return `${attacker} climbs the turnbuckle and obliterates ${defender}'s composure!`;
    if (damage <= 20) return `Oh god!! ${attacker} with a piledriver, like it was nothing!`;
    return `Watch out, ${defender}!!! ${attacker} has a chair!!`;
}

function attack() {
    const log = document.getElementById("battle-log");
    const damage = Math.floor(Math.random() * 20) + 5;
    wrestlers[defenderIndex].health -= damage;

    if (wrestlers[defenderIndex].health <= 0) {
        wrestlers[defenderIndex].health = 0;
        document.getElementById(wrestlers[defenderIndex].healthBar).classList.add("health-depleted");
        log.innerHTML += `<p>${wrestlers[defenderIndex].name} is dazed and can't attack!</p>`;
        clearInterval(interval);
        setTimeout(() => attemptPin(attackerIndex, defenderIndex), 1000);
        return;
    }

    document.getElementById(wrestlers[defenderIndex].healthBar).style.width = wrestlers[defenderIndex].health + "%";
    log.innerHTML += `<p>${getAttackDescription(damage, wrestlers[attackerIndex].name, wrestlers[defenderIndex].name)}</p>`;
    [attackerIndex, defenderIndex] = [defenderIndex, attackerIndex];
}

function attemptPin(attacker, defender) {
    const log = document.getElementById("battle-log");
    log.innerHTML += `<p>${wrestlers[attacker].name} moves in for the pin!</p>`;
    let pinCount = 1;
    let pinInterval = setInterval(() => {
        if (pinCount <= 3) {
            log.innerHTML += `<p>${pinCount}...!</p>`;
            pinCount++;
        } else {
            clearInterval(pinInterval);
            log.innerHTML += `<p>3!!! ${wrestlers[attacker].name} wins!!</p>`;
            cashOutBets(wrestlers[attacker].name);
            const startButton = document.getElementById("start-btn");
            startButton.textContent = "Reset Game";
            startButton.onclick = resetGame;
        }
    }, 1000);
}
