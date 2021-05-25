import './App.css';
import Home from './components/Home';
import Store from './components/Store';
import Contact from './components/Contact';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
