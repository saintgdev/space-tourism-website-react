import styled from "styled-components"

export const CStyles = styled.main`
  padding: 0 var(--pd-pages);
  text-align: center;
  .Crew-members{
    width: 100%;
    height: 13.9375em;
    margin: 2em auto;
    border-bottom: 0.0625em solid #383B4B;
    display: flex;
    overflow: hidden;
    object-fit: cover;
    align-items: center;
    justify-content: center;
    position: relative;
    &__img{
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
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
      &.show{
        opacity: 1;
      }
    }
  }


  .Members-info{
    &__role{
      margin: 2em 0 .5em;
      font-weight: 400;
      text-transform: uppercase;
      font-family: var(--font-bellefair);
      font-size: 1em;
      opacity: .50;
    }
    &__name{
      margin: 0;
      font-weight: 400;
      text-transform: uppercase;
      font-family: var(--font-bellefair);
      font-size: 1.5em;

    }
    &__bio{
      margin: 1.3333em 0 0;
      line-height: 1.6666em;
      font-family: var(--font-barlow);
      font-size: 0.9375em;
    }
  }
`