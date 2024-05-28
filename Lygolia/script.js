const preparedStatements = [
    "Hi there! How can I help you today?",
    "It's a beautiful day, isn't it?",
    "What's your favorite book?",
    "I love chatting with new people!",
    "Tell me something interesting about yourself."
];

const chatContent = document.getElementById('chat-content');
const inputField = document.getElementById('input-field');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = inputField.value.trim();
    if (message === '') return;

    addMessage('player', message);
    inputField.value = '';
    respond();
}

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatContent.appendChild(messageElement);
}

function respond() {
    const response = preparedStatements[Math.floor(Math.random() * preparedStatements.length)];
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'computer');
    chatContent.appendChild(messageElement);

    let index = 0;
    const interval = setInterval(() => {
        if (index < response.length) {
            messageElement.textContent += response[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

function scrollToBottom() {
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Set up an interval to refresh the chat window to the bottom every 200 milliseconds
setInterval(scrollToBottom, 200);
