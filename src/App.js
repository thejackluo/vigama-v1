import React, { useState } from "react";

import "./App.css";

function App() {
  const [level, useLevel] = useState(1);
  const [totalXP, useTotalXP] = useState(0);
  const [levelSpecificXP, useLeveSpecificXP] = useState(0);
  const [vp, useVP] = useState(0);

  const handleClickButton1 = () => {};

  return (
    <div>
      <h1>Data testing for software mechanism</h1>
      <ul>
        <li>Level: {level}</li>
        <li>Total XP: {totalXP}</li>
        <li>Level Specific XP: {levelSpecificXP}</li>
        <li>Vigama Points: {vp}</li>
      </ul>
      <div>
        <button onClick={handleClickButton1}>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
      </div>
    </div>
  );
}

export default App;
