import styled, {keyframes, css} from "styled-components";
import { Button, Paper } from '@material-ui/core';
import backLogo from '../../assets/images/background-logo.png';
import imgLogo from '../../assets/images/logo.png';

export const HeaderMain = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  
  width: 100%;
  height: 130px;

  background-color: #fff;
  background-image: url(${backLogo});
  background-repeat: no-repeat;
  background-size: cover; 
  
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const HeaderLogo = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;/*textro centrado vertical*/
  justify-content: center;/*manda al elem al fondo*/  
  /*transition: 0.3s;
  ${
      props => props.up && css`
      transform: translate(0, -20px);
      `
  }*/
`;

export const LogoImg = styled.img`
  height: 140px;
  transition: 0.3s;
  ${
      props => props.up && css`
      height: 100px;
      `
  }
`;


export const HeaderAuth = styled.div`
  grid-column: 3;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;

export const ButtonRegister = styled(Button)`
  color: #F8F2F2;
`;

export const ButtonPerfil = styled(Button)`  

&& {
    padding: 0px;
    border-radius: 50%;
    margin-left: 5px;
}
`

export const PaperPerfilItems = styled(Paper)`  
color:#000;
`



