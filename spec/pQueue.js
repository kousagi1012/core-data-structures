import chai, {
    expect
} from 'chai'
import chaiChange from 'chai-change'
import PQueue from '../src/pQueue'

chai.use(chaiChange)

describe('PQueue', () => {
    'use strict'

    it('exists', () => {
        expect(PQueue).to.be.a('function')
    })

    context('enqueue()', () => {
        it('adds an element with priority(number) to the back of a queue.', () => {
        const myPQueue = new PQueue()
        myPQueue.enqueue('bar', 2)
        myPQueue.enqueue('is', 30)
        myPQueue.enqueue('foo', 10)
        expect(myPQueue.enqueue('this', 100)).to.eql([{element: 'this', priority: 100}, {element: 'is', priority: 30}, {element: 'foo', priority: 10}, {element: 'bar', priority: 2}])
      })
    })

    context('front()', () => {
      it('returns first element that has highest priority item from front of queue.', () => {
        const myPQueue = new PQueue()
        myPQueue.enqueue('bar', 2)
        myPQueue.enqueue('is', 30)
        myPQueue.enqueue('foo', 10)
        expect(myPQueue.front()).to.eql({element: 'is', priority: 30})
      })

      it('returns null if queue is empty.', () => {
        const myPQueue = new PQueue()
        expect(myPQueue.front()).to.equal(null)
      })
    })

    context('back()', () => {
      it('returns back element that has lowest priority item from back of queue.', () => {
        const myPQueue = new PQueue()
        myPQueue.enqueue('bar', 2)
        myPQueue.enqueue('is', 30)
        myPQueue.enqueue('foo', 10)
        expect(myPQueue.back()).to.eql({element: 'bar', priority: 2})
      })

      it('returns null if queue is empty.', () => {
        const myPQueue = new PQueue()
        expect(myPQueue.back()).to.equal(null)
      })
    })

    context('dequeue()', () => {
      it('returns and removes the front element (highest priority) in the queue or null if the queue is empty.', () => {
        const myPQueue = new PQueue()
        myPQueue.enqueue('bar', 2)
        myPQueue.enqueue('is', 30)
        myPQueue.enqueue('foo', 10)
        expect(myPQueue.dequeue()).to.eql({element: 'is', priority: 30})
      })

      it('returns null if queue is empty.', () => {
        const myPQueue = new PQueue()
        expect(myPQueue.dequeue()).to.equal(null)
      })
    })

    context('isEmpty()', () => {
      it('returns true if the queue is empty.', () => {
        const myPQueue = new PQueue()

        expect(myPQueue.isEmpty()).to.equal(true)
      })

      it('returns false if queue is not empty.', () => {
        const myPQueue = new PQueue()
        myPQueue.enqueue('bar', 2)
        myPQueue.enqueue('is', 30)
        myPQueue.enqueue('foo', 10)
        expect(myPQueue.isEmpty()).to.equal(false)
      })
    })

    context('length()', () => {
      it('returns the number of elements in the queue.', () => {
        const myPQueue = new PQueue()
        myPQueue.enqueue('bar', 2)
        myPQueue.enqueue('is', 30)
        expect(myPQueue.length()).to.equal(2)
      })
    })
})
