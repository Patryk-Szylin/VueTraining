import { Customer } from "../Customer/Customer";
import { PriceAllocator } from "../PriceAllocator/PriceAllocator";
import { Reward } from "../Reward/Reward";
import { RewardsFromThreshold } from "../Data/RewardsData";

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
        this.generateStandings(this.standings);
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
        labels[512] = "RO 1024";
        labels[1024] = "RO 2048";
        labels[2048] = "RO 4096";
        labels[4096] = "RO 8192";
        labels[8192] = "RO 16384";
        labels[16384] = "RO 32768";
        labels[32768] = "RO 65536";
        labels[65536] = "RO 131072";

        var recipientsForEachBracket = this.bracketSize / 2;

        if (recipientsForEachBracket == 1) {
            var labelExistance = standings.find(label => label.recipientLabel == labels[recipientsForEachBracket]);

            if (labelExistance)
                return;

            //var first = new PriceAllocator("1st", 1, proportion[0]);
            //var second = new PriceAllocator("2nd", 1, proportion[1]);
            var first = new PriceAllocator("1st", 1, RewardsFromThreshold.GetRewards(this.bracketSize)[0]);
            var second = new PriceAllocator("2nd", 1, RewardsFromThreshold.GetRewards(this.bracketSize)[1]);


            standings.push(first);
            standings.push(second);
            // If bracket label exists then don't add anymore


        } else {
            var labelExistance = standings.find(label => label.recipientLabel == labels[recipientsForEachBracket]);

            // If bracket label exists then don't add anymore
            if (labelExistance)
                return;

            var newRecipient = new PriceAllocator(labels[recipientsForEachBracket], recipientsForEachBracket, RewardsFromThreshold.GetRewards(this.bracketSize)[recipientsForEachBracket]);

            standings.push(newRecipient);
        }

        
        
    }
}