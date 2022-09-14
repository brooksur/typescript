import { Sorter } from './Sorter'

export class CharactersCollection extends Sorter {
  constructor(public collection: string) {
    super()
  }

  get length() {
    return this.collection.length
  }

  compare(leftIndex: number, rightIndex: number) {
    const collection = this.collection
    const leftChar = collection[leftIndex].toLowerCase()
    const rightChar = collection[rightIndex].toLowerCase()
    return leftChar > rightChar
  }

  swap(leftIndex: number, rightIndex: number) {
    const collection = this.collection.split('')
    const leftChar = collection[leftIndex]
    const rightChar = collection[rightIndex]
    collection[leftIndex] = rightChar
    collection[rightIndex] = leftChar
    this.collection = collection.join('')
  }
}
