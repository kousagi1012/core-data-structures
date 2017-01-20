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

    intersect(arr2) {
        var arr3 = []
        this.arr.filter(function(element) {
          if (arr2.indexOf(element) !== -1) {
            arr3.push(element)
          }
        })
        var removeDuplicates = arr3.filter(function(element, pos) {
          return arr3.indexOf(element) == pos
        })
        return removeDuplicates
    }
}
