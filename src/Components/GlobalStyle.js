import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const globalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
    height: 200vh;
    background-color: rgb(20, 20, 20);
    color: white;
    padding-top: 65px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  
`;

export default globalStyle;
