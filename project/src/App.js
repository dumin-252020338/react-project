import React, { Component } from 'react';
import './App.css';
import './components/common/css/reset.css';
import './components/common/iconfont/iconfont.css';

import { Carousel } from 'antd';
class App extends Component {
  render() {
      return (
        <div id="App">
            {/* 顶部定位 */}
            <div id='location'>
                <i className="iconfont icon-locationfill"></i>
                <span className='where'>上海市嘉定区</span>
                <i className="iconfont icon-xiajiantou"></i>
              </div>
            {/* 吸顶盒 搜索框 */}
            <div id='search'>
                <i className='iconfont icon-search'></i>
                <input className='search' type="text" placeholder='搜索饿了么商家、商品名称' />
            </div>
            {/* 分类导航 */ }
            <div id='topnav'>
                <Carousel>
                    <div className='item'>
                        <a>
                            <img src={require("./static/img/category/1.webp")} alt="美食" />
                            <span>美食</span>
                        </a>
                        <a>
                            <img src="./static/img/category/2.webp" alt="商超便利" />
                            <span>商超便利</span>
                        </a>
                        <a>
                            <img src="./static/img/category/3.webp" alt="水果" />
                            <span>水果</span>
                        </a>
                        <a>
                            <img src="./static/img/category/4.webp" alt="下午茶" />
                            <span>下午茶</span>
                        </a>
                        <a>
                            <img src="./static/img/category/5.webp" alt="医药" />
                            <span>医药</span>
                        </a>
                        <a>
                            <img src="./static/img/category/6.webp" alt="鲜花" />
                            <span>鲜花</span>
                        </a>
                        <a>
                            <img src="./static/img/category/7.webp" alt="生鲜" />
                            <span>生鲜</span>
                        </a>
                        <a>
                            <img src="./static/img/category/8.webp" alt="特色小吃" />
                            <span>特色小吃</span>
                        </a>
                        <a>
                            <img src="./static/img/category/9.webp" alt="地方菜系" />
                            <span>地方菜系</span>
                        </a>
                        <a>
                            <img src="./static/img/category/10.webp" alt="签到" />
                            <span>签到</span>
                        </a>      
                    </div>
                </Carousel>
            </div>
        </div>
    );
  }
}

export default App;
