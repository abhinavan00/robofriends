import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import './index.css'; 
import App from './containers/App';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';
// import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const roorReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(roorReducer, applyMiddleware(thunk, logger))


const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store} >
                <App />
            </Provider>
            );


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
