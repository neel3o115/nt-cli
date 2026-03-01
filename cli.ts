#!/usr/bin/env node

import readline from "readline";
import { Command } from "commander";

import GCDCommand from "./commands/GCDCommand";
import LCMCommand from "./commands/LCMCommand";
import IsPrimeCommand from "./commands/IsPrimeCommand";
import PrimesCommand from "./commands/PrimesCommand";
import FactorCommand from "./commands/FactorCommand";
import PhiCommand from "./commands/PhiCommand";
import ModPowCommand from "./commands/ModPowCommand";
import CoprimeCommand from "./commands/CoprimeCommand";
import DivisorsCommand from "./commands/DivisorsCommand";
import NumDivCommand from "./commands/NumDivCommand";
import SumDivCommand from "./commands/SumDivCommand";
import NCRCommand from "./commands/NCRCommand";
import ModInverseCommand from "./commands/ModInverseCommand";
import SPFCommand from "./commands/SPFCommand";
import DoctorCommand from "./commands/DoctorCommand";

const program = new Command();

function startInteractive(program: any) {

  const rl = readline.createInterface({
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
    } catch (err) {
      console.log("invalid command");
    }

    rl.prompt();
  });
}

new GCDCommand(program).register();
new LCMCommand(program).register();
new IsPrimeCommand(program).register();
new PrimesCommand(program).register();
new FactorCommand(program).register();
new PhiCommand(program).register();
new ModPowCommand(program).register();
new CoprimeCommand(program).register();
new DivisorsCommand(program).register();
new NumDivCommand(program).register();
new SumDivCommand(program).register();
new NCRCommand(program).register();
new ModInverseCommand(program).register();
new SPFCommand(program).register();
new DoctorCommand(program).register();

if (process.argv.length <= 2) {
  startInteractive(program);
} else {
  program.parse(process.argv);
}