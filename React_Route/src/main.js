import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import './Stylesheets/mystyles.css';
import ParentHook from './hooks/ParentHook';

// ReactDOM.render((<BrowserRouter>
//     <App/>
// </BrowserRouter>)
//     ,
//     document.getElementById("container"));

ReactDOM.render((
    <ParentHook/>
)
    ,
    document.getElementById("container"));
