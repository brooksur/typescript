import { Model, HasId } from '../models/Model'

export abstract class View<T extends Model<K>, K extends HasId> {
  constructor(public parent: HTMLElement, public model: T) {
    this.bindModel()
  }

  abstract eventsMap(): { [key: string]: () => void }
  abstract template(): string

  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
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
    this.parent.innerHTML = ''
    const temp = document.createElement('template')
    temp.innerHTML = this.template()
    this.bindEvents(temp.content)
    this.parent.append(temp.content)
  }
}
