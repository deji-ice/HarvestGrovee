import './App.css'
import About from './components/About'
import Cultivate from './components/Cultivate'
import CultivateSustain from './components/CultivateSustain'
import Farm from './components/Farm'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import Provide from './components/Provide'

function App() {

  return (
    <>
    <NavBar />
    <HeroSection/>
    <About/>
    <Farm/>
    <Provide/>
    <Cultivate/>
    <CultivateSustain/>
    <Footer/>
    {/* <div>Icons made from <a href="https://www.onlinewebfonts.com/icon">svg icons</a>is licensed by CC BY 4.0</div> */}
    </>
  )
}

export default App
