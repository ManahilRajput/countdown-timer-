#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { format, differenceInSeconds } from 'date-fns';

console.log(chalk.bgCyanBright.italic("\n\t !! WELCOME TO MY COUNTDOWN TIMER PROJECT !! \t\n"));

const time=await inquirer.prompt([{
    type:"list",
    name:"select",
    message:chalk.bgYellowBright.bold("how you want to countdown? "),
    choices:[chalk.greenBright.italic("IN SECONDS "), chalk.magentaBright.italic("IN MINUTES ")],
}]);

if (time.select==chalk.greenBright.italic("IN SECONDS ")) {
    
const ct=await inquirer.prompt([{
    type:"number",
    name:"input",
    message:chalk.greenBright("enter number in secods :"),
    validate: (input)=>{
        if( isNaN (input)){
            return "please enter valid number !";
        }
        else if (input > 60) {
            return "number must be in the range of 60";
        } else {
            return true;
        }
    }

}]);


let userinput=ct.input;
function count(num:number) {
    const time=new Date().setSeconds(new Date().getSeconds() + num);
    const t=new Date(time);

setInterval(()=>{
    const currenttime=new Date();
    const timedif=differenceInSeconds(t,currenttime);
    if (timedif <= 0) {
        console.log("Timer Completed");
        process.exit();
    }
    const seconds=Math.floor(timedif % 60);
    const minutes=Math.floor((timedif % (3600 * 24)) / 3600);
    console.log(` ${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`);
    
}, 1000);
}
count(userinput);
}


else {
const ct=await inquirer.prompt([{
    type:"number",
    name:"input",
    message:chalk.redBright.bold("enter number in minutes :"),
    validate: (input)=>{
        if( isNaN (input)){
            return "please enter valid number !";
        }
        else if (input > 60) {
            return "number must be greater than 0";
        } else {
            return true;
        }
    }

}]);


let userinput=ct.input;
function count(num:number) {
    const time=new Date().setMinutes(new Date().getMinutes() + num);
    const t=new Date(time);

setInterval(()=>{
    const currenttime=new Date();
    const timedif=differenceInSeconds(t,currenttime);
    if (timedif <= 0) {
        console.log("Timer Completed");
        process.exit();
    }
    const seconds=Math.floor(timedif % 60);
    const minutes=Math.floor((timedif % (3600 * 24)) / 3600);
    console.log(` ${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`);
    
}, 1000);
}
count(userinput);
};
