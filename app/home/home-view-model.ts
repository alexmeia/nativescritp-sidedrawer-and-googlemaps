import { Observable } from "data/observable";

export class HomeViewModel extends Observable {
    constructor() {
        super();
        this.set("zoom", 17);
        // Default values for testing with emulators.
        this.set("latitude", 43.792174);
        this.set("longitude", 11.271151);
    }
}
