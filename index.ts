import {Tiger} from "./AbstractClass/Animals/Tiger";
import {Chicken} from "./AbstractClass/Animals/Chicken"
import {Apple} from "./AbstractClass/Fruits/Apple";
import {Orange} from "./AbstractClass/Fruits/Orange";

console.log('-------Animals----------')
let animals = []

animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((item, index) => {
    console.log(item.makeSound());
    if (item instanceof Chicken){
        console.log(item.howToEat())
    }
})

console.log('---Fruits----')
let fuits = []

fuits[0]= new Apple();
fuits[1]= new Orange();

fuits.forEach(item =>{
    console.log(item.howToEat())
})