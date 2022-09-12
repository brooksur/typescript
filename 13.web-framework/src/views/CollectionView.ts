import { Collection } from '../models/Collection'

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(item: T, parent: Element): void

  render(): void {
    console.log('hello')
    this.parent.innerHTML = ''
    const temp = document.createElement('template')
    const models = this.collection.models
    console.log(models.length)
    for (let model of models) {
      console.log('model', model)
      const itemParent = document.createElement('div')
      this.renderItem(model, itemParent)
      temp.content.append(itemParent)
    }
    this.parent.append(temp.content)
  }
}
