import inquirer from 'inquirer'
import chalk from 'chalk'

let currencyConverter = {
    "USD": {
      "EUR": 0.88,   // Conversion rate from US Dollar to Euro
      "GBP": 0.75,   // Conversion rate from US Dollar to British Pound
      "JPY": 112.15, // Conversion rate from US Dollar to Japanese Yen
      "PKR": 277.50 // Conversion rate from US Dollar to Pakistani Rupees
    },
    "EUR": {
      "USD": 1.14,   // Conversion rate from Euro to US Dollar
      "GBP": 0.91,   // Conversion rate from Euro to British Pound
      "JPY": 127.30, // Conversion rate from Euro to Japanese Yen
      "PKR": 316.75 // Conversion rate from Euro to Pakistani Rupees
    },
    "GBP": {
      "USD": 1.33,   // Conversion rate from British Pound to US Dollar
      "EUR": 1.10,   // Conversion rate from British Pound to Euro
      "JPY": 141.22, // Conversion rate from British Pound to Japanese Yen
      "PKR": 371.20 // Conversion rate from British Pound to Pakistani Rupees
    },
    "JPY": {
      "USD": 0.0089, // Conversion rate from Japanese Yen to US Dollar
      "EUR": 0.0079, // Conversion rate from Japanese Yen to Euro
      "GBP": 0.0071, // Conversion rate from Japanese Yen to British Pound
      "PKR": 2.50 // Conversion rate from Japanese Yen to Pakistani Rupees
    },
    "PKR": {
      "USD": 0.0036, // Conversion rate from Pakistani Rupees to US Dollar
      "EUR": 0.0032, // Conversion rate from Pakistani Rupees to Euro
      "GBP": 0.0027, // Conversion rate from Pakistani Rupees to British Pound
      "JPY": 0.4 // Conversion rate from Pakistani Rupees to Japanese Yen
    }
  };

async function  start() {
    let again;
    do{
        await convertFunction();
        again = await inquirer.prompt([
            {
                type:"list",
                name: "continue",
                message: "Do you want to continue?",
                choices:["Yes","No"]
            }
        ])

    }while(again.continue == "Yes")
}  
start();
async function convertFunction(){
let select:{
    fromCurrency:'"USD" | "EUR" | "GBP" | "JPY" | "PKR"'
    toCurrency:'"USD" | "EUR" | "GBP" | "JPY" | "PKR"'
    amount:number,
} = await inquirer.prompt([
{
    type:"list",
    name: "fromCurrency",
    message: "From which Currency?",
    choices: ["USD","EUR","GBP","JPY","PKR"]
},
{
    type:"number",
    name: "amount",
    message: "Enter Your Amount :",

},
{
    type:"list",
    name: "toCurrency",
    message: "To which Currency?",
    choices: ["USD","EUR","GBP","JPY","PKR"]
}
]);
const {fromCurrency,toCurrency,amount} = select;

if(fromCurrency && amount && toCurrency){
    let result = currencyConverter[fromCurrency][toCurrency] * amount;
    console.log(`Converting ${amount} ${fromCurrency} To ${toCurrency} Is ${chalk.yellow(result)} ${chalk.yellow(toCurrency)}`)
}
else{
    console.log("Invalid Input")
}
}