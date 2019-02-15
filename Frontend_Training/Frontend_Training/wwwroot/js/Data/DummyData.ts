﻿import { Customer } from "../Customer/Customer";
import { Entry } from "../Entry/Entry";
import { PriceAllocator } from "../PriceAllocator/PriceAllocator";


let entry = new Entry("17th", 0, new Array<Customer>());


export class DummyData {
    entries: { [key: number]: Entry; } = {};

    constructor() {
        this.entries[0] = entry;
    }
}

for (var i = 0; i < 16; i++) {
    var newPlayer = new Customer("Customer " + i * 2, 5);
    entry.addPlayerToBracket(newPlayer);
}


