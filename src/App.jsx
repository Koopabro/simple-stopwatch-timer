import "./App.css";
import { useStopwatch } from "react-timer-hook";
function App() {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  return (
    <div className="App">
      <h1>Timer</h1>
      <p>
        {minutes} : {seconds}
      </p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button
        onClick={() => {
          reset();
          pause();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
