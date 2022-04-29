import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root{
    min-width: 320px !important;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Comic Sans MS', sans-serif ;
  }

  #root {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
  }`;

