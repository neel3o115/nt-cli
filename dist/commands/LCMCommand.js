"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class LCMCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("lcm <a> <b>")
            .description("compute the least common multiple of a and b")
            .action((a, b) => this.lcm(a, b));
    }
    gcd(a, b) {
        while (b !== 0)
            [a, b] = [b, a % b];
        return a;
    }
    lcm(a, b) {
        const x = Number(a);
        const y = Number(b);
        console.log(chalk_1.default.yellow('\n' + `lcm(${a},${b})`) + " = " + chalk_1.default.green(x * y / this.gcd(x, y)) + '\n');
    }
}
exports.default = LCMCommand;
