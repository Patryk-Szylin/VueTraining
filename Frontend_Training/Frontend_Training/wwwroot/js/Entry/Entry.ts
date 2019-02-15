import { Customer } from "../Customer/Customer";
import { PriceAllocator } from "../PriceAllocator/PriceAllocator";

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

    //calculateStandings = function (standings: Array<PriceAllocator>) {
    //    var mapp = [];
    //    for (var i = 0; i < standings.length; i++) {
    //        var currentStanding = standings[i];
    //        mapp.push({
    //            label: currentStanding.recipientLabel,
    //            recipients: currentStanding.noRecipients,
    //            proportion: currentStanding.proportion
    //        })
    //    }

    //    //this.standings = mapp;
    //}



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

        // 16 players

        // Update Standings here
        let standings: Array<PriceAllocator> = new Array<PriceAllocator>();
        standings.push(new PriceAllocator("1st", 1, 0.4));
        standings.push(new PriceAllocator("2nd", 1, 0.2));
        standings.push(new PriceAllocator("Semis", 2, 0.1));
        standings.push(new PriceAllocator("Quarter", 4, 0.1));
        standings.push(new PriceAllocator("RO 16", 8, 0));
        standings.push(new PriceAllocator("RO 32", 16, 0));

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
        labels[2] = "Semis"; // 2 = rewarded amount of ppl
        labels[4] = "Quarter";
        labels[8] = "RO 16";
        labels[16] = "RO 32";
        labels[32] = "RO 64";
        labels[64] = "RO 128";
        labels[128] = "RO 256";
        labels[256] = "RO 512";

        var recipientsForEachBracket = this.bracketSize / 2;

        // If bracket label exists then don't add anymore
        var labelExistance = standings.find(label => label.recipientLabel == labels[recipientsForEachBracket]);

        if (labelExistance)
            return;

        var newRecipient = new PriceAllocator(labels[recipientsForEachBracket], recipientsForEachBracket, 0.4);

        standings.push(newRecipient);
    }
}