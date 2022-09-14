import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([
  5, 88, 6, 2, 0, -7, 444, 987, 15689, 44, 88.05, 66, 4895, 4
])
numbersCollection.sort()

const charactersCollection = new CharactersCollection('zyXTaaaASDFFDAkkk!')
charactersCollection.sort()

const linkedList = new LinkedList()
linkedList.add(2)
linkedList.add(1)
linkedList.add(0)
linkedList.add(-1)
linkedList.add(-2)
linkedList.sort()

console.log(`
  -------------------------------------------------------

    numbers:     ${numbersCollection.collection.join(' -> ')}
    characters:  ${charactersCollection.collection}
    linked list: ${linkedList.print()}

  -------------------------------------------------------
`)
