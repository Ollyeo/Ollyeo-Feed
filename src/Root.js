import React from 'react';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './system/store';

// react-router-dom
// react-ga => react google analystics

const Root = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default Root;