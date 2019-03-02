import { Reward } from "../Reward/Reward";
var threshold_64;
var RewardsFromThreshold = (function () {
    function RewardsFromThreshold() {
    }
    RewardsFromThreshold.GetRewards = function (bracketSize) {
        var proportion = {};
        proportion[0] = 0.01;
        proportion[1] = 0.0075;
        proportion[2] = 0.01;
        proportion[4] = 0.0175;
        proportion[8] = 0.03;
        proportion[16] = 0.05;
        proportion[32] = 0.05;
        proportion[64] = 0.05;
        proportion[128] = 0.1;
        proportion[256] = 0.1;
        proportion[512] = 0.1;
        proportion[1024] = 0.175;
        proportion[2048] = new Reward("Player's item choice", 30);
        proportion[4096] = new Reward("Choose from available rewards", 20);
        proportion[8192] = new Reward("Player's item choice", 10);
        return proportion;
    };
    return RewardsFromThreshold;
}());
export { RewardsFromThreshold };
//# sourceMappingURL=RewardsData.js.map