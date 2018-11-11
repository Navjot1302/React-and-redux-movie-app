import React from 'react';
import styled from 'styled-components';


const Navbar = styled.div`
  background-color: transparent;

  li {
    display: block;
    margin-left: 70px;
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 20px;
  }
`;


const NavbarLink = styled.a`
  color: red;
  text-decoration: none;
  font-weight: 200;
  font-family:'Roboto Condensed', sans-serif;
  transition: 0.2s ease-in-out;
      
  &:hover{
    border-bottom: 3px solid rgba(255, 136, 0, 0.39);
    color:red;
  }
    
`;


export default () => 
  <Navbar  >
    <ul>  
      <li><NavbarLink href="/">MovieInfo</NavbarLink></li>
    </ul>
  </Navbar>;


 