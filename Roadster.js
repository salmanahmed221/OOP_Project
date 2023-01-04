import { Mercedes } from "./Mercedes.js";
export class Roadster extends Mercedes {
    FuelTypePetrol;
    EmissionStandardBS6;
    constructor(color, height, weight, length, wheels, make, model, FuelTypePetrol, EmissionStandardBS6) {
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
const mercedesroadster = new Roadster("black", 12, 120, 5, 4, "Mercedes", 2014, true, true);
mercedesroadster.powerMercedes();
