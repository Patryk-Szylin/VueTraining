import Vue from 'vue';
import { DummyData } from "./Data/DummyData";
import { Customer } from "./Customer/Customer";
import { Clock } from "./Clock/Clock";
import { DummyPrizeData } from "./Data/DummyPrizesData";
import { RandomGenerator } from "../js/Helpers/RandomGenerator";


import * as moment from 'moment';

let clock = new Clock();
let dummyData = new DummyData();


var app = new Vue({
    el: '#app',
    data: {
        entriesData: dummyData.entries,
        //totalPrizePool: dummyData.entries[0].totalPrizePool,
        totalPrizePool: 75000000,
        dummyRewards: DummyData.GetDummyRewards(),
        prizeMockData: DummyPrizeData.getMockData(),
        paf: './images/instagram-new-filled.png'
    },
    methods: {
        addToPlayers: function (event) {
            for (var i = 0; i < 100; i++) {
                var newCustomer = new Customer(RandomGenerator.getRandomName(), 70);
                this.entriesData[0].addPlayerToBracket(newCustomer);
            }
            $(".prize-label").fadeOut(500).fadeIn(500);
        },
        displayReward: function (event) {
            let rewardElement = $(event.target).closest(".standing-element");
            let rewardPopup = $(rewardElement).find(".reward-popup");
            let isPopupOpen: boolean = rewardPopup.hasClass("open");
            let allOpenedPopups: any = $(".reward-popup");
            isPopupOpen = !isPopupOpen;


            console.log("dkoasodk");
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
    $(this).closest(".reward-instance").on("mouseleave", () => {
        $(".reward-description").hide();
    })
})

$("#openModal").on("click", function () {
    $("#myModal").css("display", "block");
    $(".modal-fade").css("display", "block");
    $(".tabContent").css("display", "none");
    $("#tab-investors").css("display", "block");
})

$("#question").on("mouseenter", function () {
    $(".info-pop-up").css("display", "block");
});

$("#question").on("mouseleave", function () {
    console.log("jdsajdi");
    $(".info-pop-up").css("display", "none");
});


$(".modal-button").on("click", function () {
    var value = $(this).data("val");

    $(".tabContent").css("display", "none");
    $(".modal-button").removeClass("selected");
    $(this).addClass("selected");
    $(`#${value}`).css("display", "block");
});

$("#modal-close").on("click", function () {
    $("#myModal").css("display", "none");
    $(".modal-fade").css("display", "none");
})

// Countdown
//https://stackoverflow.com/questions/16129157/countdown-timer-using-moment-js








setInterval(function () {
    //const end = moment().endOf('day');
    //const timeLeft = moment(end.diff(moment()));
    //const formatted = timeLeft.format('HH:mm:ss');
    //$(".clock-hours").text(countdown.HOURS);
    //$(".clock-minutes").text(countdown.MINUTES);
    //$(".clock-seconds").text(countdown.SECONDS);

    clock.countdown(new Date(2019, 2, 8, 18, 0, 0));


    //console.log(countdown.SECONDS);


}, 1000);




function updateTime() {


    //document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dd") + "'");
    //document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("k") + "'");
    //document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
    //document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
    //requestAnimationFrame(updateTime);

}



$(window).on('load', () => {
    //requestAnimationFrame(updateTime);
    //updateTime();
    //DummyData.AddPlayersEveryTwoSeconds();
})