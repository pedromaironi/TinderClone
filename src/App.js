import "./App.css";
import  Header  from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <h3>Lets build the MERN TINDER clone</h3>

      {/* Header */}
      <Header />
      {/* TinderCards */}

      <TinderCards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;
