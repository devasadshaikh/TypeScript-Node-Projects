import inquirer from 'inquirer';
import chalk from 'chalk';
let currencyConverter = {
    "USD": {
        "EUR": 0.88,
        "GBP": 0.75,
        "JPY": 112.15,
        "PKR": 277.50 // Conversion rate from US Dollar to Pakistani Rupees
    },
    "EUR": {
        "USD": 1.14,
        "GBP": 0.91,
        "JPY": 127.30,
        "PKR": 316.75 // Conversion rate from Euro to Pakistani Rupees
    },
    "GBP": {
        "USD": 1.33,
        "EUR": 1.10,
        "JPY": 141.22,
        "PKR": 371.20 // Conversion rate from British Pound to Pakistani Rupees
    },
    "JPY": {
        "USD": 0.0089,
        "EUR": 0.0079,
        "GBP": 0.0071,
        "PKR": 2.50 // Conversion rate from Japanese Yen to Pakistani Rupees
    },
    "PKR": {
        "USD": 0.0036,
        "EUR": 0.0032,
        "GBP": 0.0027,
        "JPY": 0.4 // Conversion rate from Pakistani Rupees to Japanese Yen
    }
};
async function start() {
    let again;
    do {
        await convertFunction();
        again = await inquirer.prompt([
            {
                type: "list",
                name: "continue",
                message: "Do you want to continue?",
                choices: ["Yes", "No"]
            }
        ]);
    } while (again.continue == "Yes");
}
start();
async function convertFunction() {
    let select = await inquirer.prompt([
        {
            type: "list",
            name: "fromCurrency",
            message: "From which Currency?",
            choices: ["USD", "EUR", "GBP", "JPY", "PKR"]
        },
        {
            type: "number",
            name: "amount",
            message: "Enter Your Amount :",
        },
        {
            type: "list",
            name: "toCurrency",
            message: "To which Currency?",
            choices: ["USD", "EUR", "GBP", "JPY", "PKR"]
        }
    ]);
    const { fromCurrency, toCurrency, amount } = select;
    if (fromCurrency && amount && toCurrency) {
        let result = currencyConverter[fromCurrency][toCurrency] * amount;
        console.log(`Converting ${amount} ${fromCurrency} To ${toCurrency} Is ${chalk.yellow(result)} ${chalk.yellow(toCurrency)}`);
    }
    else {
        console.log("Invalid Input");
    }
}
