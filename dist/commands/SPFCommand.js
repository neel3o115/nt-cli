"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class SPFCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("spf <n>")
            .description("compute the smallest prime factor of each number up to n")
            .action((n) => this.spf(n));
    }
    spf(n) {
        const N = Number(n);
        const spf = new Array(N + 1);
        for (let i = 0; i <= N; i++)
            spf[i] = i;
        for (let i = 2; i * i <= N; i++) {
            if (spf[i] === i) {
                for (let j = i * i; j <= N; j += i)
                    if (spf[j] === j)
                        spf[j] = i;
            }
        }
        console.log(chalk_1.default.yellow(`\nspf table (n = ${N})\n`));
        const chunk = 10; // numbers per row
        for (let i = 2; i <= N; i += chunk) {
            const nums = [];
            const vals = [];
            for (let j = i; j < i + chunk && j <= N; j++) {
                nums.push(j.toString().padStart(3));
                vals.push(spf[j].toString().padStart(3));
            }
            console.log(chalk_1.default.cyan("number: ") + nums.join(" "));
            console.log(chalk_1.default.green("spf:    ") + vals.join(" "));
            console.log();
        }
    }
}
exports.default = SPFCommand;
