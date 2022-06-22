import { useRef } from 'react'
import { useInfo } from '../../hooks/useInfo'
import { destinationData } from '../../helpers/getPagesData'
import PageTitle from '../../components/PageTitle'
import { DStyles } from './Styles'


function Destination() {
  const allItems = useRef()
  const { infoIndex, setActiveTab } = useInfo(allItems)

  return (
    <DStyles>
      <section>
        <PageTitle pageId='01'>Pick your destination</PageTitle>
        <div className='Destination-preview' ref={allItems}>
          {
            destinationData.map(data => (
              <img
                src={data.images.png}
                alt={data.name}
                className='Destination-preview__img'
              />
            ))
          }
        </div>
      </section>
      <section>
        <nav
          className='Destination-tabs'
          onClick={(even) => setActiveTab(even, 'Destination-tabs__item')}
        >
          <span className='Destination-tabs__item show'>Moon</span>
          <span className='Destination-tabs__item'>Mars</span>
          <span className='Destination-tabs__item'>Europa</span>
          <span className='Destination-tabs__item'>Titan</span>
        </nav>

        <article className='Destination-info'>
          <h2 className='Destination-info__title'>{destinationData[infoIndex].name}</h2>
          <p className='Destination-info__desc'>{destinationData[infoIndex].description}</p>
          <div className='Destination-data'>
            <div className='Destination-data__item'>
              <span className='Destination-data__title'>Avg. distance</span>
              <span className='Destination-data__desc'>{destinationData[infoIndex].distance}</span>
            </div>
            <div className='Destination-data__item'>
              <span className='Destination-data__title'>Est. travel time</span>
              <span className='Destination-data__desc'>{destinationData[infoIndex].travel}</span>
            </div>
          </div>
        </article>

      </section>
    </DStyles>
  )
}

export default Destination