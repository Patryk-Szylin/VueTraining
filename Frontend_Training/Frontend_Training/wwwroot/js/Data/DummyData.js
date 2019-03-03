import { Customer } from "../Customer/Customer";
import { Entry } from "../Entry/Entry";
import { RandomGenerator } from "../Helpers/RandomGenerator";
import { Reward } from "../Reward/Reward";
var entry = new Entry("17 March, 2019", 0, new Array());
var rewards = new Array();
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
];
var DummyData = (function () {
    function DummyData() {
        this.entries = {};
        this.entries[0] = entry;
        for (var i = 0; i < 20; i++) {
            var player = new Customer(RandomGenerator.getRandomName(), 70);
            this.entries[0].addPlayerToBracket(player);
        }
    }
    DummyData.GetDummyRewards = function () {
        for (var i = 0; i < dummyRewards.length; i++) {
            if (dummyRewards.length > 0) {
                var newReward = new Reward(dummyRewards[i].name, dummyRewards[i].price, dummyRewards[i].thumbnail);
                rewards.push(newReward);
            }
        }
        return rewards;
    };
    DummyData.AddPlayersEveryTwoSeconds = function () {
        var interval = setInterval(function () {
            var randomNumberOfPlayers = Math.floor((Math.random() * 150) + 1);
            for (var i = 0; i < randomNumberOfPlayers; i++) {
                var newPlayer = new Customer(RandomGenerator.getRandomName(), 70);
                entry.addPlayerToBracket(newPlayer);
            }
        }, 3000);
    };
    return DummyData;
}());
export { DummyData };
//# sourceMappingURL=DummyData.js.map