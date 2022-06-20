import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NStyles = styled.nav`
  width: 254px;
  height: 100%;
  overflow: hidden;

  position: absolute;
  top: 0;
  right: 0;
  .Nav-menu{
    width: 100%;
    height: 100%;
    padding-top: 118px;
    padding-left: 32px;

    display: flex;
    flex-direction: column;
    row-gap: 32px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 900;

    backdrop-filter: blur(30px);
    transition: transform .6s;
    transform: translateX(${props => props.active ? '0%' : '100%'});
    background-color: rgba(255, 255, 255, 0.04);
  }
`

export const LinkItem = styled(NavLink)`
  width: 100%;
  text-transform: uppercase;
  letter-spacing: var(--ls-barlow-2);
  font-family: var(--font-barlow-2);
  position: relative;
  display: flex;
  column-gap: 12px;
  align-items: center;
  &::after{
    content: '';
    width: 4px;
    height: 31px;
    position: absolute;
    right: 0;
    opacity: 0;
    transform: scaleY(0);
    transition: opacity .6s, transform .6s;
    background-color: var(--color-white);
  }
  &.active{
    ::after{
      opacity: 1;
      transform: scaleY(1);
    }
  }
`