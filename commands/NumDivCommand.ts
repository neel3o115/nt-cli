import chalk from "chalk";

export default class NumDivCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("numdiv <n>")
      .description("count the number of divisors of n")
      .action((n)=>this.numdiv(n));
  }

  numdiv(n:string){

    const num = Number(n);

    let count=0;

    for(let i=1;i*i<=num;i++)
      if(num%i===0)
        count += (i*i===num)?1:2;

    console.log(chalk.yellow('\n'+`numdiv(${n})`) + " = " + chalk.green(count)+'\n');
  }

}