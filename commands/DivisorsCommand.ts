import chalk from "chalk";

export default class DivisorsCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("divisors <n>")
      .description("list all divisors of n")
      .action((n)=>this.divisors(n));
  }

  divisors(n:string){

    const num = Number(n);
    const res=[];

    for(let i=1;i*i<=num;i++){

      if(num%i===0){

        res.push(i);

        if(i!==num/i)
          res.push(num/i);
      }
    }

    res.sort((a,b)=>a-b);
    console.log();
    console.log(chalk.yellow(`divisors(${n})`) + " = " + chalk.green(res.join(" ")));
    console.log();
  }

}  