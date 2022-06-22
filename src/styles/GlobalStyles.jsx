import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root{
    --color-white: #FFFFFF;
    --color-dark-rift: #0B0D17;

    --font-barlow: 'Barlow', sans-serif;
    --font-barlow-2: 'Barlow Condensed', sans-serif;
    --font-bellefair: 'Bellefair', sans-serif;
    --ls-barlow-2: 0.16875em;

    --pd-pages: 1.5em;
  }
  *,
  *::before,
  *::after{
    box-sizing: border-box;
  }
  body{
    min-height: 100vh;
    margin: 0;
    color: var(--color-white);
    background-color: var(--color-dark-rift);
  }
  span{
    display: inline-block;
  }
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`
export default GlobalStyles