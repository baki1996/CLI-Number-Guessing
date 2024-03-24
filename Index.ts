#! usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a number |done
// 2) user input a guessing number    |done
// 3) compare user input and computer generated number and show results

const randomNumber = Math.floor(Math.random()* 6 +1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed a right number.");
} else {
    console.log("you guessed wrong number");
}
