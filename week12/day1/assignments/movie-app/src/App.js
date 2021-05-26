import './App.css';
import MovieContainer from './components/MovieContainer';


function App() {
  console.log(process.env.API_KEY)
  return (
    <div className="App">
      <MovieContainer />
    </div>
  );
}

export default App;
