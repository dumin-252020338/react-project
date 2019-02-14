import React, { Component } from "react";
import { Router, Link, NavLink } from 'react-router-dom';

import './index.css'
import Footer from '../../../../footer/index.jsx';

class Tea1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'teaDetail',
            link: [
                {
                    name: '红茶玛奇朵',
                    to: '/recommend/2/tea1/detail',
                    url: require('../../../../../static/img/recommend/tea/1.jpg')
                },
                {
                    name: '波霸奶茶',
                    to: '/recommend/2/tea2/detail',
                    url: require('../../../../../static/img/recommend/tea/1.jpg')
                },
                {
                    name: '四季奶青',
                    to: '/recommend/2/tea3/detail',
                    url: require('../../../../../static/img/recommend/tea/1.jpg')
                },
                {
                    name: '奶茶',
                    to: '/recommend/2/tea4/detail',
                    url: require('../../../../../static/img/recommend/tea/1.jpg')
                },
                {
                    name: '奶绿',
                    to: '/recommend/2/tea5/detail',
                    url: require('../../../../../static/img/recommend/tea/1.jpg')
                },
            ]
        }
    }
    render() {
        return (
            <div id="teaDetail">
                <ul>
                    {
                        this.state.link.map((v, i) => {
                            return (
                                <li key={i}>
                                    <NavLink exact key={i} to={v.to}>
                                        <img src={v.url} alt="" />
                                        <span>{v.name}</span>
                                        <button>-</button>
                                        <button>+</button>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <Footer></Footer>
            </div>
        );
    }
}
export default Tea1;
