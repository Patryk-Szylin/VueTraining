export class Reward {
    name: string;
    thumbnail: string;
    sellingPrice: number; // how much it goes in the market?
    shopValuation: number;


    constructor(name: string, sellingPrice: number, thumbnailPath: string = "") {
        this.name = name;
        this.sellingPrice = sellingPrice;
        this.thumbnail = thumbnailPath;
    }

    displayProfit = function() {
        return this.shopValuation - 5;
    }
}