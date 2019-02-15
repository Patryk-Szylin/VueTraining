var DummyData = (function () {
    function DummyData() {
        this.entries = {};
        this.entries[0] = dummyData;
    }
    return DummyData;
}());
export { DummyData };
var Entry = (function () {
    function Entry(date, totalPrizePool, players, standings, rewards) {
        this.bracketSize = 2;
        this.displayStandingText = function () {
            var _this = this;
            var mapp = [];
            Object.keys(this.standings).map(function (key) {
                mapp.push({ label: key, price: _this.standings[key] });
            });
            console.log(mapp);
        };
        this.calculateStandingPrices = function () {
        };
        this.generateBracketSize = function () {
            if (this.bracketSize < this.players.length) {
                this.bracketSize = this.bracketSize * 2;
                this.generateBracketSize();
            }
            console.log(this.bracketSize);
        };
        this.date = date;
        this.players = players;
        this.rewards = rewards;
        this.totalPrizePool = "\u00A3 " + totalPrizePool;
    }
    return Entry;
}());
export { Entry };
var players = new Array();
for (var i = 0; i < 23; i++) {
    players.push("Customer" + i);
}
var stands = {
    "1st": 12540 * 0.4,
    "2nd": 0,
    "Semi Finals": 0,
    "Quarter Finals": 0,
    "RO 16": 0,
    "RO 32": 0
};
var rewards = ["Rewards"];
var dummyData = new Entry("17th", 12540, players, stands);
console.log(dummyData.generateBracketSize());
//# sourceMappingURL=DummyData.js.map