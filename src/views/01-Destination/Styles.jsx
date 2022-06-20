import styled from 'styled-components'

export const DStyles = styled.main`
  padding: 0 1.5em;
  text-align: center;
  h1{
    text-transform: uppercase;
    letter-spacing: var(--ls-barlow-2);
    font-family: var(--font-barlow-2);
    font-size: 1em;
    font-weight: 400;
    span{
      opacity: .25;
    }
  }
  .Destination-preview{
    width: 10.6250em;
    height: 10.6250em;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    &__container{
      display: grid;
      transition: transform .6s;
      grid-template-columns: repeat(4, 100%);
    }
    &__img{
      width: 100%;
      height: 100%;
    }
  }
  .Destination-select{
    text-transform: uppercase;
    letter-spacing: var(--ls-barlow-2);
    font-family: var(--font-barlow-2);
    font-size: 0.875em;
    display: flex;
    justify-content: center;
    column-gap: 1.9285em;
    &__item{
      padding-bottom: 0.5714em;
      position: relative;
      &::after{
        content: '';
        width: 100%;
        height: 0.2142em;
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0;
        transform: scaleX(0);
        transition: opacity .6s, transform .6s;
        background-color: var(--color-white);
      }
    }
    .active{
      &::after{
        opacity: 1;
        transform: scaleX(1);
      }

    }
  }
  
`