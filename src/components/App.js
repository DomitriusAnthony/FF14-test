import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Enemies from './Enemies';
import Items from './Items';



export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/items' component={Items} />
            <Route path='/characters' component={Enemies} />
          </Switch>
        </div>
      </Router>
    );
  }
}


