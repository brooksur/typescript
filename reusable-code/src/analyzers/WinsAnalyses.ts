import { Analyzer } from '../Summary'
import { MatchData } from '../MatchData'
import { MatchResult } from '../MatchResult'

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]) {
    let wins = 0
    console.log(matches)

    for (let match of matches) {
      console.log(match[1])
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (match[1] === this.team && match[5] === MatchResult.AwayWin) {
        wins++
      }
    }

    return `${this.team} won ${wins} games!`
  }
}
