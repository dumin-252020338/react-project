import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';

import './index.css'
import data from './data/data'
class Tea2 extends Component {
    render() {
        return (
            <div id="teaDetail">
                <ul>
                    {
                        data.map((v, i) => {
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
export default Tea2;
