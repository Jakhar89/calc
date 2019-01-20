import React, { Fragment , Component } from 'react';

class Buttons extends Component {
  
    button  = <button className="btn btn-primary m-2 col-2 override" value={this.props.value} onClick={this.props.click}>{this.props.value}</button>;
    br=<br/>
  render() {
       
    
        return (
                 <Fragment>{this.button}</Fragment>
           
                );
        
  }
}

export default Buttons;