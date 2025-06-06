import './App.css'
import BreakingNews from './components/BreakingNews'
import Header from './components/Header'
import HeaderSlider from './components/HeaderSlider'
import Hero from './components/Hero'
import LatestTweets from './components/LatestTweets'
import Minting from './components/Minting'

function App() {

  return (
    <>
      <HeaderSlider />
      <Header />
      <Hero />
      <BreakingNews />
      <LatestTweets />
      <Minting />
    </>
  )
}

export default App
