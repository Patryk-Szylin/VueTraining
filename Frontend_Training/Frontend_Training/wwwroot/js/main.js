import Vue from 'vue';
import { DummyData } from "./Data/DummyData";
import { Customer } from "./Customer/Customer";
import { RandomGenerator } from "../js/Helpers/RandomGenerator";
var dummyData = new DummyData();
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
function updateTime() {
}
$(window).on('load', function () {
});
//# sourceMappingURL=main.js.map