import React, { Fragment , Component } from 'react';

class Buttons extends Component {
  
    button  = <button className="btn btn-primary m-2 col-2" value={this.props.value} onClick={this.props.click}>{this.props.value}</button>;
    br=<br/>
  render() {
        if(this.props.id == 5 || this.props.id == 9 || this.props.id == 'reset') {
            return(<Fragment>{this.br}{this.button}</Fragment>)
        }else{
    
        return (
            <Fragment>{this.button}</Fragment>
           
        );
        }
  }
}

export default Buttons;