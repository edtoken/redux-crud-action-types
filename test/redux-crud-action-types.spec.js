import 'should'

import { create, parse } from '../src/redux-crud-action-types'

describe('create', function () {

  it('should be create', function () {
    const result = create('api/model')

    JSON.stringify(result).should.be.equal(JSON.stringify({
      PENDING: '@crud/pending/id0/api/model',
      SUCCESS: '@crud/success/id0/api/model',
      ERROR: '@crud/error/id0/api/model'
    }))
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

})
