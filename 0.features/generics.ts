class ArrayOfNumber {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

const arr = new ArrayOfAnything(['a', 'b'])

// example of generics with functions

function printStrings(arr: string[]): void {
  for (let a of arr) {
    console.log(a)
  }
}

function printNumbers(arr: number[]): void {
  for (let a of arr) {
    console.log(a)
  }
}

function printAnything<T>(arr: T[]): void {
  for (let a of arr) {
    console.log(a)
  }
}

printAnything<string>(['a', 'b', 'c'])
printAnything<number>([1, 2, 3])

// Generic Constraints

class Car {
  print(): void {
    console.log('I am a Car')
  }
}

class House {
  print(): void {
    console.log('I am a House')
  }
}

interface Printable {
  print(): void
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let a of arr) {
    a.print()
  }
}
