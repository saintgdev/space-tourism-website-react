import { crewData } from '../../helpers/getPagesData'
import PagesTitle from "../../components/PageTitle"
import { CStyles } from "./Styles"
import { useEffect, useRef, useState } from 'react'


const handlerClickMember = (ev, idPicture, setIdPicture) => {
  if (ev.target.classList.contains('Crew-tabs__item')) {
    const allItems = Array.from(ev.target.parentElement.children)
    allItems.filter(tab => {
      if (tab.classList.contains('active')) {
        tab.classList.remove('active')
      }
    })

    ev.target.classList.add('active')

    for (const [index, target] of Object.entries(ev.target.parentElement.children)) {
      if (target.classList.contains('active')) {
        updatePicture(index, idPicture, setIdPicture)
      }
    }
  }
}
const updatePicture = (idPicture, currentPicture, newCurrentPicture) => {
  newCurrentPicture(currentPicture = idPicture)
}






function Crew() {
  const [idPicture, setIdPicture] = useState(0)
  const crewImages = useRef()
  const tabsSelectMember = useRef()


  useEffect(() => {
    for (const img of Object.values(crewImages.current.children)) {
      img.style.opacity = '0'
    }
    crewImages.current.children[idPicture].style.opacity = '1'
  }, [idPicture])



  return (
    <CStyles>
      <PagesTitle pageId='02'>Meet your crew</PagesTitle>
      <section>
        <div className='Crew-image' ref={crewImages}>
          {
            crewData.map(image => <img src={image.images.png} alt={image.name} />)
          }
        </div>
        <div
          className='Crew-tabs'
          ref={tabsSelectMember}
          onClick={(ev) => handlerClickMember(ev, idPicture, setIdPicture)}>
          <span className='Crew-tabs__item active'></span>
          <span className='Crew-tabs__item'></span>
          <span className='Crew-tabs__item'></span>
          <span className='Crew-tabs__item'></span>
        </div>
      </section>
    </CStyles>
  )
}

export default Crew