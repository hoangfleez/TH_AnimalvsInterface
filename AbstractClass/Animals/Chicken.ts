import {Animal} from "../Animal";
import {Edible} from "../../InterfaceClass/Edible";

export class Chicken extends Animal {
    makeSound(): string{
        return"Chicken: ò ó o ò ò ò ò";
    }

    howToEat(): string{
        return "Cloud be fried";
    }
}
