"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class PrimesCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("primes <n>")
            .description("list all prime numbers up to n")
            .action((n) => this.primes(n));
    }
    primes(n) {
        const N = Number(n);
        const sieve = new Array(N + 1).fill(true);
        sieve[0] = sieve[1] = false;
        for (let i = 2; i * i <= N; i++)
            if (sieve[i])
                for (let j = i * i; j <= N; j += i)
                    sieve[j] = false;
        const res = [];
        for (let i = 2; i <= N; i++)
            if (sieve[i])
                res.push(i);
        console.log(chalk_1.default.yellow('\n' + `primes(${n})`) + " = " + chalk_1.default.green(res.join(" ")) + '\n');
    }
}
exports.default = PrimesCommand;
