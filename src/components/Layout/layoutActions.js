import { GET_MOVIES, HANDLE_CHANGE, FORM_CLASS,GET_MOVIEDETAILS,NOT_FOUND } from './layoutTypes';
import { makeActionCreator } from '../../fp';
import axios from "axios";

export const getMovies = makeActionCreator(GET_MOVIES, "payload");
export const handleChange = makeActionCreator(HANDLE_CHANGE,"payload");
export const classForm = makeActionCreator(FORM_CLASS,"payload");
export const getDetails = makeActionCreator(GET_MOVIEDETAILS,"payload");
export const movieNotFound = makeActionCreator(NOT_FOUND,"payload");



export const fetchMovies = (value) => 
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=b7fb599a&s="+ value)
    
export const getMovieById = (id) => 
    axios.get("http://www.omdbapi.com/?apikey=b7fb599a&i="+id)
