
export enum RewardType {
    CRYPTO = 0,
    SKIN,
    CHEST
}

export class Reward {
    name: string;
    thumbnail: string;
    sellingPrice: number; // how much it goes in the market?
    shopValuation: number;
    type: string;


    constructor(name: string, sellingPrice: number, thumbnailPath: string = "", rewardType: string = '') {
        this.name = name;
        this.sellingPrice = sellingPrice;
        this.thumbnail = thumbnailPath;
        this.type = rewardType;
    }

    displayProfit = function() {
        return this.shopValuation - 5;
    }
}