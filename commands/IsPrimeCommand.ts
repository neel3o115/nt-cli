import chalk from "chalk";

export default class IsPrimeCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("isprime <n>")
      .description("check if n is prime")
      .action((n)=>this.isPrime(n));
  }

  isPrime(n:string){

    const num = Number(n);

    if(num<2)
      return console.log('\n'+chalk.yellow(`isprime(${n})`) + " = " + chalk.red("false")+'\n');

    for(let i=2;i*i<=num;i++)
      if(num%i===0)
        return console.log('\n'+chalk.yellow(`isprime(${n})`) + " = " + chalk.red("false")+'\n');

    console.log(chalk.yellow('\n'+`isprime(${n})`) + " = " + chalk.green("true")+'\n');
  }

}