import { adapter } from '.'

describe('Adapter Pattern', () => {
  it('should call Adaptee method and return the argument', () => {
    const adapterInstance = adapter()

    const consoleLogSpy = jest.spyOn(console, 'log')

    adapterInstance.call()

    expect(consoleLogSpy).toHaveBeenCalledWith("Adapter's `call` method is being called")
    expect(consoleLogSpy).toHaveBeenCalledWith('`method` of Adaptee is being called')

    consoleLogSpy.mockRestore()
  })
})
