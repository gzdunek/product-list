import React, {Component} from 'react';
import {Products} from './Products';
import {Header} from './Header';
import {Filters} from './Filters';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Filters/>
            <Products/>
      </div>
    );
  }
}

export default App;
