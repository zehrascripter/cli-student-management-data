#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let ans = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter Your name",
    },
    {
        name: "courses",
        type: "list",
        message: "Please select any course to enroll",
        choices: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"]
    }
]);
let fee = {
    "HTML": 4000,
    "CSS": 5000,
    "JavaScript": 6000,
    "TypeScript": 7000,
    "Python": 8000
};
console.log(chalk.greenBright.bold(`Fees ${fee[ans.courses]}
`));
console.log(chalk.yellowBright.bold(`Balance : ${myBalance}
`));
let payment = await inquirer.prompt([
    {
        name: "cash",
        type: "list",
        message: "Please select any payment mathod",
        choices: ["Bank Transfer", "Easypaisa", "JazzCash"]
    },
    {
        name: "amount",
        type: "number",
        message: "Transfer fee"
    }
]);
console.log(chalk.blackBright.bold(`You select payment method ${payment.cash}`));
let fees = fee[ans.courses];
let method = payment.amount;
if (fees === method) {
    console.log(chalk.magentaBright.bold(`Hello ${ans.student.toUpperCase()},
     You have successfuly enrolled in ${ans.courses}. 
     Now yor balance is ${payment.amount}.`));
    let ans2 = await inquirer.prompt([
        {
            name: "option",
            type: "confirm",
            message: "Do you want to exit or check your status?"
        }
    ]);
    if (ans2.option === true) {
        console.log(chalk.yellowBright(`**************************************************`));
        console.log(chalk.greenBright.bold(`Student name : ${ans.student.toUpperCase()}`));
        console.log(chalk.magentaBright.bold(`Student ID : ${randomNumber}`));
        console.log(chalk.red.bold(`Course : ${ans.courses}`));
        console.log(chalk.blueBright.bold(`Paid fees : ${fees}`));
        console.log(chalk.greenBright.bold(`Your Balance is : ${myBalance += fees}`));
        console.log(chalk.yellowBright(`**************************************************`));
    }
}
else if (fees !== method) {
    console.log(chalk.red.bold(`Invalid amount due to course`));
}
