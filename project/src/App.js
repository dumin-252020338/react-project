import React, { Component } from 'react';
import './App.css';
import './components/common/css/reset.css';
import './components/common/iconfont/iconfont.css';
import 'antd/dist/antd.css'; 

import Location from './components/location/index.jsx';
import Search from './components/search/index.jsx';
import Topnav from './components/topnav/index.jsx';
import Scarebuy from './components/scarebuy/index.jsx';
import Promotion from './components/promotion/index.jsx';
import Recommend from './components/recommend/index.jsx';

class App extends Component {
    render() {
      return (
        <div id="App">
            {/* 顶部定位 */}
            <Location></Location>
            {/* 吸顶盒 搜索框 */}
            <Search></Search>
            {/* 分类导航 */ }
            <Topnav></Topnav>  
            {/* 抢购栏 */}
            <Scarebuy></Scarebuy>
            {/* 促销 */}
            <Promotion></Promotion>
            {/* 推荐商家 */}
            <Recommend></Recommend>
        </div>
      
    );
  }
}

export default App;
