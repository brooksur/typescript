"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([
    5, 88, 6, 2, 0, -7, 444, 987, 15689, 44, 88.05, 66, 4895, 4,
]);
const numbersSorter = new Sorter_1.Sorter(numbersCollection);
numbersSorter.sort();
const charactersCollection = new CharactersCollection_1.CharactersCollection("zyXTaaaASDFFDAkkk!");
const charactersSorter = new Sorter_1.Sorter(charactersCollection);
charactersSorter.sort();
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(2);
linkedList.add(1);
linkedList.add(0);
linkedList.add(-1);
linkedList.add(-2);
const linkedListSorter = new Sorter_1.Sorter(linkedList);
linkedListSorter.sort();
console.log(`
  -------------------------------------------------------

    numbers:     ${numbersCollection.collection.join(" -> ")}
    characters:  ${charactersCollection.collection}
    linked list: ${linkedList.print()}

  -------------------------------------------------------
`);
