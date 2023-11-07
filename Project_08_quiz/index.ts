import inquirer from 'inquirer';
const apiLink = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"

let fetchData = async (data:string) => {
    let fetchQuiz:any = await fetch(data)
    let res = await fetchQuiz.json()
    return res.results;
}
let data = await fetchData(apiLink);
let startQuiz = async () => {
    let score:number = 0
    let user = await inquirer.prompt({
        type:"input",
        name:"name",
        message:"What is your Name"
    });

    for(let i = 1; i < 10;i++){
        let answers = [...data[i].incorrect_answers,data[i].correct_answer]

        let ans = await inquirer.prompt({
            type:"list",
            name:"quiz",
            message: data[i].question,
            choices: answers.map((val:any)=>val)
        });
        if(ans.quiz == data[i].correct_answer){
            ++score
    }
}
console.log(score)
}

startQuiz();