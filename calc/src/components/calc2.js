//STILL IN PROGRESS
//Please don't include this file
//********************************/
import React, { Component } from 'react';
import Calc from "./calc";
import Buttons from './buttons';


class Calc2 extends Component {
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
      {id:'reset',val:'C'},
      {id:12,val:'0'},
      {id:'multiply',val:'x'},
      {id:'.',val:'.'},
      {id:'(',val:'('},
      {id:')',val:')'},
      {id:'=',val:'='}

    ],
    result:0
  };
  //Creating instance of the Calc object for using methods
  calc=new Calc();
  build=``
  num=``
  handleEntry(el){
    console.log(el)
    if (this.state.result === 0 && el.val>0){
        this.setState({result:String(this.state.result+Number(el.val))})
        this.build+=`this.calc.add(${Number(el.val)})`
    }

    else if(typeof el.id === "number" || el.id === '.'){
         this.num+=`${el.id}`
         console.log(this.num) 
    }else{
        let number = Number(this.num)
        this.build+=`.${el.id}(${number})`
        this.num=``
    }
    
  }

  unitTest(){
    let calc =()=> new Calc();
    let res= [
      {cal:calc().add(6).add(5).subtract(1).multiply(2).divide(1).equal(),val:`calc.add(6).add(5).subtract(1).multiply(2).divide(1).equal()`},
      {cal:calc().add(5).add(6).equal(),val:`calc.add(5).add(6).equal()`},
      {cal:calc().add(5).add(1).equal(),val:`calc.add(5).add(1).equal()`},
      {cal:calc().add(0.1).multiply(0.2).equal(),val:`calc.add(0.1).multiply(0.2).equal()`}
    ]
    
  return res
  }
 

  
  render() {

    return (
    <div>
        <div className="container mt-3">
          <div className="border border-success col-md-6 offset-md-3 calculator-top">{this.state.result}</div>
          <div className="col-md-6 offset-md-3 p-0">
            {this.state.button.map(btn=>
            <Buttons key={btn.id} value={btn.val} id={btn.id} click={()=>this.handleEntry(btn)}/>
              )}
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

export default Calc2;
