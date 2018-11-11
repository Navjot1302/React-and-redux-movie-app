import React from 'react';
import styled, {keyframes} from 'styled-components';

const bounceUp = keyframes`
  from {
    top: 150px;
  }
  to {
    top: 0px;
  }
}`


const StyleH1 = styled.div`
  position:relative;
  text-align: center;
  margin-top: 80px;
  animation: ${bounceUp} ;
  animation-duration: 4s;
  animation-fill-mode: forwards;

h1 {
  color: white;
  text-transform: uppercase;
  font-family:'Roboto Condensed', 'sans-serif'
}
`
export default function NotFound(props) {
  return (

    
    <StyleH1>
        <h1>{props.notFound}</h1>
    </StyleH1>
  )
}
