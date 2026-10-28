# 🃏 Blackjack

A simple Blackjack game built with vanilla JavaScript, HTML, and CSS. Practice project to learn DOM manipulation, event handling, and game state management.

## 🎮 How to Play

1. Press **START GAME** to deal two cards.
2. Press **NEW CARD** to draw another card.
3. Try to get as close to **21** as possible without going over.
   - **21** = Blackjack! You win chips and a life ❤️
   - **Over 21** = You lose chips
4. Run out of chips? Use **INSERT COIN** to reload (if you still have lives).
5. Run out of lives? Use **RESET** to start over.

## ✨ Features

- Card drawing with random values (1-11)
- Chip system with rewards and penalties
- Lives system with hearts ❤️
- Insert Coin / Reset mechanics
- Button state management (disabled/enabled based on game state)
- Responsive layout with casino-style background

## 🛠️ Tech Stack

- HTML
- CSS (Flexbox, responsive design, button transitions)
- Vanilla JavaScript (no frameworks or libraries)

## 🚀 How to Run

Open `index.html` in your browser. That's it.

## 📁 Project Structure

```
black-jack/
├── index.html
├── index.css
├── index.js
└── README.md
```

## 🎯 Game Rules

| Event | Result |
|---|---|
| Sum = 21 | Blackjack! +15 chips, +1 life |
| Sum > 21 | Bust! -10 chips |
| Chips = 0 | Lose a life, use INSERT COIN to continue |
| Lives = 0 | Game Over, use RESET to restart |
