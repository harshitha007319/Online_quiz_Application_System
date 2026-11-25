function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
}) {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>

      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            type="button"
            key={index}
            className={`option-button ${
              selectedAnswer === index ? "selected" : ""
            }`}
            onClick={() => onSelectAnswer(index)}
          >
            {String.fromCharCode(65 + index)}. {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;