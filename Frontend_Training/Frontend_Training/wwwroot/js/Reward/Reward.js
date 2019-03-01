var Reward = (function () {
    function Reward(name, sellingPrice, thumbnailPath) {
        if (thumbnailPath === void 0) { thumbnailPath = ""; }
        this.displayProfit = function () {
            return this.shopValuation - 5;
        };
        this.name = name;
        this.sellingPrice = sellingPrice;
        this.thumbnail = thumbnailPath;
    }
    return Reward;
}());
export { Reward };
//# sourceMappingURL=Reward.js.map