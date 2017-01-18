'use strict'

export default class Queue {
  constructor() {
    this.arr = []
  }

  enqueue(element) {
    return this.arr.push(element)
  }

  dequeue() {
    return this.arr.shift(0)
  }

  front() {

  }

  back() {

  }

  isEmpty() {
    return this.arr.length < 1
  }

  length() {
    return this.arr.length
  }
}
