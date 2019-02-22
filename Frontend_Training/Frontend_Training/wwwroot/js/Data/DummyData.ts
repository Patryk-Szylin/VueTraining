import { Customer } from "../Customer/Customer";
import { Entry } from "../Entry/Entry";
import { PriceAllocator } from "../PriceAllocator/PriceAllocator";
import { RandomGenerator } from "../Helpers/RandomGenerator";
import { Reward } from "../Reward/Reward";

// Objects
let entry = new Entry("17th", 0, new Array<Customer>());
let rewards: Array<Reward> = new Array<Reward>();

// Vars
var numberOfDummyRewards = 8;

var dummyRewards = [
    {
        name: "Blood Moon Mask",
        price: 1300
    },
    {
        name: "Frozen Prince",
        price: 2540
    },
    {
        name: "Winter Wonder",
        price: 1200
    },
    {
        name: "Snow Man",
        price: 500
    },
    {
        name: "Ice King",
        price: 3000
    },
    {
        name: "Ice Queen",
        price: 3000
    },
    {
        name: "Hextech Queen",
        price: 3250
    },
    {
        name: "Hextech King",
        price: 3250
    },
]


export class DummyData {
    entries: { [key: number]: Entry; } = {};

    constructor() {
        this.entries[0] = entry;
    }

    public static GetDummyRewards() {
        for (var i = 0; i < dummyRewards.length; i++) {
            console.log("kapp");

            if (dummyRewards.length > 0) {
                var newReward = new Reward(dummyRewards[i].name, dummyRewards[i].price);
                rewards.push(newReward);
            }            
        }

        return rewards;
    }
}

for (var i = 0; i < 4; i++) {
    var newPlayer = new Customer(RandomGenerator.getRandomName(), 5);
    entry.addPlayerToBracket(newPlayer);
}







