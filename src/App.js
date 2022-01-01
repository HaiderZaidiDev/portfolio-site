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
    <Container fluid>
      <MainNavbar/>
      <Header
        title="Hey, I'm Haider."
        body="A second-year business student with a passion for tech."
        showIcons={true}
      />
      <About/>
      <Projects/>
    </Container>
  );
}

export default App;
