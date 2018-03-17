import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import filteredProducts from './reducers';
import {FakeProducts} from './api/fakeProducts';
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import './index.scss';

const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const filters = [
    {
        displayedName: 'Category',
        name: 'category',
        isOpen: false,
        options: [
            {
                name: 'bag',
            },
            {
                name: 'backpack',
            }
        ]
    },
    {
        displayedName: 'Color',
        name: 'colors',
        isOpen: false,
        options: [
            {
                name: 'red',
            },
            {
                name: 'blue',
            }
        ]
    }
];

const store = createStore(
    combineReducers({
        ...filteredProducts,
        router: routerReducer
    }),
    {
        ...FakeProducts,
        filters
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
