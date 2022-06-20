import { useRef, useState } from 'react'
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
    if (destiny > 0) {
      sliderContainer.current.style.transform = `translateX(-${destiny}00%)`
    } else {
      sliderContainer.current.style.transform = `translateX(0%)`
    }
  }
}


function Destination() {
  const [destiny, setDestiny] = useState(0)
  const sliderContainer = useRef()

  return (
    <DStyles>
      <section>
        <h1><span>{`0 ${destiny + 1}`}</span> Pick your destination</h1>
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
        <h1>
          {
            destinationData[destiny].name
          }
        </h1>
      </section>
    </DStyles>
  )
}

export default Destination