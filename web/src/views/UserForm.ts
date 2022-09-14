import { User, UserProps } from '../models/User'
import { View } from './View'

export class UserForm extends View<User, UserProps> {
  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input')

    if (input) {
      const name = input.value
      this.model.set({ name })
    }
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick
    }
  }

  template(): string {
    return `
      <div>
        <h1> User Form </h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input value=${this.model.get('name')} />
        <button class="set-name">Set Name</button>
        <button class="set-age">Random Age</button>
      </div>
    `
  }
}
