class Calc {
    res=0;  
  
    add=(num)=>{
        this.res+=Number(num);
        return this;
    };
    subtract=(num)=>{
        this.res-=Number(num);
        return this;
    };
    multiply=(num)=>{
        this.res*=Number(num);
        return this;
    };
    divide=(num)=>{
        this.res/=Number(num);
        return this;
    }
    equal=()=>{
        return this.res;
    }
    reset=()=>{
        this.res=0
        return this.res;
    }
        
    
}

export default Calc;