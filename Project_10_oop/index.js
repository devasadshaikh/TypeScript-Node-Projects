import inquirer from 'inquirer';
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addstd(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const start = async (persons) => {
    do {
        console.log("Welcome");
        const ans = await inquirer.prompt([
            {
                name: "answer",
                type: "list",
                message: "Kis se Bat Krne Hai",
                choices: ["student", "Kisi se nahi"]
            }
        ]);
        if (ans.answer == "student") {
            const ab = await inquirer.prompt([
                {
                    name: "abc",
                    type: "input",
                    message: "Enter the student name"
                }
            ]);
            const studentt = persons.students.find((val) => val.name == ab.abc);
            if (!studentt) {
                const name = new Student(ab.abc);
                persons.addstd(name);
                console.log(`Hello My Name Is ${ab.abc} And I am Good`);
            }
            if (studentt) {
                console.log(`Hello I am ${ab.abc} Is  Already In Your Friend List`);
            }
        }
        if (ans.answer == "Kisi se nahi") {
            return;
        }
    } while (true);
};
start(persons);
