import './App.css';
import SearchTool from "./SearchTool";
import Location from "./Location";
import Weather from "./Weather";
import "./background.jpg";

function App() {
  return (
    <div className="App">
      <div className = "Container">
        <SearchTool></SearchTool>
        <Location></Location>
        <Weather></Weather>
      </div>
    </div>
  );
}

export default App;
