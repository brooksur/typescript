"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
exports.Node = Node;
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head)
            return 0;
        let tail = this.head;
        let length = 1;
        while (tail.next) {
            tail = tail.next;
            ++length;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error("Index out of bound");
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index)
                return node;
            ++counter;
            node = node.next;
        }
        throw new Error("Index out of bounds");
    }
    compare(leftIndex, rightIndex) {
        return this.at(leftIndex) > this.at(rightIndex);
    }
    swap(leftIndex, rightIndex) {
        const leftVal = this.at(leftIndex).data;
        const rightVal = this.at(rightIndex).data;
        this.at(leftIndex).data = rightVal;
        this.at(rightIndex).data = leftVal;
    }
    print() {
        if (!this.head) {
            return "";
        }
        let node = this.head;
        let toPrint = [];
        while (node) {
            toPrint.unshift(node.data);
            node = node.next;
        }
        return toPrint.join(" -> ");
    }
}
exports.LinkedList = LinkedList;
