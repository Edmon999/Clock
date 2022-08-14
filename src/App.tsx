import Clock from "./components/Clock/Clock";
import SemiCircle from "./components/SemiCircle/SemiCircle";

import "./App.css";

function App() {
  return (
    <div className="clock container">
      <Clock />
      <SemiCircle />
    </div>
  );
}

export default App;
