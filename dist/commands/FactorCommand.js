"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class FactorCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("factor <n>")
            .description("compute the prime factorization of n")
            .action((n) => this.factor(n));
    }
    factor(n) {
        let num = Number(n);
        const res = {};
        for (let i = 2; i * i <= num; i++) {
            while (num % i === 0) {
                res[i] = (res[i] || 0) + 1;
                num /= i;
            }
        }
        if (num > 1)
            res[num] = 1;
        /* ----- normal factorization output ----- */
        console.log();
        console.log(chalk_1.default.yellow(`factor(${n})`) +
            " = " +
            chalk_1.default.green(Object.entries(res)
                .map(([p, e]) => `${p}^${e}`)
                .join(" * ")));
        console.log();
        /* ----- tree visualization ----- */
        const factors = [];
        for (const [p, e] of Object.entries(res)) {
            for (let i = 0; i < Number(e); i++)
                factors.push(Number(p));
        }
        console.log(chalk_1.default.cyan(n));
        factors.forEach((f, i) => {
            const isLast = i === factors.length - 1;
            const branch = isLast ? chalk_1.default.cyan(" └─ ") : chalk_1.default.cyan(" ├─ ");
            console.log(chalk_1.default.gray(branch) + chalk_1.default.green(f));
        });
        console.log();
    }
}
exports.default = FactorCommand;
