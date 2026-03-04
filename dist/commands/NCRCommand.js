"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class NCRCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("ncr <n> <r>")
            .description("compute the binomial coefficient C(n,r)")
            .action((n, r) => this.ncr(n, r));
    }
    fact(n) {
        let res = 1;
        for (let i = 2; i <= n; i++)
            res *= i;
        return res;
    }
    ncr(n, r) {
        const N = Number(n);
        const R = Number(r);
        console.log(chalk_1.default.yellow('\n' + `ncr(${n},${r})`) + " = " + chalk_1.default.green(this.fact(N) / (this.fact(R) * this.fact(N - R))) + '\n');
    }
}
exports.default = NCRCommand;
