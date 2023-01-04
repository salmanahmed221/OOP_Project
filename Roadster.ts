import { Mercedes } from "./Mercedes.js";

export class Roadster extends Mercedes {
  FuelTypePetrol: boolean;
  EmissionStandardBS6: boolean;

  constructor(
    color: string,
    height: number,
    weight: number,
    length: number,
    wheels: number,
    make: string,
    model: number,
    FuelTypePetrol: boolean,
    EmissionStandardBS6: boolean
  ) {
    super(color, height, weight, length, wheels, make, model);
    this.FuelTypePetrol = FuelTypePetrol;
    this.EmissionStandardBS6 = EmissionStandardBS6;
  }

  powerRoadster() {
    console.log("The power of mercedes roadster is great");
  }

  speedRoadster() {
    console.log("The speed of mercedes roadster is great");
  }
}
