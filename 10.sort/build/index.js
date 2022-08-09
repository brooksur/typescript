"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([
    5, 88, 6, 2, 0, -7, 444, 987, 15689, 44, 88.05, 66, 4895, 4,
]);
new Sorter_1.Sorter(numbersCollection).sort();
console.log(numbersCollection.collection);
