import chalk from "chalk";

export default class SumDivCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("sumdiv <n>")
      .description("compute the sum of divisors of n")
      .action((n)=>this.sumdiv(n));
  }

  sumdiv(n:string){

    const num = Number(n);
    let sum=0;

    for(let i=1;i*i<=num;i++){

      if(num%i===0){

        sum+=i;

        if(i!==num/i)
          sum+=num/i;
      }
    }

    console.log(chalk.yellow('\n'+`sumdiv(${n})`) + " = " + chalk.green(sum)+'\n');
  }

}