let _uniqueId = 0

/**
 * Create crud action types  object
 * @param type short action type name
 * @returns {{PENDING: string, SUCCESS: string, ERROR: string}}
 */
const create = function (type) {
  const PENDING = `${create.prefix}/pending/id${_uniqueId}/${type}`
  const SUCCESS = `${create.prefix}/success/id${_uniqueId}/${type}`
  const ERROR = `${create.prefix}/error/id${_uniqueId}/${type}`

  _uniqueId += 1

  const toString = () => {
    return PENDING
  }

  return Object.create({
    toString,
    valueOf: toString
  }, {
    PENDING: {
      writable: false,
      configurable: false,
      value: PENDING
    },
    SUCCESS: {
      writable: false,
      configurable: false,
      value: SUCCESS
    },
    ERROR: {
      writable: false,
      configurable: false,
      value: ERROR
    }
  })
}

create.prefix = '@crud'

/**
 * Restore short name from crud action type generated name
 * @param type
 * @returns {string}
 */
const parse = (type) => {
  type = ('' + type) // transform to primitive
  return type.substr(type.indexOf(create.prefix)).split('/').slice(3).join('/')
}

module.exports = {
  create,
  parse
}
