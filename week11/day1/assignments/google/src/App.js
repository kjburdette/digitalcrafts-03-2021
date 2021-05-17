import './App.css';
import Nav from './Nav';
import Logo from './Logo';
import Search from './Search';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="center">
      <Logo />
      <Search />
      </div>
      <Footer />
    </div>
  );
}

export default App;
