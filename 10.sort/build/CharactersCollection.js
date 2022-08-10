"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(collection) {
        this.collection = collection;
    }
    get length() {
        return this.collection.length;
    }
    compare(leftIndex, rightIndex) {
        const collection = this.collection;
        const leftChar = collection[leftIndex].toLowerCase();
        const rightChar = collection[rightIndex].toLowerCase();
        return leftChar > rightChar;
    }
    swap(leftIndex, rightIndex) {
        const collection = this.collection.split("");
        const leftChar = collection[leftIndex];
        const rightChar = collection[rightIndex];
        collection[leftIndex] = rightChar;
        collection[rightIndex] = leftChar;
        this.collection = collection.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
