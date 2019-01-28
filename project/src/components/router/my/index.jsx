import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './index.css';
import Footer from '../../footer/index.jsx';

class My extends Component {
    render() {
        return (
            <div id="my">
                <div className='title'>
                    <p>我的</p>
                </div>
                <div className='log-reg-module'>
                    <i className='iconfont icon-changyonglogo40 logo'></i>
                    <div className='log-reg'>
                        <div className='link'>
                            <Link to='/login'>登录</Link>
                            <Link to='/regist'>/注册</Link>
                        </div>
                        <div>
                            <span>登录后可享受更多特权</span>
                        </div>
                    </div>
                    <Link to='/login'>
                        <i className='iconfont icon-youjiantou'></i>
                    </Link>
                </div>
                <div className='list'>
                    <Link to='' className='items first'>
                        <i className='iconfont icon-qianbao'></i>
                        <span>钱包</span>
                    </Link>
                    <Link to='' className='items second'>
                        <i className='iconfont icon-youhuiquan'></i>
                        <span>优惠</span>
                    </Link>
                    <Link to='' className='items last'>
                        <i className='iconfont icon-jinbi'></i>
                        <span>金币</span>
                    </Link>
                </div>
                <div className='server'>
                    <ul>
                        <li>
                            <Link to=''>
                                <i className='iconfont icon-favor'></i>
                                <span>我的收藏</span>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <i className='iconfont icon-htmal5icon31'></i>
                                <span>我的客服</span>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <i className='iconfont icon-jinbi'></i>
                                <span>金币商城</span>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <i className='icon icon-65'></i>
                                <span>加盟合作</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
export default My;
