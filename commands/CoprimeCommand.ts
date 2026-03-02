import chalk from "chalk";

export default class CoprimeCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("coprime <a> <b>")
      .description("check if a and b are coprime")
      .action((a,b)=>this.coprime(a,b));
  }

  gcd(a:number,b:number){
    while(b!==0)
      [a,b] = [b,a%b];
    return a;
  }

  coprime(a:string,b:string){
    console.log();
    if (this.gcd(Number(a),Number(b))===1) {
      console.log(chalk.yellow(`coprime(${a},${b})`) + " = " + chalk.green("true"));
    } else {
      console.log(chalk.yellow(`coprime(${a},${b})`) + " = " + chalk.red("false"));
    }
    console.log();
  }
}