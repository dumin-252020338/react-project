import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './index.css';
class HotSearch extends Component {
    render() {
        return (
            <div className='hotSearch'>
                <p>热门搜索</p>
                <div className='hotWord'>
                    <Link className='keyword' to='jianbing'>
                        <span>煎饼</span>
                    </Link>
                    <Link className='keyword' to='longxiafan'>
                        <span>龙虾 五折起</span>
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
        );
    }
}
export default HotSearch;
