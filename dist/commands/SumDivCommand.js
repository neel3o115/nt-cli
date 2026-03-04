"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class SumDivCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("sumdiv <n>")
            .description("compute the sum of divisors of n")
            .action((n) => this.sumdiv(n));
    }
    sumdiv(n) {
        const num = Number(n);
        let sum = 0;
        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                sum += i;
                if (i !== num / i)
                    sum += num / i;
            }
        }
        console.log(chalk_1.default.yellow('\n' + `sumdiv(${n})`) + " = " + chalk_1.default.green(sum) + '\n');
    }
}
exports.default = SumDivCommand;
