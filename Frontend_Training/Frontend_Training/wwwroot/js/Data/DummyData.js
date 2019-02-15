import { Customer } from "../Customer/Customer";
import { Entry } from "../Entry/Entry";
import { RandomGenerator } from "../Helpers/RandomGenerator";
var entry = new Entry("17th", 0, new Array());
var DummyData = (function () {
    function DummyData() {
        this.entries = {};
        this.entries[0] = entry;
    }
    return DummyData;
}());
export { DummyData };
for (var i = 0; i < 4; i++) {
    var newPlayer = new Customer(RandomGenerator.getRandomName(), 5);
    entry.addPlayerToBracket(newPlayer);
}
//# sourceMappingURL=DummyData.js.map