import { Mercedes } from "./Mercedes.js";
export class Suv extends Mercedes {
    alloyWheel;
    powerSteering;
    constructor(color, height, weight, length, wheels, make, model, alloyWheel, powerSteering) {
        super(color, height, weight, length, wheels, make, model);
        this.alloyWheel = alloyWheel;
        this.powerSteering = powerSteering;
    }
    powerSuv() {
        console.log("The Power of mercedes suv is great");
    }
    speedSuv() {
        console.log("The speed of mercedes suv is great");
    }
}
