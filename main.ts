#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimations from "chalk-animation"

async function welcome () {
    let title = chalkAnimations.rainbow("\n\tlet's start the Gassing Game\n\t")
    await new Promise((res => {
        setTimeout(res,2000);
    }))
    title.stop();
}
welcome();

let randomNumber = Math.floor(Math.random()* 10 + 1);

async function playGame() {
    const answers = await inquirer.prompt([{
        type: "number",
        name: "PersonNumber",
        message: chalk.bgBlue("\tEnter a Guess Number Between 1 to 10 =\t")
    }]);
    
    if (answers.PersonNumber === randomNumber) {
        console.log(chalk.yellow("Congratulations! You won the game."));
    } else {
        console.log(chalk.red("Sorry, you lost the game.\n"));
        console.log(chalk.blue("Let's play again."));
        playGame(); // Ask again if the user loses
    }
}

playGame();