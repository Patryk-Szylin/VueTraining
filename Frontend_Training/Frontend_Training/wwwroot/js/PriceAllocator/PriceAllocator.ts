export class PriceAllocator {
    noRecipients: number;
    recipientLabel: string;
    proportion: number;

    constructor(label, noRecipients, proportion) {
        this.noRecipients = noRecipients;
        this.proportion = proportion;
        this.recipientLabel = label;
    }

    getPriceForRecipients = function (totalPrizePool) {
        return (totalPrizePool / this.noRecipients) * this.proportion;
    }

}

