import React, { Component } from 'react'; 
import { Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import './App.css'; 
import './components/common/css/reset.css';
import './components/common/iconfont/iconfont.css';
import 'antd/dist/antd.css'; 



import Home from './components/router/home/index.jsx'
import Layout from './components/layout/index.jsx';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '饿了么',
            link: [
                {
                    name: '首页',
                    to: '/'
                },
                {
                    name: '发现',
                    to: '/find'
                },
                {
                    name: '订单',
                    to: '/list'
                },
                {
                    name: '我的',
                    to: '/my'
                }
            ]
        }
    }
    render() {
        return (
            <div id="app">
                    <a to={'/'}>首页</a>
                {/* <Home></Home> */}
                {/* <Main></Main> */}
                {/* <Router>
                    <Route path="/" component={Home} /><Route>
                </Route>
            </Router> */}
            </div>
        )
    }
}

export default App;
