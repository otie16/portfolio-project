// import './index.css'
import Header from "./components/header/header"
import Nav from "./components/nav/nav"
import Footer from "./components/footer/footer"
import Experience from "./components/experience/experience"
// import Services from "./components/services/services"
import Contact from "./components/contact/contact"
import Portfolio from "./components/portfolio/portfolio"
import About from "./components/about/about"

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
     )
}

export default App;
