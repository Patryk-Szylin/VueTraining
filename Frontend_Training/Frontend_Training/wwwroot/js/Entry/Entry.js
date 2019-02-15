import { PriceAllocator } from "../PriceAllocator/PriceAllocator";
var Entry = (function () {
    function Entry(date, totalPrizePool, players, standings, rewards) {
        this.bracketSize = 2;
        this.calculateStandings = function (standings) {
            var mapp = [];
            for (var i = 0; i < standings.length; i++) {
                var currentStanding = standings[i];
                mapp.push({
                    label: currentStanding.recipientLabel,
                    recipients: currentStanding.noRecipients,
                    proportion: currentStanding.proportion
                });
            }
            this.standings = mapp;
        };
        this.addPlayerToBracket = function (player) {
            this.players.push(player);
            this.generateBracketSize();
            this.generatePrizePool();
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
            var standings = new Array();
            standings.push(new PriceAllocator("1st", 1, 0.4));
            standings.push(new PriceAllocator("2nd", 1, 0.2));
            standings.push(new PriceAllocator("Semis", 2, 0.1));
            standings.push(new PriceAllocator("Quarter", 4, 0.1));
            standings.push(new PriceAllocator("RO 16", 8, 0));
            standings.push(new PriceAllocator("RO 32", 16, 0));
            this.calculateStandings(standings);
        };
        this.date = date;
        this.players = players;
        this.rewards = rewards;
        this.standings = standings;
        this.totalPrizePool = totalPrizePool;
    }
    return Entry;
}());
export { Entry };
//# sourceMappingURL=Entry.js.map