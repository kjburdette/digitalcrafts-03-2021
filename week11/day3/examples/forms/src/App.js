import "./App.css";
import Form from "./components/Form";
import CarlosForm from "./components/CarlosForm";
function App() {
  return (
    <div className="App">
      {/* Uncomment out form to see the new bigger shipping form */}
      {/* <Form /> */}
      <CarlosForm />
    </div>
  );
}

export default App;