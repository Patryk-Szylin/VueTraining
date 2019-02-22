import { Customer } from "../Customer/Customer";
import { Entry } from "../Entry/Entry";
import { RandomGenerator } from "../Helpers/RandomGenerator";
import { Reward } from "../Reward/Reward";
var entry = new Entry("17th", 0, new Array());
var rewards = new Array();
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
];
var DummyData = (function () {
    function DummyData() {
        this.entries = {};
        this.entries[0] = entry;
    }
    DummyData.GetDummyRewards = function () {
        for (var i = 0; i < dummyRewards.length; i++) {
            console.log("kapp");
            if (dummyRewards.length > 0) {
                var newReward = new Reward(dummyRewards[i].name, dummyRewards[i].price);
                rewards.push(newReward);
            }
        }
        return rewards;
    };
    DummyData.AddPlayersEveryTwoSeconds = function () {
        var interval = setInterval(function () {
            var randomNumberOfPlayers = Math.floor((Math.random() * 100) + 1);
            for (var i = 0; i < randomNumberOfPlayers; i++) {
                var newPlayer = new Customer(RandomGenerator.getRandomName(), 5);
                entry.addPlayerToBracket(newPlayer);
            }
        }, 5000);
    };
    return DummyData;
}());
export { DummyData };
//# sourceMappingURL=DummyData.js.map