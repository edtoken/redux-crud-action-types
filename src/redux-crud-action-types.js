let _uniqueId = 0

/**
 * Create crud action types  object
 * @param type short action type name
 * @returns {{PENDING: string, SUCCESS: string, ERROR: string}}
 */
export const create = (type) => {
  const PENDING = `${create.prefix}/pending/id${_uniqueId}/${type}`
  const SUCCESS = `${create.prefix}/success/id${_uniqueId}/${type}`
  const ERROR = `${create.prefix}/error/id${_uniqueId}/${type}`

  _uniqueId += 1

  return {
    PENDING,
    SUCCESS,
    ERROR
  }
}

create.prefix = '@crud'

/**
 * Restore short name from crud action type generated name
 * @param type
 * @returns {string}
 */
export const parse = (type) => {
  return type.substr(type.indexOf(create.prefix)).split('/').slice(3).join('/')
}
