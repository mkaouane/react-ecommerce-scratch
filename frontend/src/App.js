import './App.css';
import Header from './components/Header'
import styled from 'styled-components'
import Home from './components/Home'
import Footer from './components/Footer';
import ProductScreen from './screens/ProductScreen'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import CartScreen from './screens/CartScreen';

function App() {
  return (
<Router>

    <Container className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart/:id?" component={CartScreen} />
        <Route path='/product/:id' component={ProductScreen} />

        <Footer />
        </Switch>
    </Container>
</Router>
  );
}

export default App;

const Container = styled.div`
`