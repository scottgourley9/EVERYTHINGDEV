import React from 'react';
import ReactDOM from 'react-dom';
import Child from './child.js';

var App = React.createClass({
  getInitialState() {
    return {
      people: [],
      name: ""
    }
  },
  render(){
    return (

      <div>
        <h1>{this.state.name}</h1>
        <input value={this.state.name} onChange={this.inputHandler}/>
        <button onClick={this.addName}>Add Name</button>
        <Child people={this.state.people}/>




      </div>




    )
  },

  inputHandler(e){
    this.setState({
      name: e.target.value
    })
  },
  addName(){
    this.setState({
      people: this.state.people.concat([{name: this.state.name}]),
      name: "",
    })
  }
})

ReactDOM.render(<App />, document.getElementById("app"));
