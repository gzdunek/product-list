import React, {Component} from 'react';
import Header from './Header';
import Filters from '../containers/FiltersList';

import './App.scss';
import FilteredProducts from '../containers/FilteredProducts';
import {Route} from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Filters/>
                    <Route path="/" component={FilteredProducts}/>
                </div>
            </div>
        );
    }
}

export default App;
