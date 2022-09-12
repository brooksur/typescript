import { Model, HasId } from '../models/Model'

export abstract class View<T extends Model<K>, K extends HasId> {
  regions: { [key: string]: Element } = {}

  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  abstract template(): string

  regionsMap(): { [key: string]: string } {
    return {}
  }

  eventsMap(): { [key: string]: () => void } {
    return {}
  }

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

  mapRegions(frag: DocumentFragment): void {
    const regionsMap = this.regionsMap()

    for (let key in regionsMap) {
      const selector = regionsMap[key]
      const element = frag.querySelector(selector)
      if (element) {
        this.regions[key] = element
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = ''
    const temp = document.createElement('template')
    temp.innerHTML = this.template()
    this.bindEvents(temp.content)
    this.mapRegions(temp.content)
    this.onRender()
    this.parent.append(temp.content)
  }
}
