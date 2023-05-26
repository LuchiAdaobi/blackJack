#Blackjack App
This is a simple web application that allows you to play a game of Blackjack. The app displays cards and calculates the sum of your hand. It also provides messages based on your current game status.

##Features
Displays the player's name and chips
Allows the player to start the game
Generates random cards for the player's hand
Calculates the sum of the player's hand
Determines if the player has Blackjack or if they are out of the game
Allows the player to draw a new card
Displays the current cards, sum, and game message
Usage
Include the necessary HTML elements in your web page:
html
Copy code
<p id="player-el"></p>
<p id="cards-el"></p>
<p id="sum-el"></p>
<p id="message-el"></p>
<button id="btn-newcard" onclick="newCard()">New Card</button>
Add the following JavaScript code to your web page or app:
javascript
Copy code
const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');
const newCardEl = document.getElementById('btn-newcard');

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";

let player = {
  name: 'Luchi',
  chips: 145
};

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ': $' + player.chips;

function startGame() {
  cards = [firstCard, secondCard];
  cardsEl.textContent = "Cards: " + cards;
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 14);
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}

function renderGame() {
  cardsEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Woohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  sumEl.textContent = 'Sum: ' + sum;
  messageEl.textContent = message;
}

function newCard() {
  if (!isAlive && !hasBlackJack) {
    return;
  }
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}

// Additional Practice Code
let fruits = ['apple', 'orange', 'apple', 'apple', 'orange'];
let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');

function fruitPlacement() {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'apple') {
      appleShelf.textContent += fruits[i] + ' ';
    } else {
      orangeShelf.textContent += fruits[i] + ' ';
    }
  }
}

fruitPlacement();
Customize the player's name and initial chips by modifying the player object:
javascript
Copy code
let player = {
  name: 'Your Name',
  chips: 100
};
Customize the behavior and appearance of the app as needed.
Additional Practice Code
The app also includes additional code that demonstrates fruit placement on shelves. This code is for practice purposes and can be modified or removed according to your needs.

Note: Ensure that your HTML contains elements with the IDs apple-shelf and orange-shelf for the additional practice code to work correctly.

Feel free to explore and modify the code to enhance the app's functionality!