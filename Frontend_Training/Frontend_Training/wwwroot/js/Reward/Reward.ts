export class Reward {
    name: string;
    image: string;
    sellingPrice: number; // how much it goes in the market?
    shopValuation: number;


    constructor(name: string, sellingPrice: number) {
        this.name = name;
        this.sellingPrice = sellingPrice;
    }

    displayProfit = function() {
        return this.shopValuation - 5;
    }
}