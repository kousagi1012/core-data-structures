'use strict'

export default class Set {
  constructor() {
    this.arr = []
  }

  add(element) {
    this.arr.push(element)
    return this.arr
  }

  isEmpty() {
    return this.arr < 1
  }

  contains(element) {
    return this.arr.indexOf(element) !== -1 ? true : false
  }

  remove(element) {
    var exists = this.arr.indexOf(element)
    exists !== -1 ? this.arr.splice(exists, 1) : null
    return this.arr
  }

  // forEvery() {
  //   for (let i=0; i < this.arr.length; i++) {
  //     callback(this.arr[i])
  //   }
  //   return callback
  // }

  size() {
    return this.arr.length
  }

  union(otherSet) {
    var joined = otherSet.concat(this.arr)
    return joined
  }

  // intersect(otherSet) {
  //   this.arr.filter(function(n) {
  //     return otherSet.indexOf(n) != -1
  //   }
  // }

  function intersect(this.arr, this.arr2) {
    var empty;
    if (this.arr2.length > this.arr.length) empty = this.arr2, this.arr2 = this.arr, this.arr = empty; // indexOf to loop over shorter
    return this.arr.filter(function (empty) {
        if (otherSet.indexOf(empty) !== -1) return true;
    })
} return (this.arr, this.arr2)

}
