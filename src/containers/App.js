import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Chocolates from './Chocolates';
import ChocolatesPage from './ChocolatesPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/chocolates' component={ChocolatesPage}/>
          <Chocolates />
       </div>
      </Router>
    );
  }
}

export default App;
