document.addEventListener("DOMContentLoaded", () => {
    const locationDiv = document.getElementById("location");
    const dialogueDiv = document.getElementById("dialogue");
    const startScreen = document.getElementById("start-screen");

    const suspectData = {
        kaspar: {
            name: "Kaspar Vilnik",
            description: "Kaspar is leaning against an invisible fence or mailbox. It's hard to say for sure what it is, he's not a very good mime. He's exaggerated gestures implying that he is tired and bored.",
            statement: "I saw people running out of the café, but I couldn’t see much through my mask. It’s suffocating enough, you know.",
        },
    };

    const handleSelection = (key, context) => {
        if (context === "start") {
            if (key === "1") {
                startScreen.classList.add("hidden");
                locationDiv.classList.remove("hidden");
                document.addEventListener("keydown", (e) => handleSelection(e.key, "location"), { once: true });
            }
        } else if (context === "location") {
            if (key === "1") {
                const suspect = suspectData["kaspar"];
                if (suspect) {
                    locationDiv.classList.add("hidden");
                    dialogueDiv.classList.remove("hidden");

                    document.getElementById("suspect-name").textContent = suspect.name;
                    document.getElementById("suspect-description").textContent = suspect.description;

                    const actionsList = document.getElementById("actions");
                    actionsList.innerHTML = "";

                    const statementAction = document.createElement("li");
                    statementAction.textContent = "1. I'd like to collect your statement.";
                    statementAction.dataset.key = "1";
                    actionsList.appendChild(statementAction);

                    const backAction = document.createElement("li");
                    backAction.textContent = "2. Back away from Kaspar.";
                    backAction.dataset.key = "2";
                    actionsList.appendChild(backAction);

                    document.addEventListener("keydown", (e) => handleSelection(e.key, "dialogue"), { once: true });
                }
            }
        } else if (context === "dialogue") {
            if (key === "1") {
                const suspect = suspectData["kaspar"];
                if (suspect) {
                    const dialogueContainer = document.getElementById("dialogue-container");
                    dialogueContainer.textContent = `"${suspect.statement}"`;
                }
            } else if (key === "2") {
                dialogueDiv.classList.add("hidden");
                locationDiv.classList.remove("hidden");
                document.addEventListener("keydown", (e) => handleSelection(e.key, "location"), { once: true });
            }
        }
    };

    document.addEventListener("keydown", (e) => handleSelection(e.key, "start"), { once: true });
});
