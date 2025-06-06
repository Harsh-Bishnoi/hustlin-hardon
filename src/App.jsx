import './App.css'
import BreakingNews from './components/BreakingNews'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import HeaderSlider from './components/HeaderSlider'
import Hero from './components/Hero'
import LatestTweets from './components/LatestTweets'
import Minting from './components/Minting'
import Roadmap from './components/Roadmap'
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
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </>
  )
}

export default App
