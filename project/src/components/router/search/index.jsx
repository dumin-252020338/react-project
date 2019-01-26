import React, { Component } from "react";
import './index.css';
import SearchCon from './searchCon/index';
import HotSearch from './hotSearch/index';
import Footer from '../../footer/index.jsx';
    import '../../footer/index.css'
class Search extends Component {
    render() {
        return (
            <div id='searchPage'>
                <SearchCon></SearchCon>
                <HotSearch></HotSearch>
                <Footer></Footer>
            </div>
        );
    }
}
export default Search;
