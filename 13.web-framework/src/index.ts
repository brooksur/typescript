import { User } from './User'

const user = new User({ name: 'name', age: 20 })

user.set({ name: 'new name', age: 999 })

user.on('change', () => {
  console.log('change')
})
user.on('change1', () => {
  console.log('change')
})
user.on('change1', () => {
  console.log('change')
})

user.trigger('change11')
