import React, { Component } from "react";
import { Router, Link, NavLink } from 'react-router-dom';

import './index.css'
import Footer from '../../../footer/index.jsx';

class Recommend2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'tea',
            link: [
                {
                    name: '找好茶',
                    to: '/recommend/2/tea1'
                },
                {
                    name: '找奶茶',
                    to: '/recommend/2/tea2'
                },
                {
                    name: '找口感',
                    to: '/recommend/2/tea3'
                },
                {
                    name: '找新鲜',
                    to: '/recommend/2/tea4'
                },
                {
                    name: '找鲜奶',
                    to: '/recommend/2/tea5'
                },
            ]
        }
    }
    render() {
        return (
            <div id="tea">
                <ul id='list'>
                    {
                        this.state.link.map((v, i) => {
                            return (
                                <li key={i}>
                                    <NavLink exact key={i} to={v.to}>{v.name}</NavLink>
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
export default Recommend2;
