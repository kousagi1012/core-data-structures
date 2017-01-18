'use strict'

export default class Stack {
  constructor() {
    this.arr = []
  }

  add(element) {
    this.arr.push(element)
  }

  remove() {
    this.arr.pop()
  }

  peek() {
    this.arr.length > 0 ? this.arr[this.arr.length-1]:null
  }

  isEmpty() {
    return this.arr.length > 0
  }

  size() {
    return this.arr.length
  }
}
