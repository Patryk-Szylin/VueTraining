import { Customer } from "../Customer/Customer";
import { PriceAllocator } from "../PriceAllocator/PriceAllocator";
import { Reward } from "../Reward/Reward";

export class Entry {
    date: string;
    players: Array<Customer>;
    standings: Array<PriceAllocator>;
    // Needs to be a dictionary
    // key = item name
    // value = image, selling price, valuation in the shop
    rewards: Array<string>;
    totalPrizePool: number;
    bracketSize: number = 2;

    constructor(date: string, totalPrizePool: number, players?: Array<Customer>, rewards?: Array<string>) {
        this.date = date;
        this.players = players;
        this.rewards = rewards;
        this.standings = new Array<PriceAllocator>();
        this.totalPrizePool = totalPrizePool;
    }

    addPlayerToBracket = function (player: Customer) {
        this.players.push(player);
        this.generateBracketSize();
        this.generatePrizePool();
        this.updateStandings();
    }

    generatePrizePool = function () {
        this.totalPrizePool = 0;
        this.players.forEach(player => {
            this.totalPrizePool += player.entryFee;
        })
    }

    updateStandings = function () {
        this.getStandingPrices();

    }

    generateBracketSize = function () {
        if (this.bracketSize < this.players.length) {
            this.bracketSize = this.bracketSize * 2;
            this.generateBracketSize();
        }
    }

    getStandingPrices = function () {
        this.generateStandings(this.standings);
    }

    generateStandings = function (standings) {
        let labels: { [key: number]: string } = {};
        labels[0] = "1st";
        labels[1] = "2nd";
        labels[2] = "Semis"; // 2 = rewarded amount of ppl
        labels[4] = "Quarter";
        labels[8] = "RO 16";
        labels[16] = "RO 32";
        labels[32] = "RO 64";
        labels[64] = "RO 128";
        labels[128] = "RO 256";
        labels[256] = "RO 512";

        // Create a function that assigns proportions based on players

        let proportion: { [key: number]: any } = {};
        proportion[0] = 0.4;
        proportion[1] = 0.3;
        proportion[2] = 0.2;
        proportion[4] = 0.1;
        proportion[8] = new Reward("Armor", 40);
        proportion[16] = new Reward("Armor", 35);
        proportion[32] = new Reward("Armor", 20);
        proportion[64] = new Reward("Armor", 25);
        proportion[128] = new Reward("Armor", 15);
        proportion[256] = new Reward("Armor", 10);

        // Use this to check for anything that has value 0
        // If it does, assign a reward object to it
        Object.keys(proportion).map((key, index) => {
            if (proportion[key] == 0) {
                //proportion[key] = ;
            }
        })


        var recipientsForEachBracket = this.bracketSize / 2;

        if (recipientsForEachBracket == 1) {
            var labelExistance = standings.find(label => label.recipientLabel == labels[recipientsForEachBracket]);

            if (labelExistance)
                return;

            var first = new PriceAllocator("1st", 1, proportion[0]);
            var second = new PriceAllocator("2nd", 1, proportion[1]);

            standings.push(first);
            standings.push(second);
            // If bracket label exists then don't add anymore


        } else {
            var labelExistance = standings.find(label => label.recipientLabel == labels[recipientsForEachBracket]);

            // If bracket label exists then don't add anymore
            if (labelExistance)
                return;

            var newRecipient = new PriceAllocator(labels[recipientsForEachBracket], recipientsForEachBracket, proportion[recipientsForEachBracket]);

            standings.push(newRecipient);
        }

        
        
    }
}