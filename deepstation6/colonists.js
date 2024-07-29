const colonists = [
    "Xara Nyx", "Kira Zephyr", "Jax Orion", "Lyra Astra", "Orion Rax", "Nyx Vega",
    "Zephyr Elara", "Nova Juno", "Rax Nyssa", "Astra Talos", "Dex Solara", "Zeta Zarek",
    "Cypher Aria", "Vega Kael", "Maxen Hesper", "Elara Soren", "Juno Evren", "Nyssa Andromeda",
    "Talos Galen", "Solara Quin", "Zarek Lyra", "Aria Xara", "Kael Kira", "Hesper Jax",
    "Soren Orion", "Evren Nyx", "Andromeda Zephyr", "Galen Nova", "Quin Dex", "Lyra Zeta",
    "Thane Orion", "Lyric Zarek", "Serin Juno", "Vesper Elara", "Kael Astra", "Cyra Soren",
    "Xenos Nyssa", "Liora Talos", "Zarek Hesper", "Elara Galen"
];

function createColonist(name) {
    const age = Math.floor(Math.random() * 63) + 18; // Age between 18 and 80
    const birthYear = currentDate.getFullYear() - age;
    const birthday = new Date(birthYear, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1); // Random birthday within the year

    // Generate attributes
    const health = Math.floor(Math.random() * 5) + 1;
    const intelligence = Math.floor(Math.random() * 5) + 1;
    const mood = Math.floor(Math.random() * 5) + 1;
    const creativity = Math.floor(Math.random() * 5) + 1;
    const wage = Math.ceil((health + intelligence + mood + creativity) / 4);

    return { name, age, birthday, health, intelligence, mood, creativity, wage };
}

function createColonistElement(colonist) {
    const colonistElement = document.createElement('li');
    colonistElement.className = 'colonist';
    colonistElement.textContent = colonist.name;
    const banishButton = document.createElement('span');
    banishButton.textContent = ' [Banish]';
    banishButton.style.cursor = 'pointer';
    banishButton.style.color = 'red';
    banishButton.onclick = () => evictColonist(colonist, colonistElement);
    colonistElement.appendChild(banishButton);
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = `Age: ${colonist.age}\nBirthday: ${colonist.birthday.toLocaleDateString('en-GB')}\nWage: $${colonist.wage}.00`;
    colonistElement.appendChild(tooltip);
    return colonistElement;
}

function evictColonist(colonist, element) {
    const index = colonistList.indexOf(colonist);
    if (index > -1) {
        colonistList.splice(index, 1);
        population--;
        element.parentNode.removeChild(element);
        const statusUpdateElement = document.createElement('li');
        statusUpdateElement.textContent = `[${currentDate.toLocaleDateString('en-GB')}, ${currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}] Colonist ${colonist.name} has been banished.`;
        document.getElementById('status-updates').appendChild(statusUpdateElement);
        updateStats();
    }
}

function ageColonists() {
    colonistList.forEach((colonist, index) => {
        if (colonist.birthday.getMonth() === currentDate.getMonth() && colonist.birthday.getDate() === currentDate.getDate()) {
            colonist.age++;
            const colonistElement = document.querySelector(`#colonists li:nth-child(${index + 1}) .tooltip`);
            colonistElement.textContent = `Age: ${colonist.age}\nBirthday: ${colonist.birthday.toLocaleDateString('en-GB')}\nWage: $${colonist.wage}.00`;
        }

        let deathChance = 0;
        if (colonist.age > 80) {
            deathChance = 0.2;
        } else if (colonist.age > 60) {
            deathChance = 0.1;
        }

        if (Math.random() < deathChance) {
            // Chance of death based on age
            const statusUpdateElement = document.createElement('li');
            statusUpdateElement.textContent = `[${currentDate.toLocaleDateString('en-GB')}, ${currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}] Colonist ${colonist.name} has passed away.`;
            document.getElementById('status-updates').appendChild(statusUpdateElement);
            evictColonist(colonist, document.querySelector(`#colonists li:nth-child(${index + 1})`));
        }
    });
}

function addColonist() {
    if (colonistList.length < colonists.length && population < maxPopulation) {
        const newColonist = createColonist(colonists[colonistList.length]);
        colonistList.push(newColonist);
        const colonistElement = createColonistElement(newColonist);
        document.getElementById('colonists').appendChild(colonistElement);
        population++;
        const statusUpdateElement = document.createElement('li');
        statusUpdateElement.textContent = `[${currentDate.toLocaleDateString('en-GB')}, ${currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}] A new colonist has arrived! Welcome ${newColonist.name}, age ${newColonist.age}.`;
        document.getElementById('status-updates').appendChild(statusUpdateElement);
        updateStats();
    }
}
