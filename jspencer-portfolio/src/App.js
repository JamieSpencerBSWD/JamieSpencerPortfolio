import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import GithubProjects from './components/GithubProjects';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      {/* <GithubProjects/> */}
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
