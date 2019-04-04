import React, {Component} from 'react';
import ChildHook from './ChildHook';


class ParentHook extends Component {

    state = {
        name:'John',
        age:'29',
        value: 1
    };
   
    // constructor() {
    //     super();
    //     this.state ={
    //         name:'Mark',
    //         value: 1
    //     }
    //     console.log("constructor1");
    // };

    componentWillMount() {
        console.log("componentWillMount");
        // console.log(this.state.name);
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    shouldComponentUpdate() {
        return true;
    }

    changeButton() {
        console.log('changeButton');
        this.setState ((prev, props) => {
            return {value : prev.value+1}
        })
    }
    
    render() {
        console.log("Render");
        return (
            <div className='container text-center'>
                {this.state.name}
                <input type='button' value='Submit' onClick={this.changeButton.bind(this)}/><br/>
                Value:{this.state.value}
                <ChildHook childValue={this.state.value}/>
            </div>
        )
    }
}

export default ParentHook;