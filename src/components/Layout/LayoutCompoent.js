import React, { Component } from 'react'
import LayoutBody from '../LayoutBodyComponent';
import { fetchMovies } from './layoutActions';
import styled, {keyframes} from 'styled-components'
import NotFound from './NotFound';
import {connect} from 'react-redux';
import { getMovies, handleChange, movieNotFound,classForm, getDetails } from './layoutActions';


const bounceUp = keyframes`
  from {
    top: 150px;
  }
  to {
    top: 0px;
  }
}
`
const bounceDown = keyframes`
  from {
    top: 0px;
  }
  to {
    top: 120px;
  }
}
`
const StyledForm = styled.form`
  position: relative;
  margin: auto ;
  top: 120px;
  width: 70%;
  padding: 20px;
  transition: ease-in-out;
  animation:${bounceDown};
  animation-duration: 2s;

&.move-up{
  animation: ${bounceUp};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

input {
  width: 100%;
  border-radius: 20px;
  font-size: 16px;
  color: white;
  background-color:transparent;
  background-position: 10px 10px; 
  text-transform: uppercase; 
  border: none;
  border-bottom: 2px solid red;
  padding: 0 20px;
 }
 input:focus {
  border: none;
  border-bottom: 2px solid green;
  outline: none
 }

&.stay{
  animation:${bounceDown};
  animation-duration: 1s;
  animation-fill-mode: forwards;
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
`

class LayoutComponent extends Component {
    
    handleChange = (event) => {
    const value = event.target.value
    this.props.handleChange(value)
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.movieNotFound("")
      this.props.getMovies([])

      if(!this.props.value){
        this.props.movieNotFound("Please Enter a Movie Name")
        this.props.classForm("move-up")
        return
      }
      fetchMovies(this.props.value)
      .then(({data:{Search:movies,Response}}) => {
        if(Response === "False"){          
          this.props.movieNotFound("movie not found. Please Search Again")
          this.props.classForm("move-up")
        }else{
          this.props.classForm("move-up")
          this.props.getMovies(movies)

        }
      })
    }
          
    renderForm = () => {
      const {value, formClass} = this.props;
      return(
        <StyledForm onSubmit={this.handleSubmit} 
              className={formClass}>
          <h2>Search Movie</h2>
          <input 
            type="text"
            value={value}
            onChange={this.handleChange}
            placeholder="Type Movie Name...">
          </input>
        </StyledForm>
      )
    } 
    render() {
      const { movies, notFound } = this.props; 
      return (
        <div>
          {this.renderForm()}
          { notFound ? <NotFound {...{notFound}}/> : null  }
          
          { movies.length ? <LayoutBody  {...{movies}} /> : null }
          
          
        </div>
      )
    }
}

const mapStateToProps = (state)=>({
  value: state.layout.value,
  formClass: state.layout.formClass,
  movies: state.layout.movies,
  notFound: state.layout.notFound
})

const mapDispatchToProps = {
  getMovies, 
  handleChange, 
  movieNotFound, getDetails, classForm
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
 