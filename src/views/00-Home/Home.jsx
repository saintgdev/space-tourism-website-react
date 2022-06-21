import { HStyles } from './Styles'

function Home() {
  return (
    <HStyles>
      <section className='Home-text'>
        <h1 className='Home-text__title'>So, you want to travel to</h1>
        <span className='Home-text__subtitle'>Space</span>
        <p className='Home-text__desc'>
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
        </p>
      </section>
      <div className='Home-explore'>
        <button className='Home-explore__btn'>Explore</button>
      </div>
    </HStyles>
  )
}

export default Home