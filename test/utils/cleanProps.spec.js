import cleanProps from '../../src/utils/cleanProps'

describe('cleanProps.js[cleanProps]', () => {
  test('should clean if needed', () => {
    const props = {
      a: 1,
      delay: 1,
      formDatum: 1,
    }
    expect(cleanProps(props)).toEqual({ a: 1 })
    expect(props).toEqual({ a: 1, delay: 1, formDatum: 1 })
  })
})
