import Vue from 'vue';
import { DummyData } from "./Data/DummyData";
import { Customer } from "./Customer/Customer";
import { RandomGenerator } from "../js/Helpers/RandomGenerator";
var dummyData = new DummyData();
var app = new Vue({
    el: '#app',
    data: {
        entriesData: dummyData.entries,
        totalPrizePool: dummyData.entries[0].totalPrizePool
    },
    methods: {
        addToPlayers: function (event) {
            var newCustomer = new Customer(RandomGenerator.getRandomName(), 5);
            this.entriesData[0].addPlayerToBracket(newCustomer);
        }
    }
});
//# sourceMappingURL=main.js.map