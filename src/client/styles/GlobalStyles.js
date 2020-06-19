import styled, { createGlobalStyle, css } from 'styled-components';
import img from '../assets/images/background.png';

export const GlobalStyle = createGlobalStyle`
        body {                
            margin: 0;
            padding: 0;
            color: #F8F2F2;
            background-image: url(${img});
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;         
            background-color: #050607;
            background-position: center top; 
            transition: 0.3s;
            ${
                props => props.up && css`
                background-position: 50% 15%;
                `
            }
        }

        a {
            text-decoration: none;
            display: inline;/*Para que se pueda poner de forma horizontal*/
            color: black;
        }

        .grid-container{
            width: 980px;
            margin: auto;
        }
`
export const Img = styled.img`
    /*width: 100%;*/
`