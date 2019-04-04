import React from 'react';
import FullCricketer from './FullCricketer';
import Player from './Player';
import {Switch, Route} from 'react-router-dom';

const Cricketer = () => (
    <div className='container'>
        <Switch>
            <Route exact path='/cricketer'
            component={FullCricketer}/>
            <Route path='/cricketer/:number' component={Player}/>
        </Switch>
    </div>
);

export default Cricketer;