import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

class Footer extends Component {
    render() {
        return (
            <div id={'footer'}>
                <NavLink to={'/list'} className="footerNav">
                    <i className={'iconfont icon-cartfill'}></i>
                    <p>购物车</p> 
                </NavLink>
            </div>
        )
    }
}
export default Footer;