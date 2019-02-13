var DummyData = (function () {
    function DummyData() {
        this.entries = {};
        this.entries[0] = dummyData;
    }
    return DummyData;
}());
export { DummyData };
var Entry = (function () {
    function Entry(date, players, standings, rewards) {
        this.date = date;
        this.players = players;
        this.standings = standings;
        this.rewards = rewards;
    }
    return Entry;
}());
export { Entry };
var players = ["Pppp"];
var prizes = ["Pppp"];
var rewards = ["Rewards"];
var dummyData = new Entry("17th", players);
var dummyData2 = new Entry("24th", rewards);
//# sourceMappingURL=DummyData.js.map