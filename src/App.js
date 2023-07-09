import Tooltip from "./Tooltip";
import './index.css';

function App() {
  return (
    <div className="App">
      <Tooltip text={"Thanks for hovering! I am a tooltip."}>
        Hover over me!
      </Tooltip>
    </div>
  );
}

export default App;
