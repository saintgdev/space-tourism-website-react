import { NStyles, LinkItem } from './Styles'


function Navigation({ show }) {
  return (
    <NStyles active={show} >
      <ul className='Nav-menu'>
        <li className='Nav-menu__item'>
          <LinkItem to="/"><b>00</b> Home</LinkItem>
        </li>
        <li className='Nav-menu__item'>
          <LinkItem to="/destination"><b>01</b> Destination</LinkItem>
        </li>
        <li className='Nav-menu__item'>
          <LinkItem to="/crew"><b>02</b> Crew</LinkItem>
        </li>
        <li className='Nav-menu__item'>
          <LinkItem to="/technology"><b>03</b> Technology</LinkItem>
        </li>
      </ul>
    </NStyles>
  )
}

export default Navigation