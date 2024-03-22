#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

//Printing a Welcome Message
console.log("\n\tWelcome To \'CodeWithAyesha\' - CLI Simple Calculator\n");

// Asking Questions from Users through Inquirer
let answers = await inquirer.prompt([
    {message: "Enter your first number", type: "number", name: "firstNumber"},
    {message: "Enter your second number", type: "number", name: "secondNumber"},
    {
        message: "Select One Operator to perform Operations",
        type: "list", 
        name: "operator",
        choices: ["Addition","Subtraction","Multipication","Division"],
    },
]);

//Conditional statements If-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtraction"){
     console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multipication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input")
}

console.log("The End");