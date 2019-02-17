import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './index.css';
class SearchCon extends Component {
    render() {
        return (
            <div className="searchCon">
                <Link to='/'>
                    <i className='iconfont icon-back'></i>
                </Link>
                <i className='iconfont icon-search'></i>
                <input className='search' type="text" placeholder='搜索关键词' />
            </div>
        );
    }
}
export default SearchCon;
