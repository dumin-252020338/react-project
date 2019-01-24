import React, { Component } from "react";


import '../../common/iconfont/iconfont.css';
import 'antd/dist/antd.css'; 

import Location from '../../location/index.jsx';
    import '../../location/index.css';
import Search from '../../search/index.jsx';
    import '../../search/index.css';
import Topnav from '../../topnav/index.jsx';
    import '../../topnav/index.css';
import Scarebuy from '../../scarebuy/index.jsx';
    import '../../scarebuy/index.css';
import Promotion from '../../promotion/index.jsx';
    import '../../promotion/index.css';
import Recommend from '../../recommend/index.jsx';
    import '../../recommend/index.css';
import Footer from '../../footer/index.jsx';
    import '../../footer/index.css';

class Home extends Component {
    render() {
        return (
            <div id="App" style={{ height:"2000rem"}}>
                {/* 顶部定位 */}
                <Location />
                {/* 吸顶盒 搜索框 */}
                <Search />
                {/* 分类导航 */}
                <Topnav />
                {/* 抢购栏 */}
                <Scarebuy />
                {/* 促销 */}
                <Promotion />
                {/* 推荐商家 */}
                <Recommend />
                {/* 底部 */}
                <Footer />
            </div>
        );
    }
}
export default Home;
