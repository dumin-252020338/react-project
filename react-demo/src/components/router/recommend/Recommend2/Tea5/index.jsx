import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';

import './index.css'

class Tea1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'teaDetail',
            link: [
                {
                    name: '绿茶玛奇朵5',
                    to: '/recommend/2/tea1/detail',
                    url: require('../../../../../static/img/recommend/tea/1.jpg'),
                    pice: '$14'
                },
                {
                    name: '奶昔5',
                    to: '/recommend/2/tea2/detail',
                    url: require('../../../../../static/img/recommend/tea/1.jpg'),
                    pice: '$15'
                },
                {
                    name: '四季奶青5',
                    to: '/recommend/2/tea3/detail',
                    url: require('../../../../../static/img/recommend/tea/1.jpg'),
                    pice: '$16'
                },
                {
                    name: '奶茶5',
                    to: '/recommend/2/tea4/detail',
                    url: require('../../../../../static/img/recommend/tea/1.jpg'),
                    pice: '$14'
                },
                {
                    name: '奶绿5',
                    to: '/recommend/2/tea5/detail',
                    url: require('../../../../../static/img/recommend/tea/1.jpg'),
                    pice: '$14'
                }
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
                                    <div className='left'>
                                        <NavLink exact key={i} to={v.to}>
                                            <img src={v.url} alt="" />
                                        </NavLink>
                                    </div>
                                    <div className='right'>
                                        <p>{v.name}</p>
                                        <p>{v.pice}</p>
                                        <div>
                                            <Button type="primary">-</Button>
                                            <Button type="default">0</Button>
                                            <Button type="primary">+</Button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default Tea1;
