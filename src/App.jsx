import './App.css'
import BackToTop from './components/BackToTop'
import BreakingNews from './components/BreakingNews'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import LatestTweets from './components/LatestTweets'
import Minting from './components/Minting'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import TopSlider from './components/TopSlider'

function App() {

  return (
    <>
      <TopSlider />
      <Header />
      <Hero />
      <BreakingNews />
      <LatestTweets />
      <Minting />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
