import { Mercedes } from "./Mercedes.js";
export class Core extends Mercedes {
    adjustableSuspension;
    heatedMassagingFrontSeats;
    constructor(color, height, weight, length, wheels, make, model, adjustableSuspension, heatedMassagingFrontSeats) {
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
