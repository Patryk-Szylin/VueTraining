export var RewardType;
(function (RewardType) {
    RewardType[RewardType["CRYPTO"] = 0] = "CRYPTO";
    RewardType[RewardType["SKIN"] = 1] = "SKIN";
    RewardType[RewardType["CHEST"] = 2] = "CHEST";
})(RewardType || (RewardType = {}));
var Reward = (function () {
    function Reward(name, sellingPrice, thumbnailPath, rewardType) {
        if (thumbnailPath === void 0) { thumbnailPath = ""; }
        if (rewardType === void 0) { rewardType = ''; }
        this.displayProfit = function () {
            return this.shopValuation - 5;
        };
        this.name = name;
        this.sellingPrice = sellingPrice;
        this.thumbnail = thumbnailPath;
        this.type = rewardType;
    }
    return Reward;
}());
export { Reward };
//# sourceMappingURL=Reward.js.map