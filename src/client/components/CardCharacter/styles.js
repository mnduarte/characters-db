import styled, {keyframes, css} from "styled-components";

/*export const Card = styled.div`  
  display: inline-block;
  margin-left: 20px;
  max-width: 30%;
  margin-bottom: 50px;
`

export const Img = styled.img`
  height: 240px;
`

export const CardContent = styled.div`
    transition: .5s ease;
    background: #F5F5F5;
    &:hover {
      opacity: 0.3;
    }
`

export const Text = styled.div`
    color:#363232;
    font-size: 16px;
    padding: 16px 32px;
`*/

import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button} from '@material-ui/core/';

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const StCard = styled(Card)`
  background-color: #F5F5F5;
  display: inline-block;
  margin-left: 20px;
  max-width: 30%;
  margin-bottom: 50px;  
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  animation: 0.5s ${fadeInKeyframes} ease;
  transition: transform .2s;
  ${
      props => props.hover.isHovered && css`
      /*-ms-transform: scale(1.5); /* IE 9 *
      -webkit-transform: scale(1.5); /* Safari 3-8 */
      transform: scale(1.08);
      `
  }
`;

export const StCardMedia = styled(CardMedia)`
  height: 240px;
  transition: 0.1s;
  ${
      props => props.hover.isHovered && css`
      height: 200px;
      `
  }
`;

export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: Segoe UI;
  color: #363232;
`;

export const Name = styled.div`
  grid-column: 1;
  font-size: 25px;
`;

export const Likes = styled.div`  
  grid-column: 2;  
  font-size: 16px;
  display: flex;
  align-items: center;/*textro centrado vertical*/
  justify-content: flex-end;/*manda al elem al fondo*/  
  margin-right: 10px;
`;


export const STCardContent = styled(CardContent)`
height: 60px; 
transition: 0.1s;
  ${
      props => props.hover.isHovered && css`
      height: 100px;
      `
  }
`;

export const Description = styled.div`
position: absolute;
bottom: -500px;
transition: 0.5s;
  ${
      props => props.hover.isHovered && css`
      bottom: 7px;
      `
  }
`;


