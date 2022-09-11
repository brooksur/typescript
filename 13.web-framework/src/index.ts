import { UserForm } from './views/UserForm'
import { User } from './models/User'

const user = User.buildUser({ name: 'Brooks', age: 27 })
const rootElement = document.getElementById('root') as HTMLElement
new UserForm(rootElement, user).render()
