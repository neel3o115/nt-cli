#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const commander_1 = require("commander");
const GCDCommand_1 = __importDefault(require("./commands/GCDCommand"));
const LCMCommand_1 = __importDefault(require("./commands/LCMCommand"));
const IsPrimeCommand_1 = __importDefault(require("./commands/IsPrimeCommand"));
const PrimesCommand_1 = __importDefault(require("./commands/PrimesCommand"));
const FactorCommand_1 = __importDefault(require("./commands/FactorCommand"));
const PhiCommand_1 = __importDefault(require("./commands/PhiCommand"));
const ModPowCommand_1 = __importDefault(require("./commands/ModPowCommand"));
const CoprimeCommand_1 = __importDefault(require("./commands/CoprimeCommand"));
const DivisorsCommand_1 = __importDefault(require("./commands/DivisorsCommand"));
const NumDivCommand_1 = __importDefault(require("./commands/NumDivCommand"));
const SumDivCommand_1 = __importDefault(require("./commands/SumDivCommand"));
const NCRCommand_1 = __importDefault(require("./commands/NCRCommand"));
const ModInverseCommand_1 = __importDefault(require("./commands/ModInverseCommand"));
const SPFCommand_1 = __importDefault(require("./commands/SPFCommand"));
const DoctorCommand_1 = __importDefault(require("./commands/DoctorCommand"));
const program = new commander_1.Command();
function startInteractive(program) {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "(nt) "
    });
    console.log("number theory cli interactive mode");
    console.log("type 'exit' to quit\n");
    rl.prompt();
    rl.on("line", (line) => {
        const args = line.trim().split(" ");
        if (args[0] === "exit") {
            rl.close();
            return;
        }
        try {
            program.parse(["node", "nt", ...args]);
        }
        catch (err) {
            console.log("invalid command");
        }
        rl.prompt();
    });
}
new GCDCommand_1.default(program).register();
new LCMCommand_1.default(program).register();
new IsPrimeCommand_1.default(program).register();
new PrimesCommand_1.default(program).register();
new FactorCommand_1.default(program).register();
new PhiCommand_1.default(program).register();
new ModPowCommand_1.default(program).register();
new CoprimeCommand_1.default(program).register();
new DivisorsCommand_1.default(program).register();
new NumDivCommand_1.default(program).register();
new SumDivCommand_1.default(program).register();
new NCRCommand_1.default(program).register();
new ModInverseCommand_1.default(program).register();
new SPFCommand_1.default(program).register();
new DoctorCommand_1.default(program).register();
if (process.argv.length <= 2) {
    startInteractive(program);
}
else {
    program.parse(process.argv);
}
