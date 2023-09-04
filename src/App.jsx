import './App.css'
import Banner from './components/Banner/Banner'
import Counter from './components/Counter/Counter'
import Footer from './components/Footer/Footer'
import FormPart from './components/FormPart/FormPart'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Testimonial from './components/Testimonial/Testimonial'
import Video from './components/Video/Video'
import Location from './components/Location/Location'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Counter></Counter>
      <Video></Video>
      <Testimonial></Testimonial>
      <FormPart></FormPart>
      <Location></Location>
      <Footer></Footer>
    </>
  )
}

export default App
