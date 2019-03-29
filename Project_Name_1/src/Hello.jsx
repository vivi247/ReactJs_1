import React, { Component } from 'react';
import { Test1 } from './Test';

class Hello extends Component {
    handleTilte(evt) {
        let title = evt.target.value;
        this.props.updateTitle(title);
    }
    render() {
        return (
        <div>
            <h2 className='text-alert text-center'>Hello to {this.props.title}!</h2>
            <input type='text' onChange={this.handleTilte.bind(this)}/>
        </div>);
    }
    static get defaultProps() {
        
        return {
            title :'Vivek'
    }
}
}

export class Hi extends Component {
    constructor() {
        super();
        this.state = {inputText:''};
    }
    handleText(evt){ 
        let text = evt.target.value;
        this.setState((prev, props) => {
            return {inputText:text};
        });
       
        // this.setState({inputText:text});
    }
    render() {
        return (
        <div className='text-center'>
        <input type='text' value={this.state.inputText} onChange={this.handleText.bind(this)}></input>
        <Test1 get={this.state.inputText}>It just a Beginning</Test1>
        </div>);
    }


}

// Hello.defaultProps ={
//     name :'Vivek'
// }
export default Hello;