import Vue from 'vue';

import { DummyData } from "./Data/DummyData";
import { Customer } from "./Customer/Customer";
let dummyData = new DummyData();

var app = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue",
        entriesData: dummyData.entries,
        totalPrizePool: dummyData.entries[0].totalPrizePool
    },
    methods: {
        addToPlayers: function (event) {
            var newCustomer = new Customer("Patrick", 5);
            this.entriesData[0].addPlayerToBracket(newCustomer);
        }
    }
})