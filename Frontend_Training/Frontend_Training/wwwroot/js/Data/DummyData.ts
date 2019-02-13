export class DummyData {
    entries: { [key: number]: Entry; } = {};

    constructor() {
        this.entries[0] = dummyData;
        
    }
}

export class Entry {
    date: string;
    players: Array<string>;
    standings: { [key: number]: number };
    // Needs to be a dictionary
    // key = item name
    // value = image, selling price, valuation in the shop
    rewards: Array<string>; 

    constructor(date: string, players?:
                Array<string>,
                standings?: { [key: number]: number },
                rewards?: Array<string>) {
        this.date = date;
        this.players = players;
        this.standings = standings;
        this.rewards = rewards;
    }
}

let players: Array<string> = ["Pppp"];
let prizes: Array<string> = ["Pppp"];
let rewards: Array<string> = ["Rewards"];

var dummyData = new Entry("17th", players);
var dummyData2 = new Entry("24th", rewards);

//var dummyData: Array<Entry> = [
//    new Entry("17th")
//]