import chalk from "chalk";

export default class PrimesCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("primes <n>")
      .description("list all prime numbers up to n")
      .action((n)=>this.primes(n));
  }

  primes(n:string){

    const N = Number(n);

    const sieve = new Array(N+1).fill(true);

    sieve[0]=sieve[1]=false;

    for(let i=2;i*i<=N;i++)
      if(sieve[i])
        for(let j=i*i;j<=N;j+=i)
          sieve[j]=false;

    const res=[];

    for(let i=2;i<=N;i++)
      if(sieve[i]) res.push(i);

    console.log(chalk.yellow('\n'+`primes(${n})`) + " = " + chalk.green(res.join(" "))+'\n');
  }

}