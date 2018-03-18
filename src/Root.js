import React from 'react';
import App from 'components/App';
import { Provider } from 'react-redux';

// react-router-dom
// react-ga => react google analystics

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default Root;