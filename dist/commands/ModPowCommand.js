"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class ModPowCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("modpow <a> <b> <m>")
            .description("compute (a^b) mod m")
            .action((a, b, m) => this.modpow(a, b, m));
    }
    modpow(a, b, m) {
        let base = Number(a);
        let exp = Number(b);
        const mod = Number(m);
        let res = 1;
        while (exp > 0) {
            if (exp % 2)
                res = (res * base) % mod;
            base = (base * base) % mod;
            exp = Math.floor(exp / 2);
        }
        console.log(chalk_1.default.yellow('\n' + `modpow(${a},${b},${m})`) + " = " + chalk_1.default.green(res) + '\n');
    }
}
exports.default = ModPowCommand;
