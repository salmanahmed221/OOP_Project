import { Vehicle } from "./Vehicle.js";
export class Mercedes extends Vehicle {
    wheels;
    make;
    model;
    constructor(color, height, weight, length, wheels, make, model) {
        super(color, height, weight, length);
        this.wheels = wheels;
        this.make = make;
        this.model = model;
    }
    powerMercedes() {
        console.log("The power of mercedes is great");
    }
    speedMercedes() {
        console.log("The speed of mercedes is great");
    }
}
