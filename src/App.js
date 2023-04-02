import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Shop from "./Shop";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <Shop />
        </div>
      </div>
    </>
  );
}

export default App;
