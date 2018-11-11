import React, { Component } from 'react'
import {Link} from "react-router-dom";
import styled, {keyframes} from 'styled-components';

const bounce = keyframes`
  0% {
    bottom: -200px;
  }
  50% {
    bottom: 30px;
  }

  100% {
    bottom: 0px;
  }
}
`

const StyledMovieList = styled.div`
  position: relative;
  display: inline-block;
  flex-wrap: wrap; 
  width: 350px;
  height: auto;
  padding:20px;
  margin: auto;
  margin-left: 50px;
  color: white;
  font-weight: 200;
  text-align: center;
  overflow: hidden;
  animation: ${bounce};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  transition: ease-in;
  
img{
  width: 100%;
  height: 400px;
}

 &:hover{
  transform: scale(1.03);
  transition: transform 0.4s;
  z-index: 500;
  box-shadow: 10px 10px 5px  black;
  transition: .3s ease-in-out;

 }
 button {
  margin-left: 10px;
  padding: 5px;
  text-decoration: none;
  color: white;
  border: none;
  background-color: green;
  border-radius: 15px;
}
button:hover{
  background-color: red;
  cursor: pointer;
 
}
`
const StyledH5 = styled.h5`
  color: white;
  margin-top: 2px;
  font-family:'Roboto Condensed', sans-serif;
`

class LayoutBody extends Component {
  getMovieList =(movies)=>

  <div>
    {movies.map(movie =>
      <StyledMovieList className="col-xs-4 col-sm-4 col-md-4 col-lg-4" key={movie.id}>
        <img src={movie.Poster} alt="Poster not available"/>
        <StyledH5 className="movie-item">{movie.Title}</StyledH5>
        <Link
          onSelect={()=>(movie.imdbID)}
          to={`/MovieDetails/${movie.imdbID}`}>
          <button>Movie Details</button>
        </Link>
      </StyledMovieList>
                )
      }
  </div>
  ;
  
    render() {
      return (
          this.getMovieList(this.props.movies)  
      )
  }
}

export default LayoutBody



