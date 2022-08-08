"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const collection = this.collection;
        const len = collection.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (collection[j] > collection[j + 1]) {
                    const left = collection[j];
                    collection[j] = collection[j + 1];
                    collection[j + 1] = left;
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
