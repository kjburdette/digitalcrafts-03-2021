import './App.css';
import AboutContainer from "./components/AboutContainer";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <Nav />
      <AboutContainer/>
      <Sidebar />
    </div>
  );
}

export default App;
