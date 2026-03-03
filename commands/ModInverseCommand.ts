import chalk from "chalk";

export default class ModInverseCommand {

  program:any;

  constructor(program:any){
    this.program = program;
  }

  register(){
    this.program
      .command("modinv <a> <m>")
      .description("compute the modular inverse of a modulo m")
      .action((a,m)=>this.modinv(a,m));
  }

  egcd(a:number,b:number):[number,number,number]{

    if(b===0)
      return [a,1,0];

    const [g,x1,y1]=this.egcd(b,a%b);

    return [g,y1,x1-Math.floor(a/b)*y1];
  }

  modinv(a:string,m:string){

    const A = Number(a);
    const M = Number(m);

    const [g,x]=this.egcd(A,M);

    if(g!==1)
      console.log('\n'+chalk.red('no inverse')+'\n');
    else
      console.log('\n'+chalk.yellow(`modinv(${a},${m})`) + " = " + chalk.green((x%M+M)%M)+'\n');
  }

}