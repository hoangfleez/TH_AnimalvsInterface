"use strict";
exports.__esModule = true;
var Tiger_1 = require("./AbstractClass/Animals/Tiger");
var Chicken_1 = require("./AbstractClass/Animals/Chicken");
var Apple_1 = require("./AbstractClass/Fruits/Apple");
var Orange_1 = require("./AbstractClass/Fruits/Orange");
console.log('-------Animals----------');
var animals = [];
animals[0] = new Tiger_1.Tiger();
animals[1] = new Chicken_1.Chicken();
animals.forEach(function (item, index) {
    console.log(item.makeSound());
    if (item instanceof Chicken_1.Chicken) {
        console.log(item.howToEat());
    }
});
console.log('---Fruits----');
var fuits = [];
fuits[0] = new Apple_1.Apple();
fuits[1] = new Orange_1.Orange();
fuits.forEach(function (item) {
    console.log(item.howToEat());
});
