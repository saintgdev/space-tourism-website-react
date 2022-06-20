import styled from "styled-components";

export const HStyles = styled.main`
  margin-top: 3em;
  padding: 0 1.5em;
  text-align: center;
  .Home-text{
    &__title{
      margin: 0;
      text-transform: uppercase;
      letter-spacing: var(--ls-barlow-2);
      font-family: var(--font-barlow-2);
      font-size: 1em;
      font-weight: 400;
    }
    &__subtitle{
      margin-top: 0.25em;
      margin-bottom: 0.3em;
      line-height: 1;
      text-transform: uppercase;
      font-family: var(--font-bellefair);
      font-size: 5em;
    }
    &__desc{
      margin: 0;
      line-height: 1.6666em;
      font-family: var(--font-barlow);
      font-size: 0.9375em;
    }
  }
  .Home-explore{
    margin-top: 5.25em;
    display: flex;
    justify-content: center;
    &__btn{
      width: 7.5em;
      height: 7.5em;
      border: none;
      border-radius: 50%;
      text-transform: uppercase;
      letter-spacing: 0.0625em;
      font-family: var(--font-bellefair);
      font-size: 1.25em;
      color: var(--color-dark-rift);
      background-color: var(--color-white);
    }
  }
  .Home-background{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    background-color: red;
    &__img{
      width: 100%;
      height: 100%;
    }
  }
`

// url('/assets/home/background-home-mobile.jpg')