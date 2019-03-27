import React from 'react';

const Test = (props) => (
    <div><p className="text-center">This is a {props.name} paragragh</p></div>
    
)

export function Test1(props) {
    return <p className="text-center">{props.get}!. {props.children}</p>

}

Test1.defaultProps = {
    get:'Test1'
}

export default Test;