import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import PhoneNumber from './components/PhoneNumber/PhoneNumber';

import FileBrowser from './components/FileBrowser/FileBrowser';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';
import Navbar from './components/Navbar/Navbar';

/*import { Observable, from, fromEvent } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';*/

import { ThemeContext } from './auth';

class App extends Component {

  test(){
    alert("test ici");
  }

  componentDidMount() {

  }

  render() {
    return (
      <ThemeContext.Provider>
        <Router>
          <div className="App container">
          
          <Navbar className="rounded mb-4" />

            <div>
              
              <Route exact={true} path="/" render={() => (
                <h1> Welcome</h1>
              )} />

              <Route path="/phone" component={PhoneNumber} />

              <Route path="/googleauth" component={GoogleAuth} />

              <Route path="/filebrowser" component={FileBrowser} />

            </div>
            
          </div>
        </Router>
      </ThemeContext.Provider>
    );
  }
}

export default App;
