import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import FileBrowser from './components/FileBrowser/FileBrowser';
import PhoneNumber from './components/PhoneNumber/PhoneNumber';
import TmpHeader from './components/TmpHeader/TmpHeader';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';

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
      <div className="App">
      <TmpHeader />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <hr />
            <Route path="/about" component={PhoneNumber} />
          </div>
        </Router>
        <div className="container">
          <GoogleAuth />
          <FileBrowser id="selector"/>

        </div>
      </div>
    );
  }
}

export default App;
