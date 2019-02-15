import { PriceAllocator } from "../PriceAllocator/PriceAllocator";
var Entry = (function () {
    function Entry(date, totalPrizePool, players, rewards) {
        this.bracketSize = 2;
        this.addPlayerToBracket = function (player) {
            this.players.push(player);
            this.generateBracketSize();
            this.generatePrizePool();
            this.updateStandings();
        };
        this.generatePrizePool = function () {
            var _this = this;
            this.totalPrizePool = 0;
            this.players.forEach(function (player) {
                _this.totalPrizePool += player.entryFee;
            });
        };
        this.updateStandings = function () {
            this.getStandingPrices();
        };
        this.generateBracketSize = function () {
            if (this.bracketSize < this.players.length) {
                this.bracketSize = this.bracketSize * 2;
                this.generateBracketSize();
            }
        };
        this.getStandingPrices = function () {
            this.generateStandings(this.standings);
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
            var proportion = {};
            proportion[0] = 0.4;
            proportion[1] = 0.3;
            proportion[2] = 0.2;
            proportion[4] = 0.1;
            proportion[8] = 0;
            proportion[16] = 0;
            proportion[32] = 0;
            proportion[64] = 0;
            proportion[128] = 0;
            proportion[256] = 0;
            Object.keys(proportion).map(function (key, index) {
                if (proportion[key] == 0) {
                    proportion[key] = 2;
                }
            });
            var recipientsForEachBracket = this.bracketSize / 2;
            if (recipientsForEachBracket == 1) {
                var labelExistance = standings.find(function (label) { return label.recipientLabel == labels[recipientsForEachBracket]; });
                if (labelExistance)
                    return;
                var first = new PriceAllocator("1st", 1, proportion[0]);
                var second = new PriceAllocator("2nd", 1, proportion[1]);
                standings.push(first);
                standings.push(second);
            }
            else {
                var labelExistance = standings.find(function (label) { return label.recipientLabel == labels[recipientsForEachBracket]; });
                if (labelExistance)
                    return;
                var newRecipient = new PriceAllocator(labels[recipientsForEachBracket], recipientsForEachBracket, proportion[recipientsForEachBracket]);
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