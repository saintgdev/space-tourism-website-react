import { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import { HStyles, IStyles } from './Styles'

const handlerClick = (state, newState) => {
  !state ? newState(state = true) : newState(state = false)
}

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <HStyles>
      <img src="/assets/logo.svg" alt="logo" className='Header__logo' />
      <IStyles active={showMenu} onClick={() => handlerClick(showMenu, setShowMenu)}>
        <img src="/assets/icon-hamburger.svg" alt="icon hamburger" className='icon__hamburger' />
        <img src="/assets/icon-close.svg" alt="icon close" className='icon__close' />
      </IStyles>
      <Navigation show={showMenu} />
    </HStyles>
  )
}

export default Header