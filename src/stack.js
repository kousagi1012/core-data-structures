'use strict'

export default class Stack {
  constructor() {
    this.arr = []
  }

  push(element) {
    this.arr.push(element)
  }

  pop() {
    this.arr.pop()
  }

  peek() {
    return this.arr.length > 0 ? this.arr[this.arr.length - 1] : null
  }

  isEmpty() {
    return this.arr.length < 1
  }

  length() {
    return this.arr.length
  }
}
