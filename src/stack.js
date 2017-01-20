'use strict'

export default class Stack {
  constructor() {
    this.elements = []
  }

  push(element) {
    this.elements.push(element)
  }

  pop() {
    this.elements.pop()
  }

  peek() {
    return this.elements.length > 0 ? this.elements[this.elements.length - 1] : null
  }

  isEmpty() {
    return this.elements.length < 1
  }

  length() {
    return this.elements.length
  }
}
