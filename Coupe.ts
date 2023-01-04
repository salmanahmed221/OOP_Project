import { Mercedes } from "./Mercedes.js";

export class Coupe extends Mercedes {
  TorqueVectoringBrake: boolean;
  ECOStartStopSystem: boolean;

  constructor(
    color: string,
    height: number,
    weight: number,
    length: number,
    wheels: number,
    make: string,
    model: number,
    TorqueVectoringBrake: boolean,
    ECOStartStopSystem: boolean
  ) {
    super(color, height, weight, length, wheels, make, model);
    this.TorqueVectoringBrake = TorqueVectoringBrake;
    this.ECOStartStopSystem = ECOStartStopSystem;
  }

  powerCoupe() {
    console.log("The power of mercedes coupe is great");
  }

  speedCoupe() {
    console.log("The speed of mercedes coupe is great");
  }
}
