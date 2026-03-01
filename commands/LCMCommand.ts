import chalk from "chalk";

export default class LCMCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("lcm <a> <b>")
      .description("compute the least common multiple of a and b")
      .action((a,b)=>this.lcm(a,b));
  }

  gcd(a:number,b:number){
    while(b!==0)
      [a,b] = [b,a%b];
    return a;
  }

  lcm(a:string,b:string){

    const x = Number(a);
    const y = Number(b);

    console.log(chalk.yellow('\n'+`lcm(${a},${b})`) + " = " + chalk.green(x*y/this.gcd(x,y))+'\n');
  }

}