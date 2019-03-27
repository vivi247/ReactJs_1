import React, { Component } from 'react';
import Hello, { Hi} from './Hello';
import Test from './Test';
import './stylesheets/css1.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import CheckBox from './CheckBox';
class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {welcomeTitle:'Welcome to React'};
    }
    handleTitle(newTitle) {
        this.setState({welcomeTitle:newTitle});
    }
    render() {
        return <div>
        <Header/>
        <h1 className='welcome'>{this.state.welcomeTitle}</h1>
        <Hello title ='Single Component' updateTitle={this.handleTitle.bind(this)}/>
        {/* <Hello title ='Test Component'/> */}
        {/* <Hello/> */}
        <Hi/>
        <Test name='New Test'/>
        <Test name='Old Test'/>
        <CheckBox/>
        <Footer />
        </div>
    }
}

export default Welcome;