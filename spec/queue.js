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
            console.log(myQueue)
                })
        })
    })

    context('dequeue()', () => {
        it('removes the first element of the queue.', () => {
            const myQueue = new Queue()
            myQueue.enqueue('this')
            myQueue.enqueue('is')
            myQueue.enqueue('foo')
            expect(myQueue.dequeue()).to.equal('this')
        })
    })
