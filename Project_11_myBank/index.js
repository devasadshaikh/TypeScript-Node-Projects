import inquirer from 'inquirer';
class Customer {
    constructor(accNum) {
        this.accNum = accNum;
    }
}
class Bank {
    constructor() {
        this.cus = [];
        this.acc = [];
    }
    addcustomer(obj) {
        this.cus.push(obj);
    }
    addAccountNumber(obj) {
        this.acc.push(obj);
    }
    transaction(objAc) {
        let newacc = this.acc.filter((q) => q.accountNumber !== objAc.accountNumber);
        this.acc = [...newacc, objAc];
    }
}
let myBank = new Bank();
// create costumer
for (let i = 1; i <= 20; i++) {
    const coss = new Customer(100720 + i);
    myBank.addcustomer(coss);
    myBank.addAccountNumber({ accountNumber: coss.accNum, balance: Math.round(Math.random() * 23000) });
}
async function Service(myBank) {
    let services = await inquirer.prompt([
        {
            type: 'list',
            name: "select",
            message: "Please Select The Service",
            choices: ["View Balance", "Cash Withdraw", "Cash Deposit"]
        }
    ]);
    // View Balance Start
    if (services.select == "View Balance") {
        let a = await inquirer.prompt([
            {
                type: 'number',
                name: 'a',
                message: 'Enter Your Account Number :'
            }
        ]);
        let account = myBank.acc.find((ac) => ac.accountNumber == a.a);
        if (!account) {
            console.log("Invalid");
        }
        if (account) {
            let bal = account.balance;
            console.log(`Dear Customer Your Balance Is ${bal}`);
        }
    }
    //View Balance End
    // cash withdraw start
    if (services.select == "Cash Withdraw") {
        let a = await inquirer.prompt([
            {
                type: 'number',
                name: 'a',
                message: 'Enter Your Account Number :'
            }
        ]);
        let account = myBank.acc.find((ac) => ac.accountNumber == a.a);
        if (!account) {
            console.log("Invalid");
        }
        if (account) {
            let ans = await inquirer.prompt([
                {
                    type: "number",
                    message: "Enter Your Amount :",
                    name: "amount"
                }
            ]);
            if (ans.amount > account.balance) {
                console.log("Insufficient Balance");
            }
            let ba = account.balance - ans.amount;
            myBank.transaction({ accountNumber: account.accountNumber, balance: ba });
        }
    }
    // cash withdraw end
    // cash deposit start
    if (services.select == "Cash Deposit") {
        let a = await inquirer.prompt([
            {
                type: 'number',
                name: 'a',
                message: 'Enter Your Account Number :'
            }
        ]);
        let account = myBank.acc.find((ac) => ac.accountNumber == a.a);
        if (!account) {
            console.log("Invalid");
        }
        if (account) {
            let ans = await inquirer.prompt([
                {
                    type: "number",
                    message: "Enter Your Amount :",
                    name: "amount"
                }
            ]);
            let ba = account.balance + ans.amount;
            myBank.transaction({ accountNumber: account.accountNumber, balance: ba });
        }
    }
}
// Service(myBank);
do {
    await Service(myBank);
} while (true);
