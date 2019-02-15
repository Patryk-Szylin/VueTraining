var Entry = (function () {
    function Entry(date, totalPrizePool, players, standings, rewards) {
        this.bracketSize = 2;
        this.displayStandingText = function () {
            var _this = this;
            var mapp = [];
            Object.keys(this.standings).map(function (key) {
                mapp.push({ label: key, price: _this.standings[key] });
            });
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
            this.totalPrizePool = "\u00A3 " + this.totalPrizePool;
        };
        this.calculateStandingPrices = function () {
        };
        this.generateBracketSize = function () {
            if (this.bracketSize < this.players.length) {
                this.bracketSize = this.bracketSize * 2;
                this.generateBracketSize();
            }
        };
        this.date = date;
        this.players = players;
        this.rewards = rewards;
        this.totalPrizePool = "\u00A3 " + totalPrizePool;
    }
    return Entry;
}());
export { Entry };
//# sourceMappingURL=Entry.js.map