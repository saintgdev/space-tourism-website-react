import styled from "styled-components"

export const CStyles = styled.main`
  padding: 0 1.5em;
  .Crew-image{
    width: 11.07em;
    height: 13.9375em;
    margin: 2em auto;
    border-bottom: 0.0625em solid #383B4B;
    display: flex;
    overflow: hidden;
    object-fit: cover;
    align-items: center;
    justify-content: center;
    position: relative;
    img{
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity .6s;
      &:not(:first-child){
        position: absolute;
      }
    }
  }
  .Crew-tabs{
    display: flex;
    column-gap: 1em;
    justify-content: center;
    &__item{
      width: 0.6250em;
      height: 0.6250em;
      border-radius: 50%;
      opacity: 0.17;
      transition: opacity .6s;
      background-color: var(--color-white);
      &.active{
        opacity: 1;
      }
    }
  }
`