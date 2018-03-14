import React, {Component} from 'react';
import {Header} from './Header';
import {Filters} from './Filters';

import './App.scss';
import {FilteredProducts} from '../containers/FilteredProducts';

class App extends Component {
  render() {
    return (
        <div className="container">
            <Header/>
            <Filters/>
            <FilteredProducts/>
      </div>
    );
  }
}

export default App;
