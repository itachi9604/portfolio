import './App.css';
import Contact from './components/Contact';
import Contributions from './components/Contributions';
import Experience from './components/Experience';
import Info from './components/Info';
import MainName from './components/MainName.js'
import Profile from './components/Profile';
import Projects from './components/Projects';
import Qualifications from './components/Qualifications';
import Skills from './components/Skills';


function App() {
  
  return (
  <>
    <div className="main-app">
    <MainName cssProperty="level-one-margin" name="Pranay Patil"></MainName>
    <Profile cssProperty="level-one-margin" />
    <Info cssProperty="level-one-margin" />
    <Skills />
    <Experience />
    <Contributions />
    <Qualifications />
    <Projects />
    <Contact />
    </div>
  </>
  );
}

export default App;
