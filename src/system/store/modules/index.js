import { combineReducers } from 'redux';
import feed from './feed';
import post from './post';
//import feeddetail from './feeddetail';


export default combineReducers({
    feed,
    post
})