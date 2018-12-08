import isObject from './validate/isObject'
import { insertPoint } from './flat'

const { hasOwnProperty } = Object.prototype
const PATH_MODE = {
  loose: '?',
  strict: '!',
}

export const isMergeable = (target) => {
  if (!isObject(target)) return false
  return !(target instanceof Date || target instanceof Error || target instanceof RegExp)
}

export const fastClone = obj => JSON.parse(JSON.stringify(obj))

export const shallowClone = obj => Object.assign(Object.create(Object.getPrototypeOf(obj)), obj)

// Object.values()
export const objectValues = (obj) => {
  if (!obj) return []
  return Object.keys(obj).map(k => obj[k])
}

// object only, not handle array.
export const deepMerge = (target = {}, source, { clone, removeUndefined } = {}) => {
  if (!isMergeable(source)) return source

  const dest = {}
  if (isMergeable(target)) {
    Object.keys(target).forEach((k) => {
      dest[k] = clone ? deepMerge({}, target[k], clone) : target[k]
      if (removeUndefined && dest[k] === undefined) delete dest[k]
    })
  }

  Object.keys(source).forEach((k) => {
    if (isMergeable(source[k]) && isMergeable(target[k])) {
      dest[k] = deepMerge(target[k], source[k], clone)
    } else {
      dest[k] = deepMerge({}, source[k], clone)
      if (removeUndefined && dest[k] === undefined) delete dest[k]
    }
  })

  return dest
}

export function* pathGenerator(raw) {
  const path = insertPoint(raw)
  const reg = /^\[(\d+)\]$/
  let index = 0
  let last = 0
  let prop = ''
  while (index >= 0) {
    index = path.indexOf('.', last)
    prop = path.substring(last, index === -1 ? undefined : index)

    let mode
    const lastChar = prop.charAt(prop.length - 1)
    if (lastChar === '?' || lastChar === '!') {
      mode = lastChar === '?' ? PATH_MODE.loose : PATH_MODE.strict
      prop = prop.substring(0, prop.length - 1)
    }

    // array index
    const match = reg.exec(prop)
    // eslint-disable-next-line
    if (match) prop = match[1]

    last = index + 1
    yield [prop, index === -1 ? undefined : path.substring(last), mode]
  }
}

export const deepSet = (target, path, value, options = {}) => {
  if (!isObject(target)) throw new Error('Target must be an object.')
  if (typeof path !== 'string') throw new Error('Path must be a string.')

  const { removeUndefined } = options
  const mergeOptions = { clone: true, removeUndefined }

  // empty root
  if (path === '') return deepMerge(options.forceSet ? {} : target, value, mergeOptions)

  let current = target
  for (const [prop, next] of pathGenerator(path)) {
    if (next) {
      const nextIsArray = /^\[\d+\]/.test(next)
      if (!current[prop]) current[prop] = nextIsArray ? [] : {}
      if (nextIsArray && !Array.isArray(current[prop])) {
        throw new Error(`Path ${path} expect an array.`)
      } else if (Array.isArray(current[prop]) && !nextIsArray) {
        throw new Error(`Path ${path} is an array, expect an object.`)
      }

      current = current[prop]
      continue
    }

    if (options.forceSet) {
      current[prop] = value
    } else {
      current[prop] = isMergeable(current[prop]) && isMergeable(value)
        ? deepMerge(current[prop], value, mergeOptions)
        : value
    }
    if (removeUndefined && value === undefined) delete current[prop]
  }
  return target
}

export const deepGet = (target, path, options = {}) => {
  if (!isObject(target)) throw new Error('Target must be an object.')
  if (typeof path !== 'string') throw new Error('Path must be a string.')

  // empty root
  if (path === '') return target
  const { defaultValue, strictMode } = options

  let current = target
  for (const [prop, , mode] of pathGenerator(path)) {
    const isStrict = mode === PATH_MODE.strict || (strictMode && defaultValue === undefined && mode !== PATH_MODE.loose)
    console.log(prop, mode, isStrict)
    if (hasOwnProperty.call(current, prop)) {
      current = current[prop]
    } else if (isStrict) {
      throw new Error(`Path ${path} is not exist.`)
    } else {
      current = defaultValue
      break
    }
  }

  return current
}
