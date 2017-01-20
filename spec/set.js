import chai, {
    expect
} from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
    'use strict'

    it('exists', () => {
        expect(Set).to.be.a('function')
    })

    context('add()', () => {
        it('adds an element to the set.', () => {
            const mySet = new Set()
            mySet.add(2)
            expect(mySet.add(1)).to.eql([2, 1])
        })
    })

    context('isEmpty()', () => {
      it('returns true if the queue is empty.', () => {
        const mySet = new Set()

        expect(mySet.isEmpty()).to.equal(true)
      })

      it('returns false if queue is not empty.', () => {
        const mySet = new Set()
        mySet.add('bar')
        mySet.add('is')
        mySet.add('foo')
        expect(mySet.isEmpty()).to.equal(false)
      })
    })

    context('contains()', () => {
      it('returns true the set contains the element.', () => {
        const mySet = new Set()
        mySet.add('bar')
        mySet.add('is')
        mySet.add('foo')
        expect(mySet.contains('foo')).to.equal(true)
      })

      it(' returns false if the set does not contain element.', () => {
        const mySet = new Set()
        mySet.add('bar')
        mySet.add('is')
        mySet.add('foo')
        expect(mySet.contains('cat')).to.equal(false)
      })
    })

    context('remove()', () => {
      it('removes an element (if it exists) from the set.', () => {
        const mySet = new Set()
        mySet.add('bar')
        mySet.add('is')
        mySet.add('foo')
        expect(mySet.remove('is')).to.eql(['bar', 'foo'])
      })
    })

    context('forEvery()', () => {
      it('takes a callback function and passes it each element in sequence.', () => {
        const mySet = new Set()
        mySet.add('bar')
        mySet.add('is')
        // mySet.add('foo')
        expect(mySet.forEvery()).to.eql(undefined)
      })
    })

    context('size()', () => {
      it('returns the number of elements in the set.', () => {
        const mySet = new Set()
        mySet.add('foo')
        mySet.add('foo')
        expect(mySet.size()).to.equal(2)
      })
    })

    context('union()', () => {
      it('unions the set with another set and returns the resulting set.', () => {
        const mySet = new Set()
        mySet.add('foo')
        expect(mySet.union(['this', 'is'])).to.eql(['this', 'is', 'foo'])
      })
    })
})
