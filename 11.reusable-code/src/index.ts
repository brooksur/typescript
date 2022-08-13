import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'

const footballReader = new CsvFileReader('football.csv')

footballReader.read()

let manUnitedWins = 0

for (let match of footballReader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[1] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games!`)
