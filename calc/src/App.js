import React, { Component } from 'react';
import Calc from "./calc";
import Buttons from './buttons';
import './App.css';

class App extends Component {
  state={
    button:[
      {id:1,val:'1'},
      {id:2,val:'2'},
      {id:3,val:'3'},
      {id:'add',val:'+'},
      {id:5,val:'4'},
      {id:6,val:'5'},
      {id:7,val:'6'},
      {id:'subtract',val:'-'},
      {id:9,val:'7'},
      {id:10,val:'8'},
      {id:11,val:'9'},
      {id:'divide',val:'/'},
      {id:'reset',val:'R'},
      {id:12,val:'0'},
      {id:'multiply',val:'*'},
    ],
    result:0
  };
  calc=new Calc();
  handleEntry(el){
    if(el.id === 'reset')
      return this.handleReset()
    //console.log('running');
    if (this.state.result === 0 && el.val>0)
      this.setState({result:String(this.state.result+Number(el.val))})
    else
      this.setState({result:this.state.result+=el.val})
    
  }
  handleReset(el){
    this.setState({result:this.calc.reset()})
  }

  handleCalc(el){
    el=String(el);
    //regex to split the string into array based upon non numbers
    let regx = /(\D)/;
    let search=el.search(regx);
    
    if (search !== -1){
      let split = el.split(regx);
    
      let first=false;
      let result=''
      
      //iterating over each string array item
      split.forEach((ele,i) => {
        //sett2ing the first input as initial number for the calc object
        if(!first){
          result=this.calc.add(ele) 
          first=true; 
        }else{
          //switch case calling methods from calc object based upon ele vlue
          switch (ele) {
            case '+':
              result=this.calc.add(split[i+1])
              break;
            case '-':
              result=this.calc.subtract(split[i+1]);
              break;
            case '*':
              result=this.calc.multiply(split[i+1]);
              break;
            case '/':
              result=this.calc.divide(split[i+1]);
              break;
          }
        }

      });
      this.handleEqual()
    }
  }

  handleEqual(el){
    this.setState({result:this.calc.equal()})
    this.calc=new Calc()
  }
  unitTest(){
    let calc = new Calc();
    let res= [
      {cal:calc.add(6).add(5).subtract(1).multiply(2).divide(1).equal()==20,val:`calc.add(6).add(5).subtract(1).multiply(2).divide(1).equal()`},
      {cal:calc.add(5).add(6).equal()>11,val:`calc.add(5).add(6).equal()`},
      {cal:calc.add(5).add(1).equal()>6,val:`calc.add(5).add(1).equal()`},
      {cal:calc.add(0.1).multiply(0.2).equal()>0.02,val:`calc.add(0.1).multiply(0.2).equal()`}
    ]
    
  return res
  }

  
  render() {
    return (
      <div className="App">
        <div className="container mt-3">
          <div className="border border-success col-md-6 offset-md-3 calculator-top">{this.state.result}</div>
          <div className="col-md-6 offset-md-3 p-0">
            {this.state.button.map(btn=>
            <Buttons key={btn.id} value={btn.val} id={btn.id} click={()=>this.handleEntry(btn)}/>
              )}
            <Buttons key='eq' id='eq' value="=" click={()=>this.handleCalc(this.state.result)}/>
          </div>
        </div>
        <div className="container mt-3">
          <h2>Unit Tests</h2>
          <div className="row">
            {this.unitTest().map((el,i)=>{return <div key={i} className="col-12 word-wrap">{el.val} : <b>{String(el.cal).toLocaleUpperCase()}</b></div>})}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
