interface User {
  name: string
  age: number
  phone: string
  address: string
}

interface UserBuilder {
  setAge(value: number): UserBuilder
  setPhone(value: string): UserBuilder
  setAddress(value: string): UserBuilder
  build(): User
}
export const createUserBuilder = (name: string): UserBuilder => {
  let age: number
  let phone: string
  let address: string
  return {
    setAge(value: number): UserBuilder {
      age = value
      return this
    },
    setPhone(value: string): UserBuilder {
      phone = value
      return this
    },
    setAddress(value: string): UserBuilder {
      address = value
      return this
    },
    build(): User {
      return {
        name,
        age,
        phone,
        address,
      }
    },
  }
}
