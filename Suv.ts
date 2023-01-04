import { Mercedes } from "./Mercedes.js";

export class Suv extends Mercedes {
  alloyWheel: boolean;
  powerSteering: boolean;

  constructor(
    color: string,
    height: number,
    weight: number,
    length: number,
    wheels: number,
    make: string,
    model: number,
    alloyWheel: boolean,
    powerSteering: boolean
  ) {
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
