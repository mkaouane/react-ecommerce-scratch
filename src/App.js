import './App.css';
import Header from './components/Header'
import styled from 'styled-components'
import Home from './components/Home'
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
<Router>

    <Container className="App">
      <Header />
      <Home />
      <Footer />
    </Container>
</Router>
  );
}

export default App;

const Container = styled.div`
`