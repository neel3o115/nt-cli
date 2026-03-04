"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class CoprimeCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("coprime <a> <b>")
            .description("check if a and b are coprime")
            .action((a, b) => this.coprime(a, b));
    }
    gcd(a, b) {
        while (b !== 0)
            [a, b] = [b, a % b];
        return a;
    }
    coprime(a, b) {
        console.log();
        if (this.gcd(Number(a), Number(b)) === 1) {
            console.log(chalk_1.default.yellow(`coprime(${a},${b})`) + " = " + chalk_1.default.green("true"));
        }
        else {
            console.log(chalk_1.default.yellow(`coprime(${a},${b})`) + " = " + chalk_1.default.red("false"));
        }
        console.log();
    }
}
exports.default = CoprimeCommand;
