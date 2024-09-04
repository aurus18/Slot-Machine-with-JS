// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the player won or lost
// 6. Give the user their winnings
// 7. Repeat steps 2-6 until the user decides to quit
// total no. of bets = balance / no. of lines user can bet on

// function deposit(){
//     return 1
// }

// ***************** Deposit some money *********************

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = { //onejct which maps different values to the keys
    A : 2,
    B : 4,
    C : 6,
    D : 8,
}

const SYMBOL_VALUES ={ //values to be multiplied 
    A : 5,
    B : 4,
    C : 3,
    D : 2,
}

const deposit =() => {
    while (true){ // infinite loop
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount); // converting the string input to float
        
        if (isNaN(numberDepositAmount) || numberDepositAmount <=0){
            console.log("Invalid deposit amount, try again.");
        }
        else {
            return numberDepositAmount;
        }
    }
};

// ***************** Determine number of lines to bet on *********************

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("Enter the  number of lines to bet on (1-3): ");

        const numberOfLines = parseFloat(lines); // converting the string input to float

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
          console.log("Invalid Number of lines, try again.");
        } else {
          return numberOfLines;
        }
    }
};

// ***************** Collect a bet amount *********************

const getBet = (balance, lines) => {
    while (true) {
      const bet = prompt("Enter the bet per line: ");

      const numberBet = parseFloat(bet); // converting the string input to float

      if (isNaN(numberBet) || numberBet <= 0 || numberBet >= (balance / lines)) {
        console.log("Invalid bet.");
      } else {
        return numberBet;
      }
    }
};

// ***************** Spin *********************

const spin = () => {
    const symbols = [];
    for (const[symbol, count] of Object.entries(SYMBOLS_COUNT)){ // putting the entries/elements of the object in an array
        for (let i=0; i < count; i++){
            symbols.push(symbol); // for every single symbols and for the count of those symbols we're inserting that many symbols in the array  
        }
        
    }
    // const reels = [[],[],[]]; 
    const reels = [];
    //represent a coloumn inside out slot machine
    for (let i = 0; i < COLS; i++){
        reels.push([]); // we add coloumns/reels to the reels array
        const reelSymbols = [...symbols] //copying all the existing symbols in a new array
        for (let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length); // generating a random index
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1); // removing the selected symbol from the array so we don't select it again while we're generating this reel
        }
    }
    return reels;
};

/* We'll be receiving the reels in this way
[[A B C],[D D D],[A A A]]
but we want the first elements in unique columns
[A D A]
[B D A]
[C D A]
so we need to transpose them
*/
const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i]);
        }
    }

    return rows;
};

const printRows = (rows) =>{
    for (const row of rows){
        let rowStrings = "";
        for (const[i, symbol] of row.entries()){
            rowStrings += symbol;
            if (i != rows.length -1){ // we're checking if it's the last string or not and if not then print the pipe operator in between
                rowStrings += " | ";
            }
        }
        console.log(rowStrings);
    }
}


// ***************** check if the user won *********************

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    for (let row = 0; row < lines; row ++){
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols){//iterating by each elements of a array
            if (symbol != symbols[0]){
                allSame = false;
                break;
            }
        }

        if (allSame){
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
    }
    return winnings;
}

// ***************** game *********************
const game = () =>{
  // const depositAmount = deposit();
  let balance = deposit(); //The starting balance must be what the user deposited
  while (true) {
    console.log("\nYour current balance is: $" + balance);
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    balance -=  bet * numberOfLines;
    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);
    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;
    console.log("You won, $" + winnings.toString());

    if (balance <= 0){
        console.log("You have run out of money. Game over.");
        break;
    }

    const playAgain = prompt("Do you want to play again (y/n)?");
    
    if (playAgain.toLowerCase() != 'y') break;
  }
};

game();

