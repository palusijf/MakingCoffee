const input = require('sync-input')
let coffeeCup = 0;

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
    let water = 200 * coffeeCup;
    let milk = 50 * coffeeCup;
    let coffeeBean = 15 * coffeeCup;

    console.log(`For ${coffeeCup} cups of coffee you will need:
${water} ml of water
${milk} ml of milk
${coffeeBean} g of coffee beans`)
}

greeting();
numberOfCoffee();
ingredientNeeded(coffeeCup);
