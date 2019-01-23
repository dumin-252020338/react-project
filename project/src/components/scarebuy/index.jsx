import React, { Component } from 'react';
import './index.css';
class Scarebuy extends Component {
    render() {
        return (
            <div id={'scarebuy'}>
                <a href="">
                    <img src={require("../../static/img/scarebuy/1.png")} alt="" />
                </a>
                <a href="">
                    <img src={require("../../static/img/scarebuy/2.png")} alt="" />
                </a>   
            </div>
        )
    }
}
export default Scarebuy;