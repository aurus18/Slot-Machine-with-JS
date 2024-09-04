 # Slot Machine Game 🎰

This is a simple command-line slot machine game built with Node.js. The game simulates a classic slot machine experience where users can deposit money, place bets, spin the reels, and try their luck to win big!

## Features

- **Deposit Money**: Players can deposit money to start playing.
- **Choose Bet Lines**: Players can choose the number of lines (1-3) to bet on.
- **Spin the Reels**: The slot machine spins and reveals symbols.
- **Check Winnings**: Winnings are calculated based on matching symbols on the selected lines.
- **Repeat Until Quit**: The game continues until the player decides to quit or runs out of money.

## How to Play

1. **Deposit Money**: Start by entering a deposit amount.
2. **Select Lines to Bet On**: Choose between 1 to 3 lines to bet on.
3. **Place a Bet**: Enter the bet amount per line. The total bet will be `bet amount x number of lines`.
4. **Spin the Slot Machine**: The reels will spin, and the outcome will be displayed.
5. **Check Winnings**: If any of the lines you bet on have matching symbols, you win based on the symbol values.
6. **Continue or Quit**: You can choose to play again or quit the game.

## Symbol Values

- **A**: 5x
- **B**: 4x
- **C**: 3x
- **D**: 2x

The values represent the multiplier applied to your bet amount if you win with the respective symbol.

## Example Gameplay

1. Enter a deposit amount: `$100`
2. Enter the number of lines to bet on: `3`
3. Enter the bet per line: `$10`
4. Spin the reels...

```
A | B | C
D | D | D
A | A | A
```

5. You won, `$50`!

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Running the Game

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/slot-machine-game.git
   cd slot-machine-game
   ```

2. Install dependencies (if any):
   ```bash
   npm install
   ```

3. Run the game:
   ```bash
   node index.js
   ```


## Acknowledgements

Inspired by classic slot machines and built with love using Node.js.
