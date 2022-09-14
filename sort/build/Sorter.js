"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const collection = this;
        const len = collection.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                collection.compare(j, j + 1) && collection.swap(j, j + 1);
            }
        }
    }
}
exports.Sorter = Sorter;
