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
          body="A new-grad with a passion for building things."
          showIcons={true}
        />
      </div>
      <About/>
      <Projects/>
    </Container>
  );
}

export default App;
