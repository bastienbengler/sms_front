import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";
import PhoneNumber from './components/PhoneNumber/PhoneNumber';

import FileBrowser from './components/FileBrowser/FileBrowser';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';
import Navbar from './components/Navbar/Navbar';
import ViewLogin from './components/ViewLogin/ViewLogin';

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
          <div className="App container border-right border-left border border-secondary rounded pb-3 bg-light">
          
          <Navbar className="rounded mb-4" />

            <div>
              
              <Switch>
                <Route exact={true} path="/login" component={ViewLogin} />

                <Route path="/phone" component={PhoneNumber} />

                <Route path="/googleauth" component={GoogleAuth} />

                <Route path="/filebrowser" component={FileBrowser} />
              </Switch>
            </div>
            
          </div>
    );
  }
}

export default App;
