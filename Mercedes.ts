import { Vehicle } from "./Vehicle.js";

export class Mercedes extends Vehicle {
  wheels: number;
  make: string;
  model: number;

  constructor(
    color: string,
    height: number,
    weight: number,
    length: number,
    wheels: number,
    make: string,
    model: number
  ) {
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
