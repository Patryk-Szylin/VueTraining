var Reward = (function () {
    function Reward(name, sellingPrice) {
        this.displayProfit = function () {
            return this.shopValuation - 5;
        };
        this.name = name;
        this.sellingPrice = sellingPrice;
    }
    return Reward;
}());
export { Reward };
//# sourceMappingURL=Reward.js.map