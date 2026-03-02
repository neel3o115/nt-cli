import chalk from "chalk";

export default class ModPowCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("modpow <a> <b> <m>")
      .description("compute (a^b) mod m")
      .action((a,b,m)=>this.modpow(a,b,m));
  }

  modpow(a:string,b:string,m:string){

    let base = Number(a);
    let exp = Number(b);
    const mod = Number(m);

    let res = 1;

    while(exp>0){

      if(exp%2)
        res = (res*base)%mod;

      base = (base*base)%mod;

      exp = Math.floor(exp/2);
    }

    console.log(chalk.yellow('\n'+`modpow(${a},${b},${m})`) + " = " + chalk.green(res)+'\n');
  }

}