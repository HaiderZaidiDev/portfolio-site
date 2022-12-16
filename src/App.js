import './index.css';

// Bootstrap
import Container from 'react-bootstrap/Container'

// Child Components
import MainNavbar from './components/MainNavbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'


const App = () => {
  return (
    <Container fluid id="no-padding">
      <div className="hero">
        <MainNavbar/>
        <Header
          title="Hey, I'm Haider"
          body="A third-year business student with a passion for tech."
          showIcons={true}
        />
      </div>
      <About/>
      <Projects/>
    </Container>
  );
}

export default App;
