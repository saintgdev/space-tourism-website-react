import { Routes, Route } from 'react-router-dom'
import GlobalStyles from "./styles/GlobalStyles"
import Header from "./components/Header/Header"

// Imports Pages
import Home from './views/00-Home/Home'
import Destination from './views/01-Destination/Destination'
import Crew from './views/02-Crew/Crew'
import Technology from './views/03-Technology/Technology'

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </>
  )
}

export default App
