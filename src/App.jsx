import { useState } from "react";
import StartScreen from "./components/StartScreen";
import { useSelector } from "react-redux";
import PlayScreen from "./components/PlayScreen";

function App() {
  const { isStart } = useSelector((state) => state.starter);
  return (
    <>
      <div className="bg-purple-400 max-h-screen h-screen">
        {!isStart ? <StartScreen /> : <PlayScreen />}
      </div>
    </>
  );
}

export default App;
