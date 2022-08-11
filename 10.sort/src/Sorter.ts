export abstract class Sorter {
  abstract length: number
  abstract compare(leftIndex: number, rightIndex: number): boolean
  abstract swap(leftIndex: number, rightIndex: number): void

  sort(): void {
    const collection = this
    const len = collection.length

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        collection.compare(j, j + 1) && collection.swap(j, j + 1)
      }
    }
  }
}
