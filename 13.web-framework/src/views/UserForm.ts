import { User } from '../models/User'

export class UserForm {
  constructor(public parent: HTMLElement, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover
    }
  }

  onButtonClick(): void {
    console.log('Hi there')
  }

  onHeaderHover(): void {
    console.log('Hi there')
  }

  template(): string {
    return `
      <div>
        <h1> User Form </h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button>Click me</button>
      </div>
    `
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':')

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  render(): void {
    const temp = document.createElement('template')
    temp.innerHTML = this.template()
    this.bindEvents(temp.content)
    this.parent.append(temp.content)
  }
}
