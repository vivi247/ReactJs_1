import React from 'react';

class CheckBox extends React.Component {
    constructor() {
        super();
        this.state = {check:true};

        //1 way of binding
        // this.handleCheck = this.handleCheck.bind(this);
    }

     handleCheck() {
         //Synchronus  way
        // this.setState({check:!this.state.check});

        //Async
        this.setState((previous, props) => {
            return {check: !previous.check};
        });
    };
    render() {
        var msg;
        if(this.state.check) {
            msg = 'checked';
        } else {
            msg = 'unchecked';
        }
        return (
            <div className='text-center container'>
                    <input name='testCheck' type='checkbox' defaultChecked='true' 
                    //1 way
                    // onChange={this.handleCheck} 
                    // 2 way
                    // onChange = {this.handleCheck.bind(this)}
                    // 3 way Arrow function
                    onChange = { () => {
                        //this.setState({check:!this.state.check})
                        //OR
                        this.handleCheck();
                    }}
                    value={this.state.check}/>
                    <p>This box is <strong>{msg}</strong></p>
            </div>
        )
    }
}

export default CheckBox;