import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([
  5, 88, 6, 2, 0, -7, 444, 987, 15689, 44, 88.05, 66, 4895, 4,
]);
new Sorter(numbersCollection).sort();

console.log(numbersCollection.collection);
