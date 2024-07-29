document.addEventListener('DOMContentLoaded', (event) => {
    let mechs = ['Mech 1', 'Mech 2'];
    let missions = ['Skirmish (Easy)', 'Scavenge (Medium)', 'Recon (Hard)'];
    let deployedMechs = [];
    let selectedMech = null;
    let selectedMission = null;
    let turn = 1;
    let timerInterval = null;
    let timerDuration = 10; // 10 seconds countdown
    let timerRemaining = timerDuration;

    let mapData = 0;
    let mechParts = 0;
    let rawMaterials = 0;

    const mechList = document.querySelector('#mech-list ul');
    const missionList = document.querySelector('#mission-list ul');
    const commitBtn = document.querySelector('#commit-btn');
    const statusDiv = document.querySelector('#status');
    const timerCanvas = document.getElementById('timer');
    const ctx = timerCanvas.getContext('2d');

    const missionTypes = ['Skirmish', 'Scavenge', 'Recon'];
    const difficulties = ['Easy', 'Medium', 'Hard'];
    const difficultyTurns = {
        'Easy': 2,
        'Medium': 3,
        'Hard': 4
    };

    function updateList(listElement, items, type) {
        listElement.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', () => {
                if (type === 'mech') {
                    selectedMech = index;
                } else {
                    selectedMission = index;
                }
                updateSelection();
            });
            listElement.appendChild(li);
        });
    }

    function updateSelection() {
        document.querySelectorAll('#mech-list li').forEach((li, index) => {
            li.classList.toggle('selected', index === selectedMech);
        });
        document.querySelectorAll('#mission-list li').forEach((li, index) => {
            li.classList.toggle('selected', index === selectedMission);
        });
        commitBtn.disabled = selectedMech === null || selectedMission === null;
    }

    function updateStatus() {
        let statusText = `Turn: ${turn}`;
        deployedMechs.forEach(deployed => {
            statusText += `<br>${deployed.mech} on ${deployed.mission}, ${deployed.turnsRemaining} turns remaining`;
        });
        statusDiv.innerHTML = statusText;
    }

    function updateCargoHold() {
        document.getElementById('map-data').textContent = mapData;
        document.getElementById('mech-parts').textContent = mechParts;
        document.getElementById('raw-materials').textContent = rawMaterials;
    }

    function drawTimer(remaining) {
        const fullCircle = 2 * Math.PI;
        const remainingTimeFraction = remaining / timerDuration;
        ctx.clearRect(0, 0, timerCanvas.width, timerCanvas.height);

        // Draw background circle
        ctx.beginPath();
        ctx.arc(timerCanvas.width / 2, timerCanvas.height / 2, timerCanvas.width / 2, 0, fullCircle);
        ctx.fillStyle = '#ddd';
        ctx.fill();

        // Draw remaining time arc
        ctx.beginPath();
        ctx.moveTo(timerCanvas.width / 2, timerCanvas.height / 2);
        ctx.arc(timerCanvas.width / 2, timerCanvas.height / 2, timerCanvas.width / 2, -0.5 * Math.PI, (remainingTimeFraction * fullCircle) - 0.5 * Math.PI);
        ctx.lineTo(timerCanvas.width / 2, timerCanvas.height / 2);
        ctx.fillStyle = '#4caf50';
        ctx.fill();

        // Draw remaining time text
        ctx.fillStyle = '#000';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(remaining, timerCanvas.width / 2, timerCanvas.height / 2);
    }

    function startTimer() {
        if (timerInterval) clearInterval(timerInterval);
        timerRemaining = timerDuration;
        drawTimer(timerRemaining);
        timerInterval = setInterval(() => {
            timerRemaining -= 1;
            if (timerRemaining <= 0) {
                advanceTurn();
                timerRemaining = timerDuration;
            }
            drawTimer(timerRemaining);
        }, 1000);
    }

    function generateRandomMission() {
        const missionType = missionTypes[Math.floor(Math.random() * missionTypes.length)];
        const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
        return `${missionType} (${difficulty})`;
    }

    function addMissionRewards(mission, difficulty) {
        const rewardAmount = difficulty === 'Easy' ? 1 : difficulty === 'Medium' ? 2 : 3;
        if (mission.includes('Recon')) {
            mapData += rewardAmount;
        } else if (mission.includes('Skirmish')) {
            mechParts += rewardAmount;
        } else if (mission.includes('Scavenge')) {
            rawMaterials += rewardAmount;
        }
        updateCargoHold();
    }

    function advanceTurn() {
        turn += 1;

        // 50% chance to add a new mission, if there's space
        if (Math.random() < 0.5 && missions.length < 4) {
            const newMission = generateRandomMission();
            missions.push(newMission);
        }

        deployedMechs = deployedMechs.map(deployed => {
            deployed.turnsRemaining -= 1;
            if (deployed.turnsRemaining <= 0) {
                mechs.push(deployed.mech);
                addMissionRewards(deployed.mission, deployed.mission.match(/\(([^)]+)\)/)[1]);
                return null;
            }
            return deployed;
        }).filter(deployed => deployed !== null);

        updateList(mechList, mechs, 'mech');
        updateList(missionList, missions, 'mission');
        updateSelection();
        updateStatus();
    }

    commitBtn.addEventListener('click', () => {
        if (selectedMech !== null && selectedMission !== null) {
            const mech = mechs.splice(selectedMech, 1)[0];
            const mission = missions.splice(selectedMission, 1)[0];
            const missionDifficulty = mission.match(/\(([^)]+)\)/)[1];
            const turnsRemaining = difficultyTurns[missionDifficulty];
            deployedMechs.push({ mech, mission, turnsRemaining });
            selectedMech = null;
            selectedMission = null;
            updateList(mechList, mechs, 'mech');
            updateList(missionList, missions, 'mission');
            updateSelection();
            updateStatus();
        }
    });

    updateList(mechList, mechs, 'mech');
    updateList(missionList, missions, 'mission');
    updateSelection();
    updateStatus();
    startTimer();
});
