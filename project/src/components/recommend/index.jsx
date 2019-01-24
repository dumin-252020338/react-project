import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
class Recommend extends Component {
    render() {
        return (
            <div id={'recommend'}>
                <div className='recommendTitle'>
                    <img src={require("../../static/img/recommend/0.jpg")} alt="" />
                </div>
                <div className='recommendTop'>
                    <Link to="/recommend/sort">
                        <span>综合排序</span>
                        <i className="iconfont icon-xiajiantou"></i>
                    </Link>
                    <Link to="/recommend/distance">
                        <span>距离最近</span>
                    </Link>
                    <Link to="/recommend/brand">
                        <span>品质联盟</span>
                    </Link>
                    <Link to="/recommend/filter">
                        <span>筛选</span>
                        <i className="iconfont icon-filter"></i>
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/recommend/2" className='list'>
                            <img src={require("../../static/img/recommend/2.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/3" className='list'>
                            <img src={require("../../static/img/recommend/3.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/4" className='list'>
                            <img src={require("../../static/img/recommend/4.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/2" className='list'>
                            <img src={require("../../static/img/recommend/2.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/3" className='list'>
                            <img src={require("../../static/img/recommend/3.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/4" className='list'>
                            <img src={require("../../static/img/recommend/4.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/2" className='list'>
                            <img src={require("../../static/img/recommend/2.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/3" className='list'>
                            <img src={require("../../static/img/recommend/3.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/4" className='list'>
                            <img src={require("../../static/img/recommend/4.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/2" className='list'>
                            <img src={require("../../static/img/recommend/2.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/3" className='list'>
                            <img src={require("../../static/img/recommend/3.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/4" className='list'>
                            <img src={require("../../static/img/recommend/4.jpg")} alt="" />
                        </Link>
                    </li>
                </ul> 
            </div>
        )
    }
}
export default Recommend;