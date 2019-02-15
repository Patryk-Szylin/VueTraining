import { Customer } from "../Customer/Customer";

export class Entry {
    date: string;
    players: Array<Customer>;
    standings: any;
    // Needs to be a dictionary
    // key = item name
    // value = image, selling price, valuation in the shop
    rewards: Array<string>;
    totalPrizePool: string;
    bracketSize: number = 2;

    constructor(date: string,
        totalPrizePool: number,
        players?: Array<Customer>,
        standings?: any,
        rewards?: Array<string>) {
        this.date = date;
        this.players = players;
        this.rewards = rewards;
        this.totalPrizePool = `£ ${totalPrizePool}`;
    }

    displayStandingText = function () {
        var mapp = [];

        Object.keys(this.standings).map(key => {
            mapp.push({ label: key, price: this.standings[key] })
        })
    }

    addPlayerToBracket = function (player: Customer) {
        this.players.push(player);
        this.generateBracketSize();
        this.generatePrizePool();
    }

    generatePrizePool = function () {
        this.totalPrizePool = 0;
        this.players.forEach(player => {
            this.totalPrizePool += player.entryFee;            
        })

        this.totalPrizePool = `£ ${this.totalPrizePool}`;
    }

    calculateStandingPrices = function () {

    }

    generateBracketSize = function () {
        if (this.bracketSize < this.players.length) {
            this.bracketSize = this.bracketSize * 2;
            this.generateBracketSize();
        }
    }

}