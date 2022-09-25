const input = require('sync-input');
// let coffeeCup = 0;
// let waterNeed = 0;
// let milkNeed = 0;
// let coffeeBeansNeed = 0;
let moneyDispo = 550;
let waterDispo = 400;
let milkDispo = 540;
let cupDispo = 9;
let coffeeBeansDispo = 120;
let actionFlag;
// let waterPerCup = 200;
// let milkPerCup = 50;
// let coffeeBeansPerCup = 15;
// let waterCup = 0;
// let milkCup = 0;
// let coffeeBeansCup = 0;

/*function greeting() {
    console.log(`Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!`);
}*/

function remaining() {
    console.log(`The coffee machine has:
${waterDispo} ml of water
${milkDispo} ml of milk
${coffeeBeansDispo} g of coffee beans
${cupDispo} disposable cups
$${moneyDispo} of money
`);
}

/*
function numberOfCoffee() {
    coffeeCup = input("Write how many cups of coffee you will need: ");
}*/
function main() {
    do {
        action();
    } while (actionFlag !== "exit");
}

function action() {
    console.log();
    actionFlag = input("Write action (buy, fill, take, remaining, exit): \n");
    console.log();
    switch (actionFlag) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            takeMoney();
            break;
        case "remaining":
            remaining();
            break;
        case "exit":
            return;
        default:
            console.log("this option doesn't exist!!");
            break;
    }
}

function buy() {
    let buy = (input("What do you want to buy? 1 - espresso, 2 - latte, " +
        "3 - cappuccino, back - to main menu:  \n"));
    if (Number(buy) === 1) {
        espresso();
    } else if (Number(buy) === 2) {
        latte();
    } else if (Number(buy) === 3) {
        cappuccino();
    } else if (buy === "back") {
        main();
    } else {
        console.log("this option doesn't exist!!");
    }
}

function espresso() {
    let supply = resource(250, 0, 16);
    if (supply === 1) {
        waterDispo -= 250;
        coffeeBeansDispo -= 16;
        moneyDispo += 4;
        cupDispo -= 1;
        console.log("I have enough resources, making you a coffee!");
    } else {
        console.log(`Sorry, not enough ${supply}!`);
    }
}

function latte() {
    let supply = resource(350, 75, 20);
    if (supply === 1) {
        waterDispo -= 350;
        milkDispo -= 75;
        coffeeBeansDispo -= 20;
        moneyDispo += 7;
        cupDispo -= 1;
        console.log("I have enough resources, making you a coffee!");
    } else {
        console.log(`Sorry, not enough ${supply}!`);
    }
}

function cappuccino() {
    let supply = resource(200, 100, 12);
    if (supply === 1) {

        waterDispo -= 200;
        milkDispo -= 100;
        coffeeBeansDispo -= 12;
        moneyDispo += 6;
        cupDispo -= 1;
        console.log("I have enough resources, making you a coffee!");
    } else {
        console.log(`Sorry, not enough ${supply}!`);
    }
}

function resource(waterNeed, milkNeed, coffeeBeansNeed) {
    if (waterNeed > waterDispo)
        return "water";
    if (milkNeed > milkDispo)
        return "milk";
    if (coffeeBeansNeed > coffeeBeansDispo)
        return "coffee";
    if (cupDispo === 0)
        return "disposable cups";
    else
        return 1;
}

function fill() {
    let waterAdd = Number(input("Write how many ml of water you want to add: \n"));
    waterDispo += waterAdd;
    let milkAdd = Number(input("Write how many ml of milk you want to add: \n"));
    milkDispo += milkAdd;
    let coffeeBeansAdd = Number(input("Write how many grams of coffee beans you want to add: \n"));
    coffeeBeansDispo += coffeeBeansAdd;
    let cupsAdd = Number(input("Write how many disposable cups you want to add: \n"));
    cupDispo += cupsAdd;
}

function takeMoney() {
    moneyDispo = 0;
    console.log(`I gave you $${moneyDispo}
    `);
}

/*function ingredientNeeded(coffeeCup) {
    waterNeed = waterPerCup * coffeeCup;
    milkNeed = milkPerCup * coffeeCup;
    coffeeBeansNeed = coffeeBeansPerCup * coffeeCup;

    console.log(`For ${coffeeCup} cups of coffee you will need:
${waterNeed} ml of water
${milkNeed} ml of milk
${coffeeBeansNeed} g of coffee beans`);
}*/

/*function request() {
    waterDispo = input("Write how many ml of water the coffee machine has: ");
    milkDispo = input("Write how many ml of milk the coffee machine has: ");
    coffeeBeansDispo = input("Write how many grams of coffee beans the coffee machine has: ");
}*/

/*function howMany(coffeeCup) {
    waterCup = Math.floor(waterDispo / waterPerCup);
    milkCup = Math.floor(milkDispo / milkPerCup);
    coffeeBeansCup = Math.floor(coffeeBeansDispo / coffeeBeansPerCup);
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
}*/

//greeting();
//request();

main();

//numberOfCoffee();
//ingredientNeeded(coffeeCup);
//howMany(coffeeCup);
