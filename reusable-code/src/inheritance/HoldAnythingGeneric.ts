class HoldAnything<T> {
  data?: T
}

const holdNumber = new HoldAnything<number>()
holdNumber.data = 5

const holdString = new HoldAnything<string>()
holdString.data = 'skripper'

const holdBoolean = new HoldAnything<boolean>()
holdBoolean.data = true
