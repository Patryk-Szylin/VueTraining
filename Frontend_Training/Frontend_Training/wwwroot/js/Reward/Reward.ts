export class Reward {
    name: string;
    image: string;
    sellingPrice: number; // how much it goes in the market?
    shopValuation: number;


    displayProfit = function() {
        return this.shopValuation - 5;
    }
}