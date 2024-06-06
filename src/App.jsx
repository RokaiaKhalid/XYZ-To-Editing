import './App.css'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Features from './Components/Features'
import About from './Components/About'
import Pricing from './Components/Pricing'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'

function App() {
  document.querySelectorAll('button').forEach((btn) => btn.innerHTML == "" ? btn.style.display = 'none' : btn.style.display = 'inline-block' )
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <About />
      <Pricing />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
