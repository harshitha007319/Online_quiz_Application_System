function Leaderboard() {
  const leaderboard = JSON.parse(
    localStorage.getItem("quizLeaderboard") || "[]"
  );

  return (
    <div className="leaderboard-page">
      <h1>🏆 Leaderboard</h1>

      <p>Top Quiz Performers</p>

      <div className="leaderboard-card">
        {leaderboard.length === 0 ? (
          <p>No scores available yet. Play a quiz first!</p>
        ) : (
          leaderboard.map((student, index) => (
            <div className="leaderboard-item" key={index}>
              <span>
                #{index + 1} {student.name}
              </span>

              <span>
                {student.category} - {student.score}/5
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Leaderboard;