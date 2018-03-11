import { createStore } from 'redux';
import modules from './modules';

// store 만드는 함수
const configure = () => {
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    const store = createStore(modules, devTools);
    
    return store;
}

export default configure;