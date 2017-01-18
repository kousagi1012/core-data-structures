import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('add()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()

      expect(() => myStack.add('foo'))
        .to.alter(() => myStack.size(), { from: 0, to: 1 })
    })
  context('remove()', () => {
    it('removes element from the top of the stack.', () => {
      const myStack = new Stack()
      myStack.add('foo')

      expect(() => myStack.remove())
      .to.alter(() => myStack.size(), { from: 1, to: 0 })
      })
      // context('add()', () => {
      //   it('pushes an element to the top of the stack.', () => {
      //     const myStack = new Stack()
      //
      //     expect(() => myStack.add('foo'))
      //       .to.alter(() => myStack.size(), { from: 0, to: 1 })
      //   })
    })
  })
})
