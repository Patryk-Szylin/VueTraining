var PrizeObj = (function () {
    function PrizeObj(_label, _prize, _noRecipients, _subLabel) {
        if (_subLabel === void 0) { _subLabel = ""; }
        this.label = _label;
        this.subLabel = _subLabel;
        this.prize = _prize;
        this.noRecipients = _noRecipients;
    }
    return PrizeObj;
}());
export { PrizeObj };
var prizeMockData = [
    { label: "1st", prize: 21222, noRecipients: 1 },
    { label: "2nd", prize: 15916, noRecipients: 1 },
    { label: "Semi", prize: 7958, noRecipients: 2 },
    { label: "Quarter", prize: 7427, noRecipients: 4 },
    { label: "Round-16", prize: 6101, noRecipients: 8 },
    { label: "Round-32", prize: 5968, noRecipients: 16 },
    { label: "Round-64", prize: 4973, noRecipients: 32 },
    { label: "Round-128", prize: 4310, noRecipients: 64 },
    { label: "Round-256", prize: 2901, noRecipients: 128 },
    { label: "Round-512", prize: 2072, noRecipients: 256 },
    { label: "Round-1024", prize: 1657, noRecipients: 512 },
    { label: "Round-2048", prize: 828, noRecipients: 1024 },
    { label: "Round-4096", prize: 414, noRecipients: 2048 },
    { label: "Round-8192", prize: 207, noRecipients: 4096 },
    { label: "Round-16384", prize: 103, noRecipients: 8192 },
    { label: "Round-32768", prize: 51, noRecipients: 16384 },
    { label: "Round-65536", prize: 25, noRecipients: 32768 },
    { label: "Round-131072", prize: 50, noRecipients: 65536, subLabel: "In-game rewards worth" },
    { label: "Round-262144", prize: 40, noRecipients: 131072, subLabel: "In-game rewards worth" },
    { label: "Round-524288", prize: 30, noRecipients: 262144, subLabel: "In-game rewards worth" },
    { label: "Round-1048576", prize: 20, noRecipients: 524288, subLabel: "In-game rewards worth" },
    { label: "Round-2097152", prize: 10, noRecipients: 1048576, subLabel: "In-game rewards worth" },
];
var DummyPrizeData = (function () {
    function DummyPrizeData() {
    }
    DummyPrizeData.getMockData = function () {
        return prizeMockData;
    };
    return DummyPrizeData;
}());
export { DummyPrizeData };
//# sourceMappingURL=DummyPrizesData.js.map