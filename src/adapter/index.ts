const adaptee = () => {
  return {
    method(): void {
      console.log('`method` of Adaptee is being called')
    },
  }
}

interface Target {
  call(): void
}

export const adapter = (): Target => {
  return {
    call(): void {
      console.log("Adapter's `call` method is being called")
      adaptee().method()
    },
  }
}
