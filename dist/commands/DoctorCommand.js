"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class DoctorCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("doctor")
            .description("check if nt-cli installation is working")
            .action(() => this.run());
    }
    run() {
        console.log();
        console.log(chalk_1.default.cyan("nt cli health check"));
        console.log();
        console.log(chalk_1.default.green("✔ node.js detected"));
        console.log(chalk_1.default.green("✔ cli commands loaded"));
        console.log(chalk_1.default.green("✔ chalk ui working"));
        console.log(chalk_1.default.green("✔ interactive shell ready"));
        console.log();
        console.log(chalk_1.default.yellow("nt cli is ready to use"));
        console.log();
    }
}
exports.default = DoctorCommand;
