import {createStore} from 'redux';
import rootReducer from './reducers/index';

// export const initialState = {
//     value: "",
//     formClass: "",
//     notFound: "",
//     movies: [],
//     movie: []
// }

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

