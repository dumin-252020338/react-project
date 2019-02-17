import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// import './redux/index';
import {reducer, addCannon, removeCannon} from "./redux2/index";
const store = createStore(reducer)

function render(){
    ReactDOM.render(
        <App 
        store={store}
        add={addCannon}
        remove={removeCannon}
        />, document.getElementById('root'));
}
render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
