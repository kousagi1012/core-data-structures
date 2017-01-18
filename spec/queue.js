import chai, {
    expect
} from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
    'use strict'

    it('exists', () => {
        expect(Queue).to.be.a('function')
    })

    context('enqueue()', () => {
        it('pushes an element to the back of the queue.', () => {
          const myQueue = new Queue()
          myQueue.enqueue('this')
          myQueue.enqueue('is')
          myQueue.enqueue('foo')
          expect(myQueue.enqueue('bar')).to.equal('bar')
                })
        })

    context('dequeue()', () => {
        it('returns and removes the first element of the queue.', () => {
            const myQueue = new Queue()
            myQueue.enqueue('this')
            myQueue.enqueue('is')
            myQueue.enqueue('foo')
            expect(myQueue.dequeue()).to.equal('this')
        })
    })

    context('front()', () => {
        it('returns front element of queue.', () => {
            const myQueue = new Queue()
            myQueue.enqueue('this')
            myQueue.enqueue('is')
            myQueue.enqueue('foo')
            expect(myQueue.front()).to.equal('this')
        })
        it('returns null if queue is empty.', () => {
            const myQueue = new Queue()
            expect(myQueue.front()).to.equal(null)
        })
    })

    context('back()', () => {
        it('returns back element of queue.', () => {
            const myQueue = new Queue()
            myQueue.enqueue('this')
            myQueue.enqueue('is')
            myQueue.enqueue('foo')
            expect(myQueue.back()).to.equal('foo')
        })
        it('returns null if queue is empty.', () => {
            const myQueue = new Queue()
            expect(myQueue.back()).to.equal(null)
        })
    })

    context('isEmpty()', () => {
        it('returns true if queue is empty.', () => {
            const myQueue = new Queue()
            expect(myQueue.isEmpty()).to.equal(true)
        })
        it('returns null if queue is empty.', () => {
            const myQueue = new Queue()
            myQueue.enqueue('this')
            myQueue.enqueue('is')
            myQueue.enqueue('foo')
            expect(myQueue.isEmpty()).to.equal(false)
        })
    })

    context('size()', () => {
        it('returns length of array.', () => {
            const myQueue = new Queue()
            myQueue.enqueue('foo')
            myQueue.enqueue('bar')
            expect(myQueue.length()).to.equal(2)
        })
    })

  })
