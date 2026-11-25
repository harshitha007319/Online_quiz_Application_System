function Timer({ timeLeft }) {
  return (
    <div className={`timer ${timeLeft <= 5 ? "warning" : ""}`}>
      <span>⏱️ Time Left:</span>
      <strong>{timeLeft} seconds</strong>
    </div>
  );
}

export default Timer;