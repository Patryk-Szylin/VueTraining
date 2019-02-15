import { Customer } from "../Customer/Customer";
import { Entry } from "../Entry/Entry";
var entry = new Entry("17th", 0, new Array());
var DummyData = (function () {
    function DummyData() {
        this.entries = {};
        this.entries[0] = entry;
    }
    return DummyData;
}());
export { DummyData };
for (var i = 0; i < 16; i++) {
    var newPlayer = new Customer("Customer " + i * 2, 5);
    entry.addPlayerToBracket(newPlayer);
}
//# sourceMappingURL=DummyData.js.map