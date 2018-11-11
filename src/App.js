import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/NavbarComponent';
import MovieDetails from './components/MovieDetailsContainer';
import LayoutComponent from './components/Layout/LayoutCompoent';


import styled  from 'styled-components';


const Container = styled.div`
    margin: auto;
    width: 100%;
    height: auto;
    padding: 10px;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Container>   
            <Navbar className="navbar"/>
            <Switch>     
                  <Route exact path="/MovieDetails/:id"  component ={MovieDetails}/>
                  <Route exact path="/"  component ={LayoutComponent}/>
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
