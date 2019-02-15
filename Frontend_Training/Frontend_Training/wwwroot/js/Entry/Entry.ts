import { Customer } from "../Customer/Customer";
import { PriceAllocator } from "../PriceAllocator/PriceAllocator";

export class Entry {
    date: string;
    players: Array<Customer>;
    standings: any;
    // Needs to be a dictionary
    // key = item name
    // value = image, selling price, valuation in the shop
    rewards: Array<string>;
    totalPrizePool: number;
    bracketSize: number = 2;

    constructor(date: string, totalPrizePool: number, players?: Array<Customer>, standings?: any, rewards?: Array<string>) {
        this.date = date;
        this.players = players;
        this.rewards = rewards;
        this.standings = standings;
        this.totalPrizePool = totalPrizePool;
    }

    calculateStandings = function (standings: Array<PriceAllocator>) {
        var mapp = [];
        for (var i = 0; i < standings.length; i++) {
            var currentStanding = standings[i];
            mapp.push({
                label: currentStanding.recipientLabel,
                recipients: currentStanding.noRecipients,
                proportion: currentStanding.proportion
            })
        }

        this.standings = mapp;
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
    }




    generateBracketSize = function () {
        if (this.bracketSize < this.players.length) {
            this.bracketSize = this.bracketSize * 2;
            this.generateBracketSize();
        }


        // 16 players


        // Update Standings here
        let standings: Array<PriceAllocator> = new Array<PriceAllocator>();
        standings.push(new PriceAllocator("1st", 1, 0.4));
        standings.push(new PriceAllocator("2nd", 1, 0.2));
        standings.push(new PriceAllocator("Semis", 2, 0.1));
        standings.push(new PriceAllocator("Quarter", 4, 0.1));
        standings.push(new PriceAllocator("RO 16", 8, 0));
        standings.push(new PriceAllocator("RO 32", 16, 0));

        this.calculateStandings(standings);
    }
}