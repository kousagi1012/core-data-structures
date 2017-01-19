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
        console.log(myPQueue)
        expect(myPQueue.enqueue('this', 100)).to.eql([{element: 'this', priority: 100}, {element: 'is', priority: 30}, {element: 'foo', priority: 10}, {element: 'bar', priority: 2}])
      })
    })
})
