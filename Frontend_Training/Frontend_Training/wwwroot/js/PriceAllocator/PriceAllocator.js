var PriceAllocator = (function () {
    function PriceAllocator(label, noRecipients, proportion) {
        this.getPriceForRecipients = function (totalPrizePool) {
            return (totalPrizePool / this.noRecipients) * this.proportion;
        };
        this.noRecipients = noRecipients;
        this.proportion = proportion;
        this.recipientLabel = label;
    }
    return PriceAllocator;
}());
export { PriceAllocator };
//# sourceMappingURL=PriceAllocator.js.map