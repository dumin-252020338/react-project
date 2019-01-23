import React, { Component } from 'react';

import Location from '../../location/index.jsx';
import Search from '../../search/index.jsx';
import Topnav from '../../topnav/index.jsx';
import Scarebuy from '../../scarebuy/index.jsx';
import Promotion from '../../promotion/index.jsx';
import Recommend from '../../recommend/index.jsx';
import Footer from '../../footer/index.jsx';

class Home extends Component {
    render() {
      return (
        <div id="">
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
            {/* 底部 */}
            <Footer></Footer>
        </div>
      
    );
  }
}
export default Home;