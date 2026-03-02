import chalk from "chalk";

export default class PhiCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("phi <n>")
      .description("compute the Euler totient function of n")
      .action((n)=>this.phi(n));
  }

  phi(n:string){

    let num = Number(n);
    let result = num;

    for(let p=2;p*p<=num;p++){

      if(num%p===0){

        while(num%p===0)
          num/=p;

        result -= result/p;
      }
    }

    if(num>1)
      result -= result/num;

    console.log(chalk.yellow('\n'+`phi(${n})`) + " = " + chalk.green(result)+'\n');
  }

}