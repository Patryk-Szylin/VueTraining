import Vue from 'vue';
import { DummyData } from "./Data/DummyData";
import { Customer } from "./Customer/Customer";
import { RandomGenerator } from "../js/Helpers/RandomGenerator";
let dummyData = new DummyData();


var app = new Vue({
    el: '#app',
    data: {
        entriesData: dummyData.entries,
        totalPrizePool: dummyData.entries[0].totalPrizePool
    },
    methods: {
        addToPlayers: function (event) {
            for (var i = 0; i < 5; i++) {
                var newCustomer = new Customer(RandomGenerator.getRandomName(), 5);
                this.entriesData[0].addPlayerToBracket(newCustomer);
            }
            
        }
    }
})


function timer() {
    let hr: any = localStorage.getItem('hr');
    let mm: any = localStorage.getItem('mm');
    let ss: any = localStorage.getItem('ss');
    if (!hr || !mm || !ss) {
        hr = "23";
        mm = "59";
        ss = "59";
        localStorage.setItem('hr', hr);
        localStorage.setItem('mm', mm);
        localStorage.setItem('ss', ss);
    }

    var interval = setInterval(function () {

        var zero = 0;

        if (hr == 0 && mm == 0 && ss == 0)
            clearInterval(interval);
        ss--;
        if (ss == zero.toString()) {
            ss = 59;
            mm--;
            if (mm == zero.toString()) {
                mm = 59;
                hr--;
            }
        }

        if (hr.toString().length < 2) hr = "0" + hr;
        if (mm.toString().length < 2) mm = "0" + mm;
        if (ss.toString().length < 2) ss = "0" + ss;
        $("#contador").html(hr + ":" + mm  + ":" + ss);

        localStorage.setItem('hr', hr);
        localStorage.setItem('mm', mm);
        localStorage.setItem('ss', ss);

    }, 1000)
}

window.onload = timer;