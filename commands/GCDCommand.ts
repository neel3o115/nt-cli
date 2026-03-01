import chalk from "chalk";

export default class GCDCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("gcd <a> <b>")
      .description("compute the greatest common divisor of a and b")
      .action((a,b)=>this.gcd(a,b));
  }

  gcd(a:string,b:string){

    let x = Number(a);
    let y = Number(b);

    while(y!==0)
      [x,y] = [y,x%y];

    console.log();
    console.log(chalk.yellow(`gcd(${a},${b})`) + " = " + chalk.green(x));
    console.log();
  }
}