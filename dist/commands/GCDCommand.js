"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class GCDCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("gcd <a> <b>")
            .description("compute the greatest common divisor of a and b")
            .action((a, b) => this.gcd(a, b));
    }
    gcd(a, b) {
        let x = Number(a);
        let y = Number(b);
        while (y !== 0)
            [x, y] = [y, x % y];
        console.log();
        console.log(chalk_1.default.yellow(`gcd(${a},${b})`) + " = " + chalk_1.default.green(x));
        console.log();
    }
}
exports.default = GCDCommand;
