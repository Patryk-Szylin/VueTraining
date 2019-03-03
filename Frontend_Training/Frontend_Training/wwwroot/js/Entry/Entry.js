import { PriceAllocator } from "../PriceAllocator/PriceAllocator";
import { RewardsFromThreshold } from "../Data/RewardsData";
var Entry = (function () {
    function Entry(date, totalPrizePool, players, rewards) {
        this.bracketSize = 2;
        this.addPlayerToBracket = function (player) {
            this.players.unshift(player);
            this.generateBracketSize();
            this.generatePrizePool();
            this.generateStandings(this.standings);
        };
        this.generatePrizePool = function () {
            var _this = this;
            this.totalPrizePool = 0;
            this.players.forEach(function (player) {
                _this.totalPrizePool += player.entryFee;
            });
        };
        this.generateBracketSize = function () {
            if (this.bracketSize < this.players.length) {
                this.bracketSize = this.bracketSize * 2;
                this.generateBracketSize();
            }
        };
        this.generateStandings = function (standings) {
            var labels = {};
            labels[0] = "1st";
            labels[1] = "2nd";
            labels[2] = "Semis";
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
                var labelExistance = standings.find(function (label) { return label.recipientLabel == labels[recipientsForEachBracket]; });
                if (labelExistance)
                    return;
                var first = new PriceAllocator("1st", 1, RewardsFromThreshold.GetRewards(this.bracketSize)[0]);
                var second = new PriceAllocator("2nd", 1, RewardsFromThreshold.GetRewards(this.bracketSize)[1]);
                standings.push(first);
                standings.push(second);
            }
            else {
                var labelExistance = standings.find(function (label) { return label.recipientLabel == labels[recipientsForEachBracket]; });
                if (labelExistance)
                    return;
                var newRecipient = new PriceAllocator(labels[recipientsForEachBracket], recipientsForEachBracket, RewardsFromThreshold.GetRewards(this.bracketSize)[recipientsForEachBracket]);
                standings.push(newRecipient);
            }
        };
        this.date = date;
        this.players = players;
        this.rewards = rewards;
        this.standings = new Array();
        this.totalPrizePool = totalPrizePool;
    }
    return Entry;
}());
export { Entry };
//# sourceMappingURL=Entry.js.map