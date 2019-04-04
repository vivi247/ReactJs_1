import React, {Component} from 'react';

class ChildHook extends Component {

    componentWillMount() {
        console.log("Child componentWillMount")
    }

    componentDidMount() {
        console.log("Child componentDidMount")
    }

    componentWillReceiveProps() {
        console.log("Child componentWillReceiveProps")
    }

    shouldComponentUpdate() {
        console.log("Child shouldComponentUpdate")
        return false;
    }

    render() {
        console.log("Child render")
        return(
            <div>
                CHild Component {this.props.childValue}
            </div>
        )
    }
}


export default ChildHook;