import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux'
import {reducer, addGoods, removeGoods} from './components/redux/redux'
const store = createStore(reducer)

function render(){
    ReactDOM.render(
        <App 
            store={store}
            add={addGoods}
            remove={removeGoods}
        />, 
        document.getElementById('root')
    );
} 
render()
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
