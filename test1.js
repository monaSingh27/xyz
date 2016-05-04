var argv = require('yargs')
      .command('hello','calculation of two numbers',function (yargs){
         yargs.options({
         	num1:   { 
         	       	 demand:true,
         	       	 alais:'n1',
         	       	 description: 'First number should be entered here'
         	       	},
         	num2:   { 
         	       	 demand:true,
         	       	 alais:'n2',
         	       	 description: 'Second number should be entered here'
         	       	}
     
            }).help('help');
      })
      .help('help')
      .argv;

      var command =argv._[0];
      console.log(argv);

if(command==='hello'&& typeof argv.num1 !='undefined'&& typeof argv.num2 !='undefined')
	console.log('hello'+argv.num1+' '+argv.num2);
			






   /*  function cal(num1,opr,num2)
{
	    if(opr==='+')
		result=n1+n2;
		console.log('sum of'+argv.num1+''+argv.opr+''+argv.num2+': '+result);
		
	     else if(opr==='-')
		result=n1-n2;
		console.log('sub of'+argv.num1+''+argv.opr+''+argv.num2+': '+result);

		else if(opr==='*')
		result=n1*n2;
		console.log('mul of'+argv.num1+''+argv.opr+''+argv.num2+': '+result);

		else if(opr==='/')
		result=n1/n2;
		console.log('division of'+argv.num1+''+argv.opr+''+argv.num2+': '+result); 

}
*/
