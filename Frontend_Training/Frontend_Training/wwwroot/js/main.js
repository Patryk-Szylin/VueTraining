import Vue from 'vue';
import { DummyData } from "./Data/DummyData";
import { Customer } from "./Customer/Customer";
import { Clock } from "./Clock/Clock";
import { DummyPrizeData } from "./Data/DummyPrizesData";
import { RandomGenerator } from "../js/Helpers/RandomGenerator";
var clock = new Clock();
var dummyData = new DummyData();
var app = new Vue({
    el: '#app',
    data: {
        entriesData: dummyData.entries,
        totalPrizePool: 53055000,
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
            var rewardElement = $(event.target).closest(".standing-element");
            var rewardPopup = $(rewardElement).find(".reward-popup");
            var isPopupOpen = rewardPopup.hasClass("open");
            var allOpenedPopups = $(".reward-popup");
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
            var availableRewardsContainer = $(event.target).closest(".available-rewards-container");
            var availableRewardsPopup = availableRewardsContainer.find(".available-rewards-popup");
            var isPopupOpen = availableRewardsPopup.hasClass("open");
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
});
$("img").on("mouseenter", function () {
    var _this = this;
    $(this).closest(".reward-instance").find(".reward-description").fadeIn(400, function () {
        $(_this).find(".reward-description").show();
    });
});
$("img").on("mouseleave", function () {
    $(this).closest(".reward-instance").on("mouseleave", function () {
        $(".reward-description").hide();
    });
});
$("#openModal").on("click", function () {
    $("#myModal").css("display", "block");
    $(".modal-fade").css("display", "block");
    $(".tabContent").css("display", "none");
    $("#tab-investors").css("display", "block");
});
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
    $("#" + value).css("display", "block");
});
$("#modal-close").on("click", function () {
    $("#myModal").css("display", "none");
    $(".modal-fade").css("display", "none");
});
setInterval(function () {
    clock.countdown(new Date(2019, 2, 8, 18, 0, 0));
}, 1000);
function updateTime() {
}
$(window).on('load', function () {
});
//# sourceMappingURL=main.js.map