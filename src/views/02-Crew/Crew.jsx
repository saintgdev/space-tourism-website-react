import { crewData } from '../../helpers/getPagesData'
import PagesTitle from "../../components/PageTitle"
import { CStyles } from "./Styles"
import { useInfo } from '../../hooks/useInfo'
import { useEffect, useRef, useState } from 'react'


// const handlerClickMember = (ev, idPicture, setIdPicture) => {
//   if (ev.target.classList.contains('Crew-tabs__item')) {
//     const allItems = Array.from(ev.target.parentElement.children)
//     allItems.filter(tab => {
//       if (tab.classList.contains('active')) {
//         tab.classList.remove('active')
//       }
//     })

//     ev.target.classList.add('active')

//     for (const [index, target] of Object.entries(ev.target.parentElement.children)) {
//       if (target.classList.contains('active')) {
//         updatePicture(index, idPicture, setIdPicture)
//       }
//     }
//   }
// }
// const updatePicture = (idPicture, currentPicture, newCurrentPicture) => {
//   newCurrentPicture(currentPicture = idPicture)
// }






function Crew() {
  // const [idPicture, setIdPicture] = useState(0)
  const crewMembers = useRef()
  const allTabs = useRef()

  const { infoIndex, setActiveTab } = useInfo(crewMembers)




  return (
    <CStyles>
      <PagesTitle pageId='02'>Meet your crew</PagesTitle>

      <section>
        <div className='Crew-members' ref={crewMembers}>
          {
            crewData.map(image => (
              <img
                src={image.images.png}
                alt={image.name}
                className='Crew-members__img'
              />
            ))
          }
        </div>
        <div
          className='Crew-tabs'
          onClick={(even) => setActiveTab(even, 'Crew-tabs__item')}>
          <span className='Crew-tabs__item show'></span>
          <span className='Crew-tabs__item'></span>
          <span className='Crew-tabs__item'></span>
          <span className='Crew-tabs__item'></span>
        </div>
      </section>

      <section className='Members-info'>
        <h2 className='Members-info__role'>{crewData[infoIndex].role}</h2>
        <p className='Members-info__name'>{crewData[infoIndex].name}</p>
        <p className='Members-info__bio'>{crewData[infoIndex].bio}</p>
      </section>
    </CStyles>
  )
}

export default Crew