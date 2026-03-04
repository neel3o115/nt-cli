"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class PhiCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("phi <n>")
            .description("compute the Euler totient function of n")
            .action((n) => this.phi(n));
    }
    phi(n) {
        let num = Number(n);
        let result = num;
        for (let p = 2; p * p <= num; p++) {
            if (num % p === 0) {
                while (num % p === 0)
                    num /= p;
                result -= result / p;
            }
        }
        if (num > 1)
            result -= result / num;
        console.log(chalk_1.default.yellow('\n' + `phi(${n})`) + " = " + chalk_1.default.green(result) + '\n');
    }
}
exports.default = PhiCommand;
