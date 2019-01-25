import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './index.css';
import Footer from '../../footer/index.jsx';
    import '../../footer/index.css'
class Search extends Component {
    render() {
        return (
            <div id='searchPage'>
                <div className="searchCon">
                    <Link to='/'>
                        <i className='iconfont icon-back'></i>
                    </Link>
                    <i className='iconfont icon-search'></i>
                    <input className='search' type="text" placeholder='搜索关键词' />
                </div>
                <div className='hotSearch'>
                    <p>热门搜索</p>
                    <div className='hotWord'>
                        <Link className='keyword' to='jianbing'>
                            <span>煎饼</span>
                        </Link>
                        <Link className='keyword' to='longxiafan'>
                            <span>龙虾饭 五折起</span>
                        </Link>
                        <Link className='keyword' to='guotie'>
                            <span>锅贴</span>
                        </Link>
                        <Link className='keyword' to='mixian'>
                            <span>米线</span>
                        </Link>
                        <Link className='keyword' to='danbing'>
                            <span>蛋饼</span>
                        </Link>
                        <Link className='keyword' to='naicha'>
                            <span>奶茶</span>
                        </Link>
                        <Link className='keyword' to='baozi'>
                            <span>包子</span>
                        </Link>
                        <Link className='keyword' to='mianbao'>
                            <span>面包</span>
                        </Link>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
export default Search;
