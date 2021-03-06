import chai, {
    expect
} from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
    'use strict'

    it('exists', () => {
        expect(Stack).to.be.a('function')
    })

    context('push()', () => {
        it('pushes an element to the top of the stack.', () => {
            const myStack = new Stack()

            expect(() => myStack.push('foo'))
                .to.alter(() => myStack.length(), {
                    from: 0,
                    to: 1
                })
        })
    })
    context('pop()', () => {
        it('removes element from the top of the stack.', () => {
            const myStack = new Stack()
            myStack.push('foo')

            expect(() => myStack.pop())
                .to.alter(() => myStack.length(), {
                    from: 1,
                    to: 0
                })
        })
    })
    context('peek()', () => {
        it('retrieves element from top of the stack.', () => {
            const myStack = new Stack()
            myStack.push('foo')
            myStack.push('bar')
            expect(myStack.peek()).to.equal('bar')
        })
    })
    context('isEmpty()', () => {
        it('returns true if stack is empty.', () => {
            const myStack = new Stack()
            expect(myStack.isEmpty()).to.equal(true)
        })

        it('returns false if stack is not empty.', () => {
            const myStack = new Stack()
            myStack.push('foo')
            myStack.push('bar')
            expect(myStack.isEmpty()).to.equal(false)
          })
        })
    context('length()', () => {
        it('returns length of stack.', () => {
            const myStack = new Stack()
            myStack.push('foo')
            myStack.push('bar')
            expect(myStack.length()).to.equal(2)
        })
    })
})
