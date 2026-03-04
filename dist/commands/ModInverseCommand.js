"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class ModInverseCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("modinv <a> <m>")
            .description("compute the modular inverse of a modulo m")
            .action((a, m) => this.modinv(a, m));
    }
    egcd(a, b) {
        if (b === 0)
            return [a, 1, 0];
        const [g, x1, y1] = this.egcd(b, a % b);
        return [g, y1, x1 - Math.floor(a / b) * y1];
    }
    modinv(a, m) {
        const A = Number(a);
        const M = Number(m);
        const [g, x] = this.egcd(A, M);
        if (g !== 1)
            console.log('\n' + chalk_1.default.red('no inverse') + '\n');
        else
            console.log('\n' + chalk_1.default.yellow(`modinv(${a},${m})`) + " = " + chalk_1.default.green((x % M + M) % M) + '\n');
    }
}
exports.default = ModInverseCommand;
