class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }

  @logError
  pilot(): void {
    throw new Error('Swish')
    console.log('swish')
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  console.log('target', target)
  console.log('key', key)
}
