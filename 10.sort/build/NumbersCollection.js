"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(collection) {
        this.collection = collection;
    }
    compare(leftIndex, rightIndex) {
        const collection = this.collection;
        return collection[leftIndex] > collection[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const collection = this.collection;
        const rightValue = collection[rightIndex];
        const leftValue = collection[leftIndex];
        collection[leftIndex] = rightValue;
        collection[rightIndex] = leftValue;
    }
    get length() {
        return this.collection.length;
    }
}
exports.NumbersCollection = NumbersCollection;
