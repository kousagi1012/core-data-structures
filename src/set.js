'use strict'

export default class Set {
    constructor() {
        this.elements = []
    }

    add(element) {
        this.elements.push(element)
        return this.elements
    }

    isEmpty() {
        return this.elements < 1
    }

    contains(element) {
        return this.elements.indexOf(element) !== -1
    }

    remove(element) {
        const exists = this.elements.indexOf(element)
        if (exists !== -1) {
          this.elements.splice(exists, 1)
          return this.elements
        }
    }

    forEvery() {
        this.elements.forEach(function(a) {
            console.log(a);
        })
    }

    size() {
        return this.elements.length
    }

    union(otherSet) {
        let joined = otherSet.concat(this.elements)
        const duplicatesRemoved = joined.filter(function(element, pos) {
            return joined.indexOf(element) == pos
        })
        return duplicatesRemoved
    }

    intersect(otherSet) {
        let combinedArrays = []
        this.elements.filter(function(element) {
            if (otherSet.indexOf(element) !== -1) {
                combinedArrays.push(element)
            }
        })
        const duplicatesRemoved = combinedArrays.filter(function(element, pos) {
            return combinedArrays.indexOf(element) == pos
        })
        return duplicatesRemoved
    }

    difference(otherSet) {
      let differences = []
      this.elements.filter(function(element) {
          if (otherSet.indexOf(element) == -1) {
            differences.push(element)
          }
      })
      return differences
    }

    clone() {
     return this.elements.slice(0)
    }
}
