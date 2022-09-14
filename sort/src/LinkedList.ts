import { Sorter } from './Sorter'

export class Node {
  next: Node | null = null

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null

  add(data: number) {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      return
    }

    let tail = this.head

    while (tail.next) {
      tail = tail.next
    }

    tail.next = node
  }

  get length(): number {
    if (!this.head) return 0

    let tail = this.head
    let length = 1

    while (tail.next) {
      tail = tail.next
      ++length
    }

    return length
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bound')
    }

    let counter = 0
    let node = this.head as Node | null

    while (node) {
      if (counter === index) return node
      ++counter
      node = node.next
    }

    throw new Error('Index out of bounds')
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex) > this.at(rightIndex)
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftVal = this.at(leftIndex).data
    const rightVal = this.at(rightIndex).data
    this.at(leftIndex).data = rightVal
    this.at(rightIndex).data = leftVal
  }

  print(): string {
    if (!this.head) {
      return ''
    }

    let node: Node | null = this.head
    let toPrint = []

    while (node) {
      toPrint.unshift(node.data)
      node = node.next
    }

    return toPrint.join(' -> ')
  }
}
