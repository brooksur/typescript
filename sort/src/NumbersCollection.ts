import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter {
  constructor(public collection: number[]) {
    super()
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const collection = this.collection
    return collection[leftIndex] > collection[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    const collection = this.collection

    const rightValue = collection[rightIndex]
    const leftValue = collection[leftIndex]

    collection[leftIndex] = rightValue
    collection[rightIndex] = leftValue
  }

  get length(): number {
    return this.collection.length
  }
}
