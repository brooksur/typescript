"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        console.log(matches);
        for (let match of matches) {
            console.log(match[1]);
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `${this.team} won ${wins} games!`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
