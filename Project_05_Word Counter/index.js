import inquirer from 'inquirer';
async function loop() {
    do {
        await main();
        var agains = await inquirer.prompt({
            type: "list",
            name: "again",
            message: "Do you want to continue?",
            choices: ["Yes", "No"],
        });
    } while (agains.again == "Yes");
}
loop();
async function main() {
    let input = await inquirer.prompt([
        {
            type: "input",
            name: "sentence",
            message: "Write Your Sentence For Count Words?"
        }
    ]);
    let result = input.sentence.trim().split(" ");
    console.log(`In Your Sentence ${result.length - 1} White Spaces`);
}
