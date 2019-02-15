import Chance from 'chance';

var chance = new Chance();

export class RandomGenerator {

    static getRandomName() {
        return chance.name();
    }
}
