import chalk from "chalk";

export default class FactorCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("factor <n>")
      .description("compute the prime factorization of n")
      .action((n)=>this.factor(n));
  }

  factor(n:string){

    let num = Number(n);

    const res:any = {};

    for(let i=2;i*i<=num;i++){

      while(num%i===0){

        res[i] = (res[i] || 0) + 1;

        num /= i;
      }
    }

    if(num>1) res[num] = 1;

    /* ----- normal factorization output ----- */

    console.log();
    console.log(
      chalk.yellow(`factor(${n})`) +
      " = " +
      chalk.green(
        Object.entries(res)
          .map(([p,e]) => `${p}^${e}`)
          .join(" * ")
      )
    );

    console.log();

    /* ----- tree visualization ----- */

    const factors:number[] = [];

    for(const [p,e] of Object.entries(res)){
      for(let i=0;i<Number(e);i++)
        factors.push(Number(p));
    }

    console.log(chalk.cyan(n));

    factors.forEach((f,i)=>{

      const isLast = i === factors.length - 1;

      const branch = isLast ? chalk.cyan(" └─ ") : chalk.cyan(" ├─ ");

      console.log(
        chalk.gray(branch) + chalk.green(f)
      );

    });

    console.log();
  }

}