import chalk from "chalk";

export default class NCRCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("ncr <n> <r>")
      .description("compute the binomial coefficient C(n,r)")
      .action((n,r)=>this.ncr(n,r));
  }

  fact(n:number){

    let res=1;

    for(let i=2;i<=n;i++)
      res*=i;

    return res;
  }

  ncr(n:string,r:string){

    const N = Number(n);
    const R = Number(r);

    console.log(chalk.yellow('\n'+`ncr(${n},${r})`) + " = " + chalk.green(this.fact(N)/(this.fact(R)*this.fact(N-R)))+'\n');
  }

}