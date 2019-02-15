import React, {Component} from 'react';
import './index.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';

import Home from './components/router/home/index.jsx';
import Find from './components/router/find/index.jsx';
import List from './components/router/list/index.jsx';
import My from './components/router/my/index.jsx';
import Search from './components/router/search/index.jsx';

import RecommendSort from './components/router/recommend/RecommendSort/index';
import RecommendDistance from './components/router/recommend/RecommendDistance/index';
import RecommendBrand from './components/router/recommend/RecommendBrand/index';
import RecommendFilter from './components/router/recommend/RecommendFilter/index';
// 商品列表
import Recommend2 from './components/router/recommend/Recommend2/common/index';
import Tea1 from './components/router/recommend/Recommend2/Tea1/index';
import Tea2 from './components/router/recommend/Recommend2/Tea2/index';

import Login from './components/router/login/index.jsx';
import Regist from './components/router/regist/index.jsx';

import Layout from './components/layout/index.jsx';

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/find' component={Find}></Route>
                    <Route path='/list' component={List}></Route>
                    <Route path='/my' component={My} ></Route>
                    <Route path='/search' component={Search} ></Route>
                    {/* 商家推荐 */}
                    <Route path='/recommend/sort' component={RecommendSort} ></Route>
                    <Route path='/recommend/distance' component={RecommendDistance} ></Route>
                    <Route path='/recommend/brand' component={RecommendBrand} ></Route>
                    <Route path='/recommend/filter' component={RecommendFilter} ></Route>
                    {/* 商家商品列表 */}
                    <Route path='/recommend/2' component={Recommend2} ></Route>
                    <Route path='/recommend/2/tea1' component={Tea1} ></Route>
                    <Route path='/recommend/2/tea2' component={Tea2} ></Route>
                
                    {/* 登录 注册 */}
                    <Route path='/login' component={Login} ></Route>
                    <Route path='/regist' component={Regist} ></Route>
                </Layout>
            </Router>
        );
    }
}

export default App;
