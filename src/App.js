import React, { useState } from "react";

import "./App.css";

function App() {
  const [level, setLevel] = useState(1);
  const [totalXP, setTotalXP] = useState(0);
  const [levelSpecificXP, setLevelSpecificXP] = useState(0);
  const [vp, setVP] = useState(0);
  const [hourlyXP, setHourlyXP] = useState(26);

  const levelXP = [0, 50, 150, 300, 500, 750];

  const checkLevel = () => {
    console.log(totalXP);
    if (totalXP >= levelXP[level]) {
      setLevelSpecificXP(
        (prev) => prev - (levelXP[level] - levelXP[level - 1])
      );
      setLevel((prev) => (prev += 1));
    }

    // const levelDifference = levelXP[level] - levelXP[level - 1];
    // console.log(levelDifference);
    // if (levelSpecificXP >= levelDifference) {
    //   setLeveSpecificXP(levelSpecificXP - levelDifference);
    //   setLevel((prevState) => prevState + 1);
    // }
  };

  const handleClickButton1 = () => {
    checkLevel();
    // Total XP
    setTotalXP((prev) => prev + hourlyXP);

    // Level Specific XP
    setLevelSpecificXP((prev) => prev + hourlyXP);
  };

  return (
    <div>
      <h1>Data testing for software mechanism</h1>
      <ul>
        <h3>User Data</h3>
        <li>Level: {level}</li>
        <li>Total XP: {totalXP}</li>
        <li>Level Specific XP: {levelSpecificXP}</li>
        <li>Vigama Points: {vp}</li>
      </ul>
      <ul>
        <h3>Backend Data</h3>
        <li></li>
      </ul>
      <div>
        <button
          onClick={() => {
            handleClickButton1();
          }}
        >
          One hour of study
        </button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
      </div>
    </div>
  );
}

export default App;
