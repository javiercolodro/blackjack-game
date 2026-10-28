let player = {
  name: "Coins",
  chips: 20,
};

let cards = [];
let sum = 0;
let lifesCount = 2;
let hearts = "";
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let lifes = document.getElementById("lifes");
let startBtn = document.getElementById("start-game");
let newCardBtn = document.getElementById("new-card");
let resetBtn = document.getElementById("resetBtn");
let insertCoinBtn = document.getElementById("insert-coin");

playerEl.textContent = player.name + ": $" + player.chips;
renderLives();

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  if (player.chips <= 0) {
    return;
  }
  isAlive = true;
  hasBlackJack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  startBtn.disabled = false;
  newCardBtn.disabled = false;
  insertCoinBtn.disabled = true;
  resetBtn.disabled = true;
  renderGame();
}

function renderLives() {
  hearts = "Lives:";
  for (let i = 0; i < lifesCount; i++) {
    hearts += " ❤️ ";
  }

  lifes.textContent = hearts;
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
    player.chips += 15;
    playerEl.textContent = player.name + ":" + player.chips;
    lifesCount++;
    renderLives();
  } else {
    message = "You're out of the game!";
    newCardBtn.disabled = true;
    isAlive = false;
    player.chips -= 10;
    playerEl.textContent = player.name + ":" + player.chips;
    renderLives();
  }
  messageEl.textContent = message;
  if (player.chips <= 0) {
    startBtn.disabled = true;
    newCardBtn.disabled = true;
    messageEl.textContent = `Game Over!`;
    lifesCount--;
    renderLives();

    if (lifesCount > 0) {
      resetBtn.disabled = true;
      insertCoinBtn.disabled = false;
    } else {
      insertCoinBtn.disabled = true;
      resetBtn.disabled = false;
    }
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function insertCoin() {
  if (lifesCount <= 0) {
    return;
  }
  startBtn.disabled = false;
  newCardBtn.disabled = false;
  insertCoinBtn.disabled = true;
  resetBtn.disabled = true;
  cardsEl.textContent = "Cards: ";
  sumEl.textContent = "Sum: ";
  player.chips = 20;
  cards = [];
  sum = 0;
  playerEl.textContent = player.name + ": $" + player.chips;
  messageEl.textContent = "Want to play a round?";

  renderLives();
}

function reset() {
  if (lifesCount > 0) {
    return;
  }
  startBtn.disabled = false;
  newCardBtn.disabled = false;
  insertCoinBtn.disabled = true;
  resetBtn.disabled = true;
  cardsEl.textContent = "Cards: ";
  sumEl.textContent = "Sum: ";
  player.chips = 20;
  lifesCount = 2;
  cards = [];
  sum = 0;
  playerEl.textContent = player.name + ": $" + player.chips;
  messageEl.textContent = "Want to play a round?";
  renderLives();
}
