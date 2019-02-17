import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux'
import {reducer, addGoods, removeGoods} from './components/redux/redux'
const store = createStore(reducer)

const Koa = require('koa')
const views = require('koa-views')
const body = require('koa-body')
const {join} = require('path')

const Router = require('koa-router')
const cors = require('kcors')
const app = new Koa()

const router = new Router()
//配置视图模板
// app.use(views(join(__dirname, 'views'), {
//     extension: "pug"  //设置为pug模板
//   }))
// app.use(cors())
//     .use(require('koa-static')(__dirname + '/static/img'))

// const {topNavData1, topNavData2} = require('./data/home/topNavData')
function render(){
    ReactDOM.render(
        <App 
            // topNavData1={topNavData1}
            // topNavData2={topNavData2}
        />, 
        document.getElementById('root')
    );
} 
render()
// router.get('/', function(ctx){
//     ctx.body = ReactDOM.render(
//         <App 
//             topNavData1={topNavData1}
//             topNavData2={topNavData2}
//         />, 
//         document.getElementById('root')
//     );
// })

// app.use(router.routes())
//     .use(router.allowedMethods())
//     .listen(6008, function(){
//         console.log('程序监听在6008端口')
//     })
store.subscribe(render)
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
    