import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import filteredProducts from './reducers';
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import './index.scss';
import productsData from './api/productsData';
import filtersData from './api/filtersData';

const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        ...filteredProducts,
        router: routerReducer
    }),
    {
        products: productsData,
        filters: filtersData
    },
    composeEnhancers(
        applyMiddleware(
            middleware
        )));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
