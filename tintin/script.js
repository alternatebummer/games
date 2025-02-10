// script.js
document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const input = document.getElementById("input");

    function appendMessage(message, className = "description") {
        const messageElement = document.createElement("div");
        messageElement.classList.add(className);
        messageElement.textContent = message;
        output.appendChild(messageElement);
        output.scrollTop = output.scrollHeight;
    }

    function processCommand(command) {
        appendMessage(`> ${command}`, "command");
        const words = command.toLowerCase().split(" ");

        if (words[0] === "talk" && words[1] === "to") {
            const npcName = words.slice(2).join(" ");
            if (npcs.includes(npcName)) {
                appendMessage(`${npcName.charAt(0).toUpperCase() + npcName.slice(1)} looks at you expectantly.`, "persons");
            } else {
                appendMessage("There's no one by that name here.", "description");
            }
        } else if (words[0] === "ask" && words[1] && words[2] === "about") {
            const npcName = words[1].toLowerCase();
            const topic = words.slice(3).join(" ");
            if (npcs.includes(npcName) && dialogueTopics[topic] && dialogueTopics[topic][npcName]) {
                appendMessage(dialogueTopics[topic][npcName], "persons");
            } else {
                appendMessage("Either that topic doesn't exist or this person doesn't know about it.", "description");
            }
        } else {
            appendMessage("I don't understand that command.", "description");
        }
    }

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && input.value.trim() !== "") {
            processCommand(input.value.trim());
            input.value = "";
        }
    });

    appendMessage("You find yourself in a dimly lit room with Lydia, Kaspar, Elena, Victor, and Nina.", "title");
    appendMessage("You can 'talk to [NPC]' or 'ask [NPC] about [topic]'.", "header");
});
