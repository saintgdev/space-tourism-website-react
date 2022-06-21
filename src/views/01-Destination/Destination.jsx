
import { useRef, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import { destinationData } from '../../helpers/getPagesData'
import { DStyles } from './Styles'


const destinySelect = (event, destiny, setDestiny, sliderContainer) => {
  if (event.target.classList.contains('Destination-select__item')) {
    const allItems = Array.from(event.target.parentElement.children)
    allItems.map(item => {
      if (item.classList.contains('active')) {
        item.classList.remove('active')
      }
    })
    event.target.classList.add('active')
    allItems.filter(item => {
      if (item.classList.contains('active')) {
        setDestiny(destiny = allItems.indexOf(item))
      }
    })
  }
}

async function imagePlanet(index, slider) {

  const allImg = await Array.from(slider.children)
  allImg.map(image => image.style.opacity = '0')
  allImg[index].style.opacity = '1'
}




function Destination() {
  const [destiny, setDestiny] = useState(0)
  const sliderContainer = useRef(null)

  imagePlanet(destiny, sliderContainer.current)

  return (
    <DStyles>
      <section>
        <PageTitle pageId='01'>Pick your destination</PageTitle>
        <div className='Destination-preview'>
          <div className='Destination-preview__container' ref={sliderContainer}>
            {
              destinationData.map(data => <img src={data.images.png} alt={data.name} className='Destination-preview__img' />)
            }
          </div>
        </div>
      </section>
      <section>
        <nav className='Destination-select' onClick={(e) => destinySelect(e, destiny, setDestiny, sliderContainer)}>
          <span className='Destination-select__item active'>Moon</span>
          <span className='Destination-select__item'>Mars</span>
          <span className='Destination-select__item'>Europa</span>
          <span className='Destination-select__item'>Titan</span>
        </nav>
        <article className='Destination-info'>
          <h2 className='Destination-info__title'>{destinationData[destiny].name}</h2>
          <p className='Destination-info__desc'>{destinationData[destiny].description}</p>
          <div className='Destination-data'>
            <div className='Destination-data__item'>
              <span className='Destination-data__title'>Avg. distance</span>
              <span className='Destination-data__desc'>{destinationData[destiny].distance}</span>
            </div>
            <div className='Destination-data__item'>
              <span className='Destination-data__title'>Est. travel time</span>
              <span className='Destination-data__desc'>{destinationData[destiny].travel}</span>
            </div>
          </div>
        </article>
      </section>
    </DStyles>
  )
}

export default Destination