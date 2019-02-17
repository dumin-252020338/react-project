import React, { Component } from "react";
import {NavLink } from 'react-router-dom';

import { Button } from 'antd';
import 'antd/dist/antd.css';

import './index.css';
import data from './data/data';

import {createStore} from 'redux'
import {reducer, addGoods, removeGoods} from '../../../../redux/redux'
const store = createStore(reducer)

class Tea1 extends Component {
    handlClickAdd = ()=>{
        const num = store.getState()
        console.log(`${num}`)
        return store.dispatch(addGoods())
    }
    handlClickRemove = ()=>{
        const num = store.getState()
        console.log(`${num}`)
        return store.dispatch(removeGoods())
    }
    render() {
        const num = store.getState()
        console.log(this.props)
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
                                            <Button 
                                                type="primary" 
                                                defaultValue={'减少'}
                                                onClick={this.handlClickRemove}
                                            >-</Button>
                                            {num}
                                            <Button 
                                                type="primary" 
                                                defaultValue={'增加'}
                                                onClick={this.handlClickAdd}
                                            >+</Button>
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
