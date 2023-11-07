import inquirer from 'inquirer';
let mainTodo:string[]=[]

async function createTodos(createTodos:string[]){
do{
    let userInput = await inquirer.prompt([
        {
            message:"Select Operation",
            type:'list',
            name:'operation',
            choices:["add","delete","view"]
        }
    ])
    if(userInput.operation == "add"){
        let addTodo = await inquirer.prompt({
            type:"input",
            message:"Add Item In Todo",
            name:"add"

        });
        createTodos.push(addTodo.add)
        console.log(createTodos);
        
    }
    if(userInput.operation == "delete"){
        let deleteTodo = await inquirer.prompt({
            type:"list",
            message:"Select Item For Delete In Todo",
            name:"delete",
            choices:createTodos.map(item => item)
        });
        let newTodo = createTodos.filter(val => val !== deleteTodo.delete)
        createTodos=[...newTodo]
        console.log(createTodos);
        
    }
    if(userInput.operation == "view"){
        console.log(createTodos);    
    }
}while(true);
}
createTodos(mainTodo)