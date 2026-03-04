import chalk from "chalk";

export default class SPFCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("spf <n>")
      .description("compute the smallest prime factor of each number up to n")
      .action((n)=>this.spf(n));
  }

  spf(n:string){

    const N = Number(n);

    const spf = new Array(N+1);

    for(let i=0;i<=N;i++)
      spf[i]=i;

    for(let i=2;i*i<=N;i++){

      if(spf[i]===i){

        for(let j=i*i;j<=N;j+=i)
          if(spf[j]===j)
            spf[j]=i;
      }
    }

    console.log(chalk.yellow(`\nspf table (n = ${N})\n`));

    const chunk = 10; // numbers per row

    for(let i=2;i<=N;i+=chunk){

      const nums:string[] = [];
      const vals:string[] = [];

      for(let j=i;j<i+chunk && j<=N;j++){
        nums.push(j.toString().padStart(3));
        vals.push(spf[j].toString().padStart(3));
      }

      console.log(chalk.cyan("number: ") + nums.join(" "));
      console.log(chalk.green("spf:    ") + vals.join(" "));
      console.log();
    }

  }

}