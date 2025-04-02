import './App.css'
import Navbar from './components/Navbar'
import About from './layout/About'
import Footer from './layout/Footer'
import GridTestimonials from './layout/GridTestimonials'
import Hero from './layout/Hero'
import Projects from './layout/Projects'
import SliderPages from './layout/SliderPages'
import WhyUS from './layout/WhyUs'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="projects">
        <Projects />
      </div>
      <div id="whyus">
        <WhyUS />
      </div>
      <div id="about">
        <About />
      </div>
      <SliderPages />
      <div id="testimonials">
        <GridTestimonials />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}

export default App;
