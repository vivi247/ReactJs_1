import React from 'react';
import Home from './Home';
import Cricketer from './Cricketer';
import Schedule from './Schedule';
import PageNotFound from './pagenotfound';
import {Switch,Route,Redirect} from 'react-router-dom';

 const Main = () => (
    <Switch>
        <Route exact path='/' 
           render={() => (<Redirect to='/home' />)} />
        <Route path='/home' component ={Home}/>
        <Route path='/cricketer' component ={Cricketer}/>
        <Route path='/schedule' component={Schedule}/>
        <Route path='*' component={PageNotFound}/>
    </Switch>
);

export default Main;