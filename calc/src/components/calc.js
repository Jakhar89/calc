class Calc {
    res=0;  
  
    add=(num=0)=>{
        this.res+=Number(num);
        return this;
    };
    subtract=(num=0)=>{
        this.res-=Number(num);
        return this;
    };
    multiply=(num=0)=>{
        this.res*=Number(num);
        return this;
    };
    divide=(num=0)=>{
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