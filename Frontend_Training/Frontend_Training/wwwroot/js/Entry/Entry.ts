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
        this.players.unshift(player);
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
        let labels: { [key: number]: any } = {};
        labels[0] = { label: "1st", players: 1 };
        labels[1] = { label: "2nd", players: 1 };
        labels[2] = { label: "Semis", players: 2 }; // 2 = rewarded amount of ppl
        labels[4] = { label: "Quarter", players: 4 };
        labels[8] = { label: "Round-16", players: 8 };
        labels[16] = { label: "Round-32", players: 16 };
        labels[32] = { label: "Round-64", players: 32 };
        labels[64] = { label: "Round-128", players: 64 };
        labels[128] = { label: "Round-256", players: 128 };
        labels[256] = { label: "Round-512", players: 256 };
        labels[512] = { label: "Round-1024", players: 512 };
        labels[1024] = { label: "Round-2048", players: 1024 };
        labels[2048] = { label: "Round-4096", players: 2048 };
        labels[4096] = { label: "Round-8192", players: 4096 };
        labels[8192] = { label: "Round-16384", players: 8192  };
        labels[16384] = { label: "Round-32768", players: 16384};
        labels[32768] = { label: "Round-65536", players: 32768};
        labels[65536] = { label: "Round-131072", players: 65536};

        var recipientsForEachBracket = this.bracketSize / 2;

        if (recipientsForEachBracket == 1) {
            var labelExistance = standings.find(label => label.recipientLabel == labels[recipientsForEachBracket].label);


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
            var labelExistance = standings.find(label => label.recipientLabel == labels[recipientsForEachBracket].label);

            // If bracket label exists then don't add anymore
            if (labelExistance)
                return;

            var newRecipient = new PriceAllocator(labels[recipientsForEachBracket].label, recipientsForEachBracket, RewardsFromThreshold.GetRewards(this.bracketSize)[recipientsForEachBracket]);

            standings.push(newRecipient);
        }

        
        
    }
}