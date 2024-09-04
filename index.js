// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the player won or lost
// 6. Give the user their winnings
// 7. Repeat steps 2-6 until the user decides to quit

// function deposit(){
//     return 1
// }

// ***************** Deposit some money *********************

const prompt = require("prompt-sync")();

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

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines >= 3) {
          console.log("Invalid Number of lines, try again.");
        } else {
          return numberOfLines;
        }
    }
};

const depositAmount = deposit();
// console.log(depositAmount);

