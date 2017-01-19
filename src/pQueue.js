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

  }

  back() {

  }

  dequeue() {

  }

  isEmpty() {

  }

  length() {

  }
}
