"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class IsPrimeCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("isprime <n>")
            .description("check if n is prime")
            .action((n) => this.isPrime(n));
    }
    isPrime(n) {
        const num = Number(n);
        if (num < 2)
            return console.log('\n' + chalk_1.default.yellow(`isprime(${n})`) + " = " + chalk_1.default.red("false") + '\n');
        for (let i = 2; i * i <= num; i++)
            if (num % i === 0)
                return console.log('\n' + chalk_1.default.yellow(`isprime(${n})`) + " = " + chalk_1.default.red("false") + '\n');
        console.log(chalk_1.default.yellow('\n' + `isprime(${n})`) + " = " + chalk_1.default.green("true") + '\n');
    }
}
exports.default = IsPrimeCommand;
