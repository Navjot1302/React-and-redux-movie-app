import {combineReducers} from "redux";
import layoutReducer from '../components/Layout/layoutReducers';

export default combineReducers({
    layout: layoutReducer
})
