import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PhoneNumber from './components/PhoneNumber/PhoneNumber';

import FileBrowser from './components/FileBrowser/FileBrowser';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';
import Navbar from './components/Navbar/Navbar';

/*import { Observable, from, fromEvent } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';*/

class App extends Component {

  test(){
    alert("test ici");
  }

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <div className="App">
        
        <Navbar className="row col-12 no-gutters" />

          <div className="container">
            
            <Route exact={true} path="/" render={() => (
              <h1> Welcome </h1>
            )} />

            <Route path="/phone" component={PhoneNumber} />

            <Route path="/googleauth" component={GoogleAuth} />

            <Route path="/filebrowser" component={FileBrowser} />

          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
