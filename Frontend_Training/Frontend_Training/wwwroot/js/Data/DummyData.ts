export class DummyData {
    entries: { [key: number]: Entry; } = {};

    constructor() {
        this.entries[0] = dummyData;
    }
}

export class Entry {
    date: string;
    players: Array<string>;
    standings: any;
    // Needs to be a dictionary
    // key = item name
    // value = image, selling price, valuation in the shop
    rewards: Array<string>; 
    totalPrizePool: string;
    bracketSize: number = 2;

    constructor(date: string,
                totalPrizePool: number,
                players?: Array<string>,
                standings? : any,
                rewards?: Array<string>) {
        this.date = date;
        this.players = players;
        this.rewards = rewards;
        this.totalPrizePool = `£ ${totalPrizePool}`;
    }

    displayStandingText = function() {
        var mapp = [];

        Object.keys(this.standings).map(key => {
            mapp.push({label: key, price: this.standings[key]})            
        })

        console.log(mapp);

    }

    calculateStandingPrices = function () {

    }

    generateBracketSize = function() {
        if (this.bracketSize < this.players.length) {
            this.bracketSize = this.bracketSize * 2;
            this.generateBracketSize();
        }

        console.log(this.bracketSize);
    }

}
//let players: Array<string> = ["Customer1", "Customer2", "Customer3", "Customer4", "Customer5"];
let players: Array<string> = new Array();

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
}

let rewards: Array<string> = ["Rewards"];
var dummyData = new Entry("17th", 12540, players, stands);
//console.log(dummyData.displayStandingText());
console.log(dummyData.generateBracketSize());




//var dummyData: Array<Entry> = [
//    new Entry("17th")
//]