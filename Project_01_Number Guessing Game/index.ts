#!/usr/bin/env node
import chalkAnimation from 'chalk-animation';
import chalk, { chalkStderr } from "chalk";
import inquirer from "inquirer";
console.log(chalk.bgMagenta('Lets Get Started'));
let i=1;
while(i>0){
let inq = await inquirer.prompt([
    {
        message:chalkStderr.blue("Guess Your Number:"),
        type:"number",
        name:"guessNumber"
    }
]);
console.log(chalkStderr.greenBright`Your Guess Number Is ${inq.guessNumber}`)

let mNumber=Math.floor(Math.random()*10);
    console.log(chalk.cyanBright`Computer Generated Number Is ${mNumber}`)

    if(inq.guessNumber === mNumber){
        chalkAnimation.rainbow("Congratulation You Win!");break;}
        
    else{
        console.log(chalk.red`Try Again Best Luck!`)}

}
