import styled from 'styled-components'

export const HStyles = styled.header`
  padding: 1.25em;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .Header__logo{
    width: 40px;
    height: 40px;
  }

  .icon-menu{
    
  }
`

export const IStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1000;
  
  .icon__hamburger,
  .icon__close{
    pointer-events: none;
    transition: opacity .6s;
  }
  .icon__hamburger{
    opacity: ${props => props.active ? '0' : '1'};
  }
  .icon__close{
    position: absolute;
    opacity: ${props => props.active ? '1' : '0'};
  }
`