import { Customer } from "../Customer/Customer";
import { Entry } from "../Entry/Entry";
import { PriceAllocator } from "../PriceAllocator/PriceAllocator";
import { RandomGenerator } from "../Helpers/RandomGenerator";
import { Reward } from "../Reward/Reward";
import { setTimeout } from "timers";

// Objects
let entry = new Entry("17th March, 2019", 0, new Array<Customer>());
let rewards: Array<Reward> = new Array<Reward>();

// Vars
var numberOfDummyRewards = 8;

var dummyRewards = [
    {
        name: "Blood Moon Mask",
        price: 30,
        thumbnail: "./images/Webp.net-resizeimage.jpg"
    },
    {
        name: "Frozen Prince",
        price: 25,
        thumbnail: "./images/Webp.net-resizeimage.jpg"
    },
    {
        name: "Winter Wonder",
        price: 5,
        thumbnail: "./images/Webp.net-resizeimage.jpg"
    },
    {
        name: "Snow Man",
        price: 5,
        thumbnail: "./images/Webp.net-resizeimage.jpg"
    },
    {
        name: "Ice King",
        price: 40,
        thumbnail: "./images/instagram-new-filled.png"
    },
    {
        name: "Ice Queen",
        price: 30,
        thumbnail: "./images/instagram-new-filled.png"
    },
    {
        name: "Hextech Queen",
        price: 10,
        thumbnail: "./images/instagram-new-filled.png"
    },
    {
        name: "Hextech King",
        price: 10,
        thumbnail: "./images/instagram-new-filled.png"
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
                var newReward = new Reward(dummyRewards[i].name, dummyRewards[i].price, dummyRewards[i].thumbnail);
                rewards.push(newReward);
            }            
        }

        return rewards;
    }

    public static AddPlayersEveryTwoSeconds() {
        var interval = setInterval(function () {

            var randomNumberOfPlayers = Math.floor((Math.random() * 100) + 1);

            for (var i = 0; i < randomNumberOfPlayers; i++) {
                var newPlayer = new Customer(RandomGenerator.getRandomName(), 5);
                entry.addPlayerToBracket(newPlayer);
            }

        }, 5000)
    }
}












