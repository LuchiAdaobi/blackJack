const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardsEl = document.getElementById('cards-el')
const newCardEl = document.getElementById('btn-newcard')

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";

let player = {
  name: 'Luchi',
  chips: 145
}

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ': $' + player.chips
 
function startGame() {
  cards = [firstCard, secondCard];
  cardsEl.textContent = "Cards: " + cards;
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame()
}

function getRandomCard(){
  let randomNum = Math.floor(Math.random() * 14) 
  if(randomNum === 1){
    return 11
  }else if(randomNum > 10 ){
    return 10
  } else{

    return randomNum
  }
}
function renderGame() {
  //  
  cardsEl.textContent = 'Cards: '
  for(let i = 0; i < cards.length; i++){
    cardsEl.textContent +=  cards[i] + ' ';
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
  sumEl.textContent = 'Sum :' + sum ;
  messageEl.textContent = message
}

function newCard() {
    if(!isAlive && !hasBlackJack){
      return
    }
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame()

}

// practice
let fruits = ['apple', 'orange', 'apple', 'apple', 'orange']
let appleShelf = document.getElementById('apple-shelf')
let orangeShelf = document.getElementById('orange-shelf')

function fruitPlacement(){
  let apples = []
  let oranges = []
  for(let i =0; i < fruits.length; i++){
    if(fruits[i] === 'apple') {
      // apples.push(fruits[i])
      appleShelf.textContent += fruits[i] + ' ';
    }else{
      orangeShelf.textContent += fruits[i] + ' ' ;
    //  oranges.push(fruits[i])
    }
  }
  // appleShelf.textContent = apples.join(' ,  ')
  // orangeShelf.textContent = oranges.join(' , ')
}

// fruitPlacement()

console.log(fruitPlacement)