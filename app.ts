#! /usr/bin/env node

import inquirer from 'inquirer';

const currencyRates: any = {
    USD: 1,   //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};

const question_1 = await inquirer.prompt([
    {
        name:'from',
        message: 'Enter From Currency!',
        type: 'list',
        choices: ['USD','EUR','GBP','INR','PKR'],
    },
    {
        name:'To',
        message: 'Enter To Currency!',
        type: 'list',
        choices: ['USD','EUR','GBP','INR','PKR'],

    },
    {
        name: 'amount',
        type: 'number',
        message: 'Enter your amount.',
    }

]);

let fromAmount = currencyRates[question_1.from];// USD TO  
let toAmount = currencyRates[question_1.To];  // PKR        
let amount = question_1.amount;               //AMOUNT 1000   
let baseAmount = amount / fromAmount;         //1000 / 1 = 1000   
let convertedAmount = Math.floor(baseAmount * toAmount);  // 1000 * 280 = 280000,  74.57=280=25000000
console.log(convertedAmount);                 // FINAL RESULT = 280000;





