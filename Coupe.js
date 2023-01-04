import { Mercedes } from "./Mercedes.js";
export class Coupe extends Mercedes {
    TorqueVectoringBrake;
    ECOStartStopSystem;
    constructor(color, height, weight, length, wheels, make, model, TorqueVectoringBrake, ECOStartStopSystem) {
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
