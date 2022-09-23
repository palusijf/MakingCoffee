const input = require('sync-input')
let coffeeCup = 0;
let waterNeed = 0;
let milkNeed = 0;
let coffeeBeansNeed = 0;
let water = 0;
let milk = 0;
let coffeeBeans = 0;
let waterPerCup = 200;
let milkPerCup = 50;
let coffeeBeansPerCup = 15;
let waterCup = 0;
let milkCup = 0;
let coffeeBeansCup = 0;

function greeting() {
    console.log(`Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!`);
}

function numberOfCoffee() {
    coffeeCup = input("Write how many cups of coffee you will need: ");
}

function ingredientNeeded(coffeeCup) {
    waterNeed = waterPerCup * coffeeCup;
    milkNeed = milkPerCup * coffeeCup;
    coffeeBeansNeed = coffeeBeansPerCup * coffeeCup;

    console.log(`For ${coffeeCup} cups of coffee you will need:
${waterNeed} ml of water
${milkNeed} ml of milk
${coffeeBeansNeed} g of coffee beans`)
}

function request() {
    water = input("Write how many ml of water the coffee machine has: ");
    milk = input("Write how many ml of milk the coffee machine has: ");
    coffeeBeans = input("Write how many grams of coffee beans the coffee machine has: ");
}

function howMany(coffeeCup) {
    waterCup = Math.floor(water / waterPerCup);
    milkCup = Math.floor(milk / milkPerCup);
    coffeeBeansCup = Math.floor(coffeeBeans / coffeeBeansPerCup);
    let array = [waterCup, milkCup, coffeeBeansCup];
    array.sort((a, b) => a - b);
    let numberOfCupPossible = array[0];
    let numberOfCupRest = numberOfCupPossible - coffeeCup;
    if (numberOfCupRest < 0) {
        console.log(`No, I can make only ${numberOfCupPossible} cups of coffee`);
    } else if (numberOfCupRest === 0) {
        console.log("Yes, I can make that amount of coffee");
    } else {
        console.log(`Yes, I can make that amount of coffee (and even ${numberOfCupRest} more than that)`);
    }
}

//greeting();
request();
numberOfCoffee();
//ingredientNeeded(coffeeCup);
howMany(coffeeCup);
