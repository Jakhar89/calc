 // handleCalc(el){
  //   el=String(el);
  //   //regex to split the string into array based upon non numbers
  //   let regx = /(\D)/;
  //   let search=el.search(regx);
    
  //   if (search !== -1){
  //     let split = el.split(regx);
    
  //     let first=false;
  //     let result=''
      
  //     //iterating over each string array item
  //     split.forEach((ele,i) => {
  //       //sett2ing the first input as initial number for the calc object
  //       if(!first){
  //         result+=this.calc.add(ele) 
  //         first=true; 
  //       }else{
  //         //switch case calling methods from calc object based upon ele vlue
  //         switch (ele) {
  //           case '+':
  //             result=this.calc.add(split[i+1])
  //             break;
  //           case '-':
  //             result=this.calc.subtract(split[i+1]);
  //             break;
  //           case 'x':
  //             result=this.calc.multiply(split[i+1]);
  //             break;
  //           case '/':
  //             result=this.calc.divide(split[i+1]);
  //             break;
  //         }
  //       }

  //     });
  //     this.handleEqual()
  //   }
  // }