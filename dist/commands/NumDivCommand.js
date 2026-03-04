"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class NumDivCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("numdiv <n>")
            .description("count the number of divisors of n")
            .action((n) => this.numdiv(n));
    }
    numdiv(n) {
        const num = Number(n);
        let count = 0;
        for (let i = 1; i * i <= num; i++)
            if (num % i === 0)
                count += (i * i === num) ? 1 : 2;
        console.log(chalk_1.default.yellow('\n' + `numdiv(${n})`) + " = " + chalk_1.default.green(count) + '\n');
    }
}
exports.default = NumDivCommand;
