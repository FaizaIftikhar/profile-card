import React, { useState } from "react";

function SimpleProfileCard({ name, age, location }) {
  const [currentAge, setCurrentAge] = useState(age);

  // Function to update age
  const increaseAge = () => {
    setCurrentAge(currentAge + 1);
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {currentAge}</p>
      <p>Location: {location}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default SimpleProfileCard;
