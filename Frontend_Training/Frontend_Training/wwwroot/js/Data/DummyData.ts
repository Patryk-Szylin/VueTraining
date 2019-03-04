import { Customer } from "../Customer/Customer";
import { Entry } from "../Entry/Entry";
import { PriceAllocator } from "../PriceAllocator/PriceAllocator";
import { RandomGenerator } from "../Helpers/RandomGenerator";
import { Reward } from "../Reward/Reward";
import { setTimeout } from "timers";
import { RewardType } from "../Reward/Reward";

// Objects
let entry = new Entry("17 March, 2019 at 18:00", 0, new Array<Customer>());
let rewards: Array<Reward> = new Array<Reward>();

// Vars
var numberOfDummyRewards = 8;

var dummyRewards = [
    {
        name: "Virtwist Entertainment Coin",
        price: 5.99,
        thumbnail: "./images/Virtwist_Coin_WithTitle.png",
        rewardType: 'crypto'

    },
    {
        name: "Frozen Prince",
        price: 25,
        thumbnail: "./images/Amumu_InfernalSkin.jpg",
        rewardType: 'skin'
    },
    {
        name: "Winter Wonder",
        price: 5,
        thumbnail: "./images/Brand_ApocalypticSkin.jpg",
        rewardType: 'skin'
    },
    {
        name: "Snow Man",
        price: 5,
        thumbnail: "./images/1.png",
        rewardType: 'skin'
    },
    {
        name: "Ice King",
        price: 40,
        thumbnail: "./images/Anivia_FestivalQueenSkin.jpg",
        rewardType: 'skin'
    },
    {
        name: "Ice Queen",
        price: 30,
        thumbnail: "./images/champion-mastery-panel-2.png",
        rewardType: 'chest'
    },
    {
        name: "Hextech Queen",
        price: 10,
        thumbnail: "./images/Hextech_Crafting_Masterwork_Chest.png",
        rewardType: 'chest'
    },
    {
        name: "Hextech King",
        price: 10,
        thumbnail: "./images/ashe_hearthseeker.jpg",
        rewardType: 'skin'
    },
]


export class DummyData {
    entries: { [key: number]: Entry; } = {};

    constructor() {
        this.entries[0] = entry;
        for (var i = 0; i < 20; i++) {
            var player = new Customer(RandomGenerator.getRandomName(), 70);
            this.entries[0].addPlayerToBracket(player);
        }
        
    }

    public static GetDummyRewards() {
        for (var i = 0; i < dummyRewards.length; i++) {

            if (dummyRewards.length > 0) {
                var newReward = new Reward(dummyRewards[i].name, dummyRewards[i].price, dummyRewards[i].thumbnail, dummyRewards[i].rewardType);

                rewards.push(newReward);
            }            
        }

        return rewards;
    }

    public static AddPlayersEveryTwoSeconds() {
        var interval = setInterval(function () {
            var randomNumberOfPlayers = Math.floor((Math.random() * 150) + 1);
            
            for (var i = 0; i < randomNumberOfPlayers; i++) {
                var newPlayer = new Customer(RandomGenerator.getRandomName(), 70);
                entry.addPlayerToBracket(newPlayer);
            }

        }, 3000)
    }
}












