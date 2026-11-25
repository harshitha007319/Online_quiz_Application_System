import Timer from "../components/Timer";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";

function Quiz({
  questions,
  currentQuestion,
  selectedAnswer,
  setSelectedAnswer,
  onNext,
  timeLeft,
}) {
  const question = questions[currentQuestion];

  if (!question) return null;

  return (
    <div className="quiz-page">
      <div className="quiz-container">

        <div className="quiz-info">
          <h2>🧠 Quiz Time!</h2>

          <p className="question-count">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <Timer timeLeft={timeLeft} />

        <ProgressBar
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
        />

        <QuestionCard
          question={question}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={setSelectedAnswer}
        />

        <button
          type="button"
          className="main-button"
          onClick={onNext}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question →"}
        </button>

      </div>
    </div>
  );
}

export default Quiz;