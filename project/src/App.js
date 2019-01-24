import React, {Component} from 'react';
import './index.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/router/home/index.jsx';
import Find from './components/router/find/index.jsx';
import List from './components/router/list/index.jsx';
import My from './components/router/my/index.jsx';

import RecommendSort from './components/router/recommend/RecommendSort/index';
import RecommendDistance from './components/router/recommend/RecommendDistance/index';
import RecommendBrand from './components/router/recommend/RecommendBrand/index';
import RecommendFilter from './components/router/recommend/RecommendFilter/index';


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
                    <Route path='/recommend/sort' component={RecommendSort} ></Route>
                    <Route path='/recommend/distance' component={RecommendDistance} ></Route>
                    <Route path='/recommend/brand' component={RecommendBrand} ></Route>
                    <Route path='/recommend/filter' component={RecommendFilter} ></Route>
                </Layout>
            </Router>
        );
    }
}

export default App;
