import './App.css'
import BreakingNews from './components/BreakingNews'
import Header from './components/Header'
import HeaderSlider from './components/HeaderSlider'
import Hero from './components/Hero'
import LatestTweets from './components/LatestTweets'
import Minting from './components/Minting'
import Team from './components/Team'

function App() {

  return (
    <>
      <HeaderSlider />
      <Header />
      <Hero />
      <BreakingNews />
      <LatestTweets />
      <Minting />
      <Team />
    </>
  )
}

export default App
