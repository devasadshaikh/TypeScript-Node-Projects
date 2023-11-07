#!/usr/bin/env node
import chalkAnimation from 'chalk-animation';
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.rgb(255, 255, 200)`Welcome To Automatic Teller Machine`)
interface User {
    pin:number,
    balance:number ,
    //  names:string[]  
}
const createUser =()=>{
    let users:User[] = []
    //  let names=["asad","shahzad","affan","sameer","hamza"]
    for(let i=0;i<50;i++){
        let user:User={
            pin:1001 + i,
            balance:100*Math.floor(Math.random()*500)
        }
        users.push(user)
    }
    return users
};
const atmMachine = async(users:User[])=>{
    const res = await inquirer.prompt([
        {
            type:"number",
            message:"Enter Your Pin",
            name:"pinCode",
        },
    ])
    const user = users.find(val => val.pin === res.pinCode)
    if(user){
        console.log(chalk.hex('#ffff00').bold`Welcome Account Holder`);
              
    }else{
        console.log(chalk.hex('#ff0000') `Invalid Pin Code`)
         return;
    }
    const inq=  await inquirer.prompt([
    {
        type:"list",
        message:"Selcet Your Account Type",
        choices:["Current Account","Saving Account","Balance Inquiry"],
        name:"accountType"
    },
    {
        name:"transactionType",
        type:"list",
        message:"Select Your Transaction",
        choices:["Fast Cash","Withdraw",],
        when(inq){
            return inq.accountType == "Current Account"
        },  
    },
    {
        name:"amount",
        type:"list",
        message:"Select Your Amount",
        choices:[1000,2000,5000,10000,50000],
        when(inq){
            return inq.transactionType == "Fast Cash"
        },
    },
    {
        name:"withdrawAmount",
        type:"number",
        message:"Enter Your Amount",
        when(inq){
            return inq.transactionType == "Withdraw"
        },
    },
    {
        name:"enterSavingAmount",
        type:"number",
        message:"Enter Your Amount",
        when(inq){
            return inq.accountType == "Saving Account"
        },
    }
    
])
// Fast Cash
const enterAmount = inq.amount
if(user.balance >= enterAmount){
    const previousBalance = user.balance;
    console.log(chalk.hex('#ff008f')`Your Previous Balance Is ${previousBalance}`)
    console.log(chalk.hex('#00ff43')`Your Selected Amount Is ${enterAmount}`)
    const remaining = user.balance - enterAmount;
    console.log(chalk.hex('#55ffff')`Your Remaining Balance Is ${remaining}`)
}else if(user.balance < enterAmount){
    console.log(chalk.hex('#ff0000')`Insufficient Balance`)
}
// Withdraw 
if(user.balance >= inq.withdrawAmount){
    const preBalance = user.balance;
    console.log(chalk.hex('#ff008f')`Your Previous Balance Is ${preBalance}`)
    console.log(chalk.hex('#00ff43')`Your Entered Amount Is ${inq.withdrawAmount}`)
    const remain = user.balance - inq.withdrawAmount;
    console.log(chalk.hex('#55ffff')`Your Remaining Balance Is ${remain}`)

}else if(user.balance < inq.withdrawAmount){
    console.log(chalk.hex('#ff0000')`Insufficient Balance For Withdraw`)
}
//Saving Account
const balForSavAcc = user.balance;
if(inq.enterSavingAmount){
    console.log(chalk.hex('#ff008f')`Your Amount In Saving Account Is ${balForSavAcc}`)
    console.log(chalk.hex('#00ff43')`You Are Adding ${inq.enterSavingAmount} In Your Saving Account`)
    const addInSavAcc = balForSavAcc + inq.enterSavingAmount;
    console.log(chalk.hex('#55ffff')`Your Total Amount In Saving Account Is ${addInSavAcc}`)
}else{};
// Balance Inquiry
if(inq.accountType == "Balance Inquiry"){
    
    chalkAnimation.rainbow(`Your Account Balance Is ${balForSavAcc}`)
}
};
const users = createUser()
atmMachine(users)
