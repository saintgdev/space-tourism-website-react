import styled from 'styled-components'

export const DStyles = styled.main`
  margin-top: 1.5em;
  padding: 0 var(--pd-pages);
  text-align: center;
  .Destination-preview{
    width: 10.6250em;
    height: 10.6250em;
    margin: 2em auto 1.6250em;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &__img{
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity .6s;
      &:not(:first-child){
        position: absolute;
      }
    }
  }



  .Destination-tabs{
    display: flex;
    column-gap: 1.6875em;
    justify-content: center;
    &__item{
      padding-bottom: 0.5714em;
      text-transform: uppercase;
      letter-spacing: var(--ls-barlow-2);
      font-family: var(--font-barlow-2);
      font-size: 0.875em;
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
    .show{
      &::after{
        opacity: 1;
        transform: scaleX(1);
      }

    }
  }




  .Destination-info{
    &__title{
      text-transform: uppercase;
      font-weight: normal;
      margin: 0.3571em 0 0.0714em;
      line-height: 1;
      font-family: var(--font-bellefair);
      font-size: 3.5em; //56px
    }
    &__desc{
      margin: 0;
      font-family: var(--font-barlow);
      font-size: 0.9375em; //15px
      line-height: 1.6666em;
    }
  }

  .Destination-data{
    padding-top: 2em;
    padding-bottom: 3.625em;
    margin-top: 2.1875em;
    border-top: 0.0625em solid #383B4B;
    display: grid;
    row-gap: 2em;
    &__item{
      display: grid;
      justify-content: center;
      text-transform: uppercase;
    }
    &__title{
      letter-spacing: var(--ls-barlow-2);
      font-family: var(--font-barlow-2);
      font-size: 0.8750em; //14px
    }
    &__desc{
      margin-top: 0.4285em;
      font-family: var(--font-bellefair);
      font-size: 1.75em;  //28px
    }
  }
  
`