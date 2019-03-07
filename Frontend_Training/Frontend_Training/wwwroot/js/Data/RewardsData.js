import { Reward } from "../Reward/Reward";
var threshold_64;
var RewardsFromThreshold = (function () {
    function RewardsFromThreshold() {
    }
    RewardsFromThreshold.GetRewards = function (bracketSize) {
        var proportion = {};
        proportion[0] = 0.002;
        proportion[1] = 0.0015;
        proportion[2] = 0.0015;
        proportion[4] = 0.0028;
        proportion[8] = 0.0046;
        proportion[16] = 0.009;
        proportion[32] = 0.015;
        proportion[64] = 0.026;
        proportion[128] = 0.035;
        proportion[256] = 0.05;
        proportion[512] = 0.08;
        proportion[1024] = 0.08;
        proportion[2048] = 0.08;
        proportion[4096] = 0.08;
        proportion[8192] = 0.08;
        proportion[16384] = 0.08;
        proportion[32768] = 0.08;
        proportion[65536] = new Reward("Player's item choice", 50);
        proportion[131072] = new Reward("Player's item choice", 40);
        proportion[262144] = new Reward("Player's item choice", 30);
        proportion[524288] = new Reward("Player's item choice", 20);
        proportion[1048576] = new Reward("Player's item choice", 10);
        return proportion;
    };
    return RewardsFromThreshold;
}());
export { RewardsFromThreshold };
//# sourceMappingURL=RewardsData.js.map