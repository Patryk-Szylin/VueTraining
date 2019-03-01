import Vue from 'vue';
import { DummyData } from "./Data/DummyData";
import { Customer } from "./Customer/Customer";
import { RandomGenerator } from "../js/Helpers/RandomGenerator";
import * as moment from 'moment';
require('moment-countdown');

let dummyData = new DummyData();

var app = new Vue({
    el: '#app',
    data: {
        entriesData: dummyData.entries,
        totalPrizePool: dummyData.entries[0].totalPrizePool,
        dummyRewards: DummyData.GetDummyRewards(),
        paf: './images/instagram-new-filled.png'
    },
    methods: {
        addToPlayers: function (event) {
            for (var i = 0; i < 5; i++) {
                var newCustomer = new Customer(RandomGenerator.getRandomName(), 5);
                this.entriesData[0].addPlayerToBracket(newCustomer);
            }            
        },
        displayReward: function (event) {
            let rewardElement = $(event.target).closest(".standing-element");
            let rewardPopup = $(rewardElement).find(".reward-popup");
            let isPopupOpen: boolean = rewardPopup.hasClass("open");
            let allOpenedPopups: any = $(".reward-popup");
            isPopupOpen = !isPopupOpen;

            if (isPopupOpen) {
                rewardElement.find(".reward-popup").css("display", "block");
                rewardPopup.addClass("open");
            }
            else {
                rewardElement.find(".reward-popup").css("display", "none");
                rewardPopup.removeClass("open");
            }           
        },
        displayAvailableRewards: function (event) {
            let availableRewardsContainer = $(event.target).closest(".available-rewards-container");
            let availableRewardsPopup = availableRewardsContainer.find(".available-rewards-popup");
            let isPopupOpen: boolean = availableRewardsPopup.hasClass("open");

            console.log("jidsajdi");

            isPopupOpen = !isPopupOpen;

            if (isPopupOpen) {
                availableRewardsPopup.css("display", "block");
                availableRewardsPopup.addClass("open");
            }
            else {
                availableRewardsPopup.css("display", "none");
                availableRewardsPopup.removeClass("open");
            }
        }

    }
})

$("img").on("mouseenter", function () {
    $(this).closest(".reward-instance").find(".reward-description").fadeIn(400, () => {
        $(this).find(".reward-description").show();
    })
})

$("img").on("mouseleave", function () {
    $(this).closest(".reward-instance").on("mouseleave", function () {
        $(".reward-description").hide();
    })
    
})

// Countdown
//https://stackoverflow.com/questions/16129157/countdown-timer-using-moment-js


function updateTime() {
    document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dd") + "'");
    document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("k") + "'");
    document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
    document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
    requestAnimationFrame(updateTime);
}

$(window).on('load', () => {
    requestAnimationFrame(updateTime);
    //DummyData.AddPlayersEveryTwoSeconds();
})