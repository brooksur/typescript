import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { ConsoleReport } from './report-targets/ConsoleReport'
import { WinsAnalysis } from './analyzers/WinsAnalyses'
import { Summary } from './Summary'

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())
summary.buildAndPrintReport(matchReader.matches)
