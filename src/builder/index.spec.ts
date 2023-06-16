import { createUserBuilder } from '.'

describe('Builder Pattern', () => {
  it('builds a user object with correct properties', () => {
    const user = createUserBuilder('John').setAge(25).setPhone('1234567890').setAddress('123 Main St').build()

    expect(user).toEqual({
      name: 'John',
      age: 25,
      phone: '1234567890',
      address: '123 Main St',
    })
  })
})
