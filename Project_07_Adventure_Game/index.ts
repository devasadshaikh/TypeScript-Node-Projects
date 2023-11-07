import inquirer from 'inquirer'
import chalk from 'chalk'


class PlayerClass {
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = player.player
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}

class OpponentClass {
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = opponent.opponent
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}


let player = await inquirer.prompt([
    {
        name:"player",
        type: "input",
        message: `${chalk.hex('#FFFF00').bold("Enter Your Name")}:`
    }
]);
let opponent = await inquirer.prompt([
    {
        type:'list',
        name:'opponent',
        choices:["Skeleton","zombie"],
        message: `${chalk.hex('#FFFF00').bold("Select Your Opponent")}`
    }
]);
let person = new PlayerClass(player.player)
let op = new OpponentClass(opponent.opponent)
 
if(opponent.opponent == "Skeleton"){
    console.log(`${chalk.hex('#FFFF00').bold(person.name)} VS ${chalk.hex('#FF0000').bold(op.name)}`)
}
async function as() {
let ask = await inquirer.prompt([
    {
        type:'list',
        name:"ask",
        choices:["Attack","Drink Portion","Run"],
        message: `${chalk.hex('#FFFF00').bold("Select Your Option")}`
    }
]);

if(ask.ask == "Attack"){
    let num = Math.floor(Math.random()*15);
    
    if(num <= 5){
        person.fuelDecrease()
        console.log(chalk.bold.hex('#FFFF00')(`${person.name} Fuel is ${person.fuel}`))
        console.log(chalk.bold.hex('#FF0000')(`${op.name} Fuel is ${op.fuel}`))
        if(person.fuel <= 0){
            console.log(chalk.bold.italic.hex('#FF0000')("You Loose, Better Luck Next Time"))
            process.exit();
        }
    }
    if(num >= 5){
        op.fuelDecrease()
        console.log(chalk.bold.hex('#FFFF00')(`${person.name} Fuel is ${person.fuel}`))
        console.log(chalk.bold.hex('#FF0000')(`${op.name} Fuel is ${op.fuel}`))   
        if(op.fuel <= 0){
            console.log(chalk.bold.italic.hex('#FFFF00')("You Win"))
            process.exit();
        }        
    }
}
if(ask.ask == "Drink Portion"){
    person.fuelIncrease()
    console.log(chalk.bold.hex('#FFFF00')(`You Drink Health Portion Your Fuel Is ${person.fuel}`))
}
if(ask.ask == "Run"){
    console.log(chalk.bold.italic.hex('#FF0000')("You Loose, Better Luck Next Time"))
    process.exit();
}

}
as();
do{
    await as();
}while(true)