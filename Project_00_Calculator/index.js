#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let inq = await inquirer.prompt([
    {
        message: "Enter Your First Number",
        type: "number",
        name: "val1"
    },
    {
        message: "Choose Your Operator",
        choices: ["+", "-", "/", "*"],
        name: "operator",
        type: "list"
    },
    {
        message: "Enter Your Second Number",
        type: "number",
        name: "val2"
    }
]);
if (inq.operator == "+") {
    console.log(chalk.bold.yellow(inq.val1 + inq.val2));
}
else if (inq.operator == "-") {
    console.log(inq.val1 - inq.val2);
}
else if (inq.operator == "*") {
    console.log(inq.val1 * inq.val2);
}
else if (inq.operator == "/") {
    console.log(inq.val1 / inq.val2);
}
else {
    console.error("Syntax Error");
}
