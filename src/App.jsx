import './App.css'
import BreakingNews from './components/BreakingNews'
import Header from './components/Header'
import HeaderSlider from './components/HeaderSlider'
import Hero from './components/Hero'
import LatestTweets from './components/LatestTweets'

function App() {

  return (
    <>
      <HeaderSlider />
      <Header />
      <Hero />
      <BreakingNews />
      <LatestTweets />
    </>
  )
}

export default App
