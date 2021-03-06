import 'should'

import { create, parse } from '../src/redux-crud-action-types'

describe('create', function () {

  it('should be create', function () {
    const result = create('api/model')

    result.PENDING.should.be.equal('@crud/pending/id0/api/model')
    result.SUCCESS.should.be.equal('@crud/success/id0/api/model')
    result.ERROR.should.be.equal('@crud/error/id0/api/model')
  })

  it('should be parse', function () {
    const result1 = parse('@crud/pending/id0/api/model')
    const result2 = parse('@crud/success/id0/api/model')
    const result3 = parse('@crud/error/id0/api/model')

    result1.should.equal('api/model')
    result2.should.equal('api/model')
    result3.should.equal('api/model')
  })

  it('should be create and parse strange action type', function () {
    const result = create('api/model/common/555/1?a=3&3=5/9')

    result.PENDING.should.be.equal('@crud/pending/id1/api/model/common/555/1?a=3&3=5/9')
    parse(result.PENDING).should.be.equal('api/model/common/555/1?a=3&3=5/9')

    result.SUCCESS.should.be.equal('@crud/success/id1/api/model/common/555/1?a=3&3=5/9')
    parse(result.SUCCESS).should.be.equal('api/model/common/555/1?a=3&3=5/9')

    result.ERROR.should.be.equal('@crud/error/id1/api/model/common/555/1?a=3&3=5/9')
    parse(result.ERROR).should.be.equal('api/model/common/555/1?a=3&3=5/9')
  })

  it('should be returned pending value by default toString/valueOf method', function () {

    const result = create('api/model')
    const reducer = {
      [result]: {},
      [result.SUCCESS]: {},
      [result.ERROR]: {}
    }

    JSON.stringify(reducer).should.be.equal(JSON.stringify({
      '@crud/pending/id2/api/model': {},
      '@crud/success/id2/api/model': {},
      '@crud/error/id2/api/model': {}
    }))
  })

  it('should be returned error when user reset attribute', function () {
    const result = create('api/model')

    try {
      result.PENDING = 'white new value of argument'
    } catch (e) {
      result.PENDING.should.be.equal('@crud/pending/id3/api/model')
    }
  })

  it('should be parse default value', function () {
    const result = create('api/model')

    parse(result).should.be.equal('api/model')
  })

  it('should be primitive case', function () {
    let r1 = create('api/model') // @crud/pending/id5/api/model
    let r2 = create('api/model') // @crud/pending/id6/api/model
    let r3 = create('api/model') // @crud/pending/id7/api/model

    let results = [r1, r2, r3]

    for (let i = 0; i < results.length; i++) {
      let result = results[i]
      switch (result) {
        case r1: // @crud/pending/id5/api/model
          result.PENDING.should.be.equal('@crud/pending/id5/api/model')
          break

        case r2: // @crud/pending/id6/api/model
          result.PENDING.should.be.equal('@crud/pending/id6/api/model')
          break

        case r3: // @crud/pending/id7/api/model
          result.PENDING.should.be.equal('@crud/pending/id7/api/model')
          break
      }
    }

  })
})
