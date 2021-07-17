import './index.css';

// Bootstrap
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Child Components
import MainNavbar from './components/MainNavbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'


const AppContent = () => {
  return (
    <Container fluid>
      <MainNavbar/>
      <Header
        title="Hey, I'm Haider."
        body="A software engineer and a business student; who could of known?"
        showIcons={true}
      />
      <About/>
      <Projects/>
    </Container>
  );
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppContent} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:blogId" component={BlogPost} />
      </Switch>
    </Router>
  );
}

export default App;
