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
            var standings = new Array();
            standings.push(new PriceAllocator("1st", 1, 0.4));
            standings.push(new PriceAllocator("2nd", 1, 0.2));
            standings.push(new PriceAllocator("Semis", 2, 0.1));
            standings.push(new PriceAllocator("Quarter", 4, 0.1));
            standings.push(new PriceAllocator("RO 16", 8, 0));
            standings.push(new PriceAllocator("RO 32", 16, 0));
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
            labels[2] = "Semis";
            labels[4] = "Quarter";
            labels[8] = "RO 16";
            labels[16] = "RO 32";
            labels[32] = "RO 64";
            labels[64] = "RO 128";
            labels[128] = "RO 256";
            labels[256] = "RO 512";
            var recipientsForEachBracket = this.bracketSize / 2;
            var labelExistance = standings.find(function (label) { return label.recipientLabel == labels[recipientsForEachBracket]; });
            if (labelExistance)
                return;
            var newRecipient = new PriceAllocator(labels[recipientsForEachBracket], recipientsForEachBracket, 0.4);
            standings.push(newRecipient);
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