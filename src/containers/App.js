import React, { Component } from 'react';
import Chocolates from './Chocolates';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  constructor (props){
    super(props);

    this.state = {
      chocolates: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/chocolates`)
     .then(response => response.json())
     .then(chocolates => this.setState({ chocolates }))
  }

  render (){
    return (
      <div className="App">
        <Chocolates chocolates={this.state.chocolates} />
       </div>
    );
  }
}

export default App;
