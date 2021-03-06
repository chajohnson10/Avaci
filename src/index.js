import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {HashRouter as Router} from "react-router-dom";
import './index.css';
import App from './components/App';
import configureStore from "./store/configureStore";

const store = configureStore();

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)
