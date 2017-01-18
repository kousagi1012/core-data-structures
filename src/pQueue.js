'use strict'

export default class PQueue {
  constructor() {
    this.arr = []
    this.index = 0
  }

  enqueue(element, priority) {

    this.arr[this.index++] = {element, priority}
    // comparePriority(a,b) => {
    //   return a - b
    // }
    // return this.arr.sort(comparePriority)
    // })
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
