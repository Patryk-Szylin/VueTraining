import Chance from 'chance';
var chance = new Chance();
var RandomGenerator = (function () {
    function RandomGenerator() {
    }
    RandomGenerator.getRandomName = function () {
        return chance.name();
    };
    return RandomGenerator;
}());
export { RandomGenerator };
//# sourceMappingURL=RandomGenerator.js.map