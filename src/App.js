import React, { Component } from 'react';
import './App.css';
import FileBrowser from './components/FileBrowser/FileBrowser';
import PhoneNumber from './components/PhoneNumber/PhoneNumber';
import TmpHeader from './components/TmpHeader/TmpHeader';

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
        <div className="container">
        <PhoneNumber />
          <FileBrowser id="selector" onction={this.test}/>
        </div>
      </div>
    );
  }
}

export default App;
