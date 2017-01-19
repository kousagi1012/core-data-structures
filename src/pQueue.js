'use strict'

export default class PQueue {
  constructor() {
    this.arr = []
  }

  enqueue(element, priority) {
    this.arr[this.arr.length] = {element, priority}
    var sorted = this.arr.sort((a, b) => {
      return parseFloat(b.priority) - parseFloat(a.priority)
    })
    return sorted
  }

  front() {
    return this.arr[0] !== undefined ? this.arr[0] : null
  }

  back() {
    return this.arr.length > 0 ? this.arr[this.arr.length-1] : null
  }

  dequeue() {
    return this.arr.length > 0 ? this.arr.shift(0) : null
  }

  isEmpty() {
    return this.arr.length < 1
  }

  length() {
    return this.arr.length
  }
}
