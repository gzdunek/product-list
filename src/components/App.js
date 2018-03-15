import React, {Component} from 'react';
import {Header} from './Header';
import Filters from '../containers/Filters';

import './App.scss';
import FilteredProducts from '../containers/FilteredProducts';
import {Route} from 'react-router';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Filters/>
                <Route path="/" component={FilteredProducts}/>
            </div>
        );
    }
}

export default App;
