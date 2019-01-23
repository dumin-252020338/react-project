import React, { Component } from 'react';
import './index.css';
class Recommend extends Component {
    render() {
        return (
            <div id={'recommend'}>
                {/* <a href=""> */}
                    <img src={require("../../static/img/recommend/1.jpg")} alt="" />
                {/* </a> */}
                {/* <a href="">
                    <img src={require("../../static/img/scarebuy/2.png")} alt="" />
                </a>    */}
            </div>
        )
    }
}
export default Recommend;