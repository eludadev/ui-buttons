const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { expect } = chai

chai.use(sinonChai)
chai.should()



const asyncUtil = require('./index')

describe('asyncUtil', () => {

  it('should catch exceptions of a function passed into it', async () => {
    const error = new Error('catch me!')
    const foo = asyncUtil(() => {
      throw error
    })
    expect(foo).to.throw(error)
  })

  it('should call next with the error when an async function passed into it throws', async () => {
    const error = new Error('catch me!')
    const next = sinon.spy();
    const foo = asyncUtil(async (req, res, next) => {
      throw error
    })

    await foo(null, null, next)
    expect(next).to.have.been.calledWith(error)
  })

  it('should call next with the arguments when an async function passed into it calls next', async () => {
    const next = sinon.spy()
    const foo = asyncUtil(async (req, res, next) => {
      next('test')
    })

    await foo(null, null, next)
    expect(next).to.have.been.calledWith('test')
  })

  it('should provide additional arguments to the middleware', async () => {
    const next = sinon.spy()
    const id = '1';
    const foo = asyncUtil(async (req, res, next, id) => {
      return id;
    })

    const result = await foo(null, null, next, id);
    expect(result).to.equal(id);
  })

  it('should accept a non-async function', async () => {
    const next = sinon.spy()
    const foo = asyncUtil((req, res, next) => {
      next('test')
    })

    await foo(null, null, next)
    expect(next).to.have.been.calledWith('test')
  })

  it('should accept a non-async function erroring', async () => {
    const error = new Error('catch me!')
    const next = sinon.spy();
    const foo = asyncUtil((req, res, next) => {
      next(error)
    })

    await foo(null, null, next)
    expect(next).to.have.been.calledWith(error)
  })

  // NB, thenables are not guaranteed to have a `catch` method.
  it('should handle thenables', async () => {
    const error = Error('catch me!')
    // construct a minimalist thenable which we can fail at a specific time
    let thenable, triggerFailure
    const registeringThenable = new Promise(res => {
      thenable = {
        then: sinon.spy((success, fail) => {
          triggerFailure = fail
          res()
        })
      }
    })

    // test the actual library feature
    const next = sinon.spy()
    const catchingThenable = asyncUtil(_ => thenable)(null, null, next)
    await registeringThenable
    expect(thenable.then).to.have.been.called
    expect(next).not.to.have.been.called
    triggerFailure(error)
    await catchingThenable
    expect(next).to.have.been.calledWith(error)
  })
})
