import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import PhoneNumber from './components/PhoneNumber/PhoneNumber';

import FileBrowser from './components/FileBrowser/FileBrowser';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';
import Navbar from './components/Navbar/Navbar';
import ViewLogin from './components/ViewLogin/ViewLogin';

/*import { Observable, from, fromEvent } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';*/

import { ThemeContext, auth } from './auth';

class App extends Component {

  test(){
    alert("test ici");
  }

  componentDidMount() {

  }

  render() {
    return (
      <ThemeContext.Provider value={auth}>
        <Router>
          <div className="App container border-right border-left border border-secondary rounded pb-3 bg-light">
          
          <Navbar className="rounded mb-4" />

            <div>
              
              <Route exact={true} path="/login" component={ViewLogin} />

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
