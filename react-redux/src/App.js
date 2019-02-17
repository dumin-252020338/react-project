import React, { Component } from 'react';
import './App.css';
// import { addCannon, removeCannon } from './redux2';


class App extends Component {
  
  handlClickAdd = ()=>{
    const store = this.props.store
    const addCannon = this.props.add
    return store.dispatch(addCannon())
  }

  handlClickRemove = ()=>{
    const store = this.props.store
    const removeCannon = this.props.remove
    // console.log(removeCannon())
    return store.dispatch(removeCannon())
  }
  render() {
    // console.log(this.props)
    const store = this.props.store
    const num = store.getState()
    return (
      <div className="App">
        {`现在有${num}`}
        <br />
        <input 
          type='button' 
          defaultValue={'增加'}
          onClick={this.handlClickAdd}
        />
        <br />
        <br />
        <input 
          type='button' 
          defaultValue={'减少'}
          onClick={this.handlClickRemove}
        />
        <br />
        <br />      
      </div>
    );
  }
}

export default App;
