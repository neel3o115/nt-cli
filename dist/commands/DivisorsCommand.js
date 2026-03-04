"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class DivisorsCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("divisors <n>")
            .description("list all divisors of n")
            .action((n) => this.divisors(n));
    }
    divisors(n) {
        const num = Number(n);
        const res = [];
        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                res.push(i);
                if (i !== num / i)
                    res.push(num / i);
            }
        }
        res.sort((a, b) => a - b);
        console.log();
        console.log(chalk_1.default.yellow(`divisors(${n})`) + " = " + chalk_1.default.green(res.join(" ")));
        console.log();
    }
}
exports.default = DivisorsCommand;
