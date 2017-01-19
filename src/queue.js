'use strict'

export default class Queue {
  constructor() {
    this.arr = []
  }

  enqueue(element) {
    return this.arr[this.arr.length] = element
  }

  dequeue() {
    return this.arr.shift(0)
  }

  front() {
    return this.arr.length > 0 ? this.arr[0] : null
  }

  back() {
    return this.arr.length > 0 ? this.arr[this.arr.length-1] : null
  }

  isEmpty() {
    return this.arr.length < 1
  }

  length() {
    return this.arr.length
  }
}
