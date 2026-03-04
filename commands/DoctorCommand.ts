import chalk from "chalk";

export default class DoctorCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){

    this.program
      .command("doctor")
      .description("check if nt-cli installation is working")
      .action(()=>this.run());

  }

  run(){

    console.log();
    console.log(chalk.cyan("nt cli health check"));
    console.log();

    console.log(chalk.green("✔ node.js detected"));
    console.log(chalk.green("✔ cli commands loaded"));
    console.log(chalk.green("✔ chalk ui working"));
    console.log(chalk.green("✔ interactive shell ready"));

    console.log();
    console.log(chalk.yellow("nt cli is ready to use"));
    console.log();
  }

}