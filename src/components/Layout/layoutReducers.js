import { GET_MOVIES, GET_MOVIEDETAILS,FORM_CLASS,NOT_FOUND, HANDLE_CHANGE } from "./layoutTypes";

 const initialState ={
    value: "",
    formClass: "",
    notFound: "",
    movies: [],
    movie: {}

 }

export default function layoutReducer(state = initialState, action){
    switch(action.type){
        
        case GET_MOVIES:
        return{
            ...state,
            movies: action.payload
            
        };
        case HANDLE_CHANGE:
        return {
            ...state,
            value: action.payload
        };
        case FORM_CLASS:
        return {
            ...state,
            formClass: action.payload
        };
        case NOT_FOUND:
        return {
            ...state,
            notFound: action.payload
        }
        case GET_MOVIEDETAILS:
        return {
            ...state,
            movie: action.payload
        }
        default:
        return state
        }
}
