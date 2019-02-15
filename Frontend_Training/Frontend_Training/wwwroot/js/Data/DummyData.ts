import { Customer } from "../Customer/Customer";
import { Entry } from "../Entry/Entry";

let entry = new Entry("17th", 0, new Array<Customer>());

export class DummyData {
    entries: { [key: number]: Entry; } = {};

    constructor() {
        this.entries[0] = entry;
    }
}

for (var i = 0; i < 256; i++) {
    var newPlayer = new Customer("Customer " + i * 2, 5);
    entry.addPlayerToBracket(newPlayer);
}


var stands = {
    "1st": 12540 * 0.4,
    "2nd": 0,
    "Semi Finals": 0,
    "Quarter Finals": 0,
    "RO 16": 0,
    "RO 32": 0
}