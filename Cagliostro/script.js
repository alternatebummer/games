const cardValues = {
    'A': 11,
    'K': 10,
    'Q': 10,
    'J': 10,
    '10': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2
};

const pokerHands = [
    { name: 'Royal Flush', score: (sum) => sum + 100 * 8 },
    { name: 'Straight Flush', score: (sum) => sum + 100 * 8 },
    { name: 'Four of a Kind', score: (sum) => sum + 50 * 7 },
    { name: 'Full House', score: (sum) => sum + 40 * 4 },
    { name: 'Flush', score: (sum) => sum + 35 * 4 },
    { name: 'Straight', score: (sum) => sum + 30 * 4 },
    { name: 'Three of a Kind', score: (sum) => sum + 30 * 3 },
    { name: 'Two Pair', score: (sum) => sum + 20 * 2 },
    { name: 'Pair', score: (sum) => sum + 10 * 2 },
    { name: 'High Card', score: (sum) => sum + 5 * 1 }
];

let deck = [];
let playerCards = [];
let playerScore = 0;
let currentBlind = 300;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('play-hand').addEventListener('click', playHand);
    document.getElementById('discard').addEventListener('click', discardCards);
    startGame();
});

function startGame() {
    deck = createDeck();
    playerScore = 0;
    currentBlind = 300;
    updateHeader();
    dealCards();
}

function createDeck() {
    const suits = ['♠', '♥', '♣', '♦'];
    const deck = [];
    for (const suit of suits) {
        for (const value in cardValues) {
            deck.push({ value, suit });
        }
    }
    return shuffle(deck);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function dealCards() {
    playerCards = deck.splice(0, 8);
    renderCards();
}

function renderCards() {
    const cardsDiv = document.getElementById('cards');
    cardsDiv.innerHTML = '';
    playerCards.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerText = `${card.value}${card.suit}`;
        cardDiv.addEventListener('click', () => toggleCardSelection(index));
        cardsDiv.appendChild(cardDiv);
    });
}

function toggleCardSelection(index) {
    const cardDivs = document.querySelectorAll('.card');
    cardDivs[index].classList.toggle('selected');
}

function playHand() {
    const selectedCards = getSelectedCards();
    if (selectedCards.length === 0 || selectedCards.length > 5) {
        alert('Select up to 5 cards to play a hand.');
        return;
    }

    const handRank = determineHandRank(selectedCards);
    const sumOfRanks = selectedCards.reduce((sum, card) => sum + cardValues[card.value], 0);
    const handValue = pokerHands[handRank].score(sumOfRanks);
    playerScore += handValue;
    updateHeader();

    if (playerScore >= currentBlind) {
        alert('You win this round!');
        currentBlind += 100;
        resetRound();
    } else {
        alert('You lost. Try again.');
        startGame();
    }
}

function discardCards() {
    const selectedCards = getSelectedCards();
    if (selectedCards.length === 0) {
        alert('Select cards to discard.');
        return;
    }

    selectedCards.forEach(card => {
        const index = playerCards.indexOf(card);
        playerCards[index] = deck.pop();
    });
    renderCards();
}

function getSelectedCards() {
    const selectedCardDivs = document.querySelectorAll('.card.selected');
    return Array.from(selectedCardDivs).map(div => {
        const [value, suit] = div.innerText.split(/(?=[♠♥♣♦])/);
        return { value, suit };
    });
}

function determineHandRank(cards) {
    const values = cards.map(card => cardValues[card.value]).sort((a, b) => a - b);
    const suits = cards.map(card => card.suit);
    const uniqueValues = [...new Set(values)];
    const uniqueSuits = [...new Set(suits)];
    const isFlush = uniqueSuits.length === 1;
    const isStraight = uniqueValues.length === 5 && (values[4] - values[0] === 4 || (values[4] === 14 && values[3] - values[0] === 3));
    const counts = {};
    values.forEach(value => counts[value] = (counts[value] || 0) + 1);
    const countsValues = Object.values(counts).sort((a, b) => b - a);

    if (isFlush && isStraight && values[4] === 14 && values[3] === 13) return 0;  // Royal Flush
    if (isFlush && isStraight) return 1;  // Straight Flush
    if (countsValues[0] === 4) return 2;  // Four of a Kind
    if (countsValues[0] === 3 && countsValues[1] === 2) return 3;  // Full House
    if (isFlush) return 4;  // Flush
    if (isStraight) return 5;  // Straight
    if (countsValues[0] === 3) return 6;  // Three of a Kind
    if (countsValues[0] === 2 && countsValues[1] === 2) return 7;  // Two Pair
    if (countsValues[0] === 2) return 8;  // Pair
    return 9;  // High Card
}

function updateHeader() {
    document.getElementById('score').innerText = playerScore;
    document.getElementById('blind').innerText = currentBlind;
    document.getElementById('hand-value').innerText = '-';
}

function resetRound() {
    deck = createDeck();
    dealCards();
}
