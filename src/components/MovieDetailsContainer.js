import React, { Component } from 'react'
import { getMovieById } from './Layout/layoutActions';
import {Link} from "react-router-dom";
import styled, {keyframes} from 'styled-components';
import {connect} from 'react-redux';
import {getDetails} from './Layout/layoutActions';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
}
`
const StyledDetails = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.308);
  animation: ${fadeIn};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  
h3 {
  margin-top: 10px;
  color: red;
  text-transform: uppercase;
}
h4 {
  color: white;
  margin-top: 2px;
  font-family:'Roboto Condensed', sans-serif;
}
h2 {
  text-align: center;
  letter-spacing: 3px;
  line-height: 0.8;
  text-transform: uppercase;
  font-size: 50px;
  color: rgba(252, 245, 245, 0.938);
  font-family:'Roboto Condensed', sans-serif;
}

img{
  margin-top: 70px;
  width: 100%;
  height: 430px;

}
.list-group-item {
  background-color: transparent;
  color: white;
  padding: 13px;
  margin: auto;
  font-size: 20px;
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
const StyledPlot = styled.div`
  background: transparent;
  width: 80%;
  margin-left: 20px;
`

class MovieDetails extends Component {

  
  componentDidMount = () => {
      console.log(this.props)
      let movieId = /* this.props.location.pathname.slice(14); */ this.props.match.params.id
        getMovieById(movieId)
        .then(({data:movie}) => {
          this.props.getDetails(movie)
        })      
  }
    renderDetailOfMovie =()=> {
      const {Poster, Title, Genre, Released, Rated, imdbRating, Director, Writer, Actors, Plot, imdbID} = this.props.movie
      return (
        <StyledDetails>
            <div className="row" >
              <div className="col-md-4">
              <img alt="Poster" src={Poster} className="thumbnail"></img>
              </div>
            <div className="col-md-8">
              <h2>{Title}</h2>
              <ul className="list-group">
                <li className="list-group-item"><strong>Genre:</strong> {Genre}</li>
                <li className="list-group-item"><strong>Released:</strong> {Released}</li>
                <li className="list-group-item"><strong>Rated:</strong> {Rated}</li>
                <li className="list-group-item"><strong>IMDB Rating:</strong> {imdbRating}</li>
                <li className="list-group-item"><strong>Director:</strong> {Director}</li>
                <li className="list-group-item"><strong>Writer:</strong> {Writer}</li>
                <li className="list-group-item"><strong>Actors:</strong> {Actors}</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <StyledPlot className="well">
              <h3>Plot</h3>
              <h4>{Plot}</h4>
              <br></br>
              <a  href={`https://imdb.com/title/${imdbID}`} target="_blank" rel="noopener noreferrer"><button>View IMDB</button></a>
              <Link to="/"><button>Go Back To Search</button></Link>"
            </StyledPlot>
          </div>
        </StyledDetails>
      )
  };
      
  render() {
    return (
      <div>
      {this.renderDetailOfMovie()}
      </div>
    )
  }
};

const mapStateToProps = (state)=>({
  movie: state.layout.movie
})
export default connect(mapStateToProps, {getDetails})(MovieDetails);
