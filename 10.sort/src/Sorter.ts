import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
  constructor(public collection: NumbersCollection) {}

  sort(): void {
    const collection = this.collection;
    const len = collection.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        collection.compare(j, j + 1) && collection.swap(j, j + 1);
      }
    }
  }
}
