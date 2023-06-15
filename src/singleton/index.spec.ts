import { getInstance } from '.'

describe('Singleton Pattern', () => {
  it('should return the same instance', () => {
    const instance1 = getInstance()
    const instance2 = getInstance()

    expect(instance1).toBe(instance2)
  })
})
