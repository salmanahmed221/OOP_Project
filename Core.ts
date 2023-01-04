import { Mercedes } from "./Mercedes.js";

export class Core extends Mercedes {
  adjustableSuspension: boolean;
  heatedMassagingFrontSeats: boolean;

  constructor(
    color: string,
    height: number,
    weight: number,
    length: number,
    wheels: number,
    make: string,
    model: number,
    adjustableSuspension: boolean,
    heatedMassagingFrontSeats: boolean
  ) {
    super(color, height, weight, length, wheels, make, model);
    this.adjustableSuspension = adjustableSuspension;
    this.heatedMassagingFrontSeats = heatedMassagingFrontSeats;
  }

  PowerCore() {
    console.log("The power of mercedes core is great");
  }

  speedCore() {
    console.log("The speed of mercedes core is great");
  }
}
