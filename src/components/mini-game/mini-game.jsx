import React, { useState, useEffect } from "react";

const CourierGame = () => {
  const [courierPosition, setCourierPosition] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30-second timer

  useEffect(() => {
    // Move the courier randomly every 1 second
    const intervalId = setInterval(() => {
      const x = Math.floor(Math.random() * 90); // Random position between 0 and 90% of screen width
      const y = Math.floor(Math.random() * 90); // Random position between 0 and 90% of screen height
      setCourierPosition({ x, y });
    }, 1000);

    // Timer countdown
    const timerId = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(timerId);
    };
  }, []);

  const handleCourierClick = () => {
    if (timeLeft > 0) {
      setScore(score + 1);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Catch the Courier!</h1>
      <p>Score: {score}</p>
      <p>Time Left: {timeLeft}s</p>

      {timeLeft > 0 ? (
        <div
          onClick={handleCourierClick}
          style={{
            ...styles.courier,
            left: `${courierPosition.x}%`,
            top: `${courierPosition.y}%`,
          }}
        >
          🚚
        </div>
      ) : (
        <h2>Game Over! Your Score: {score}</h2>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  courier: {
    position: "absolute",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    fontSize: "40px",
    userSelect: "none",
  },
};

export default CourierGame;
