import { Reward } from "../Reward/Reward";

// threshold for 64 people
let threshold_64: { [key: number]: any };


export class RewardsFromThreshold {
    static GetRewards = (bracketSize) => {
        let proportion: { [key: number]: any } = {};

        //if (bracketSize <= 64) {
        //    proportion[0] = 0.4;
        //    proportion[1] = 0.3;
        //    proportion[2] = 0.2;
        //    proportion[4] = 0.1;
        //    proportion[8] = new Reward("Armor", 40);
        //    proportion[16] = new Reward("Armor", 35);
        //    proportion[32] = new Reward("Armor", 20);
        //    proportion[64] = new Reward("Armor", 25);
        //};

        //if (bracketSize > 64 && bracketSize <= 128) {
        //    proportion[0] = 0.001;
        //    proportion[1] = 0.002;
        //    proportion[2] = 0.003;
        //    proportion[4] = 0.1;
        //    proportion[8] = new Reward("Armor", 1);
        //    proportion[16] = new Reward("Armor", 1);
        //    proportion[32] = new Reward("Armor", 1);
        //    proportion[64] = new Reward("Armor", 1);
        //    proportion[128] = new Reward("Armor", 1);
        //}


        // 15k tournamanet size
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
    }


}

