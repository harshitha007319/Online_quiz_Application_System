function Result({ studentName, answers, onRestart }) {
  const totalQuestions = answers.length;

  const correctAnswers = answers.filter(
    (item) => item.selectedAnswer === item.correctAnswer
  ).length;

  const wrongAnswers = totalQuestions - correctAnswers;

  const percentage =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

  let message = "";

  if (percentage >= 80) {
    message = "Excellent! You are a Quiz Champion! 🏆";
  } else if (percentage >= 50) {
    message = "Good Job! Keep Learning! 🌟";
  } else {
    message = "Keep Practicing! You Can Do Better! 💪";
  }

  return (
    <div className="result-page">
      <div className="result-card">
        <h1>🎉 Quiz Completed!</h1>

        <h2>Congratulations, {studentName}!</h2>

        <p>{message}</p>

        <div className="score-box">
          <h3>Your Score</h3>
          <h1>{correctAnswers} / {totalQuestions}</h1>
          <h2>{percentage}%</h2>
        </div>

        <div className="result-stats">
          <div>
            <h2>{correctAnswers}</h2>
            <p>✅ Correct Answers</p>
          </div>

          <div>
            <h2>{wrongAnswers}</h2>
            <p>❌ Wrong Answers</p>
          </div>

          <div>
            <h2>{totalQuestions}</h2>
            <p>📝 Total Questions</p>
          </div>
        </div>

        <h2>📋 Answer Review</h2>

        <div className="review-section">
          {answers.map((item, index) => {
            const isCorrect =
              item.selectedAnswer === item.correctAnswer;

            return (
              <div className="review-item" key={index}>
                <h3>
                  {index + 1}. {item.question}
                </h3>

                <p>
                  Your Answer:{" "}
                  {item.selectedAnswer === null
                    ? "Not Answered"
                    : item.options[item.selectedAnswer]}
                </p>

                <p>
                  Correct Answer:{" "}
                  {item.options[item.correctAnswer]}
                </p>

                <strong className={isCorrect ? "correct-text" : "wrong-text"}>
                  {isCorrect ? "✅ Correct" : "❌ Incorrect"}
                </strong>
              </div>
            );
          })}
        </div>

        <button className="main-button" onClick={onRestart}>
          🔄 Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default Result;