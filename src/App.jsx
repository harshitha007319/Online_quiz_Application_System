import { useEffect, useState } from "react";

import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Leaderboard from "./pages/Leaderboard";

import { questionBank } from "./data/questions";

function App() {
  // Student details
  const [studentName, setStudentName] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [email, setEmail] = useState("");

  // Quiz settings
  const [category, setCategory] = useState("HTML");
  const [shuffleQuestions, setShuffleQuestions] = useState(false);

  // Quiz states
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);

  const [timeLeft, setTimeLeft] = useState(15);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  // Leaderboard
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const [leaderboard, setLeaderboard] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("leaderboard")) || [];
    } catch {
      return [];
    }
  });

  // Save leaderboard
  useEffect(() => {
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  }, [leaderboard]);

  // Start quiz
  const startQuiz = () => {
    if (
      !String(studentName ?? "").trim() ||
      !String(registerNumber ?? "").trim() ||
      !String(email ?? "").trim()
    ) {
      alert("Please enter all student details!");
      return;
    }

    let selectedQuestions = [...(questionBank[category] || [])];

    if (shuffleQuestions) {
      selectedQuestions.sort(() => Math.random() - 0.5);
    }

    setQuestions(selectedQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setTimeLeft(15);

    setShowLeaderboard(false);
    setQuizFinished(false);
    setQuizStarted(true);
  };

  // Finish quiz
  const finishQuiz = (finalAnswers) => {
    setAnswers(finalAnswers);
    setQuizStarted(false);
    setQuizFinished(true);

    const score = finalAnswers.filter(
      (item) => item.selectedAnswer === item.answer
    ).length;

    const newEntry = {
      name: studentName,
      registerNumber: registerNumber,
      email: email,
      category: category,
      score: score,
      total: questions.length,
    };

    setLeaderboard((previous) => [newEntry, ...previous]);
  };

  // Next question
  const handleNextQuestion = () => {
    const current = questions[currentQuestion];

    const updatedAnswers = [
      ...answers,
      {
        question: current.question,
        options: current.options,
        selectedAnswer: selectedAnswer,
        answer: current.answer,
      },
    ];

    if (currentQuestion === questions.length - 1) {
      finishQuiz(updatedAnswers);
    } else {
      setAnswers(updatedAnswers);
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
      setTimeLeft(15);
    }
  };

  // Timer
  useEffect(() => {
    if (!quizStarted || quizFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          clearInterval(timer);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, quizFinished, currentQuestion]);

  // Automatically move to next question when time ends
  useEffect(() => {
    if (quizStarted && timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, quizStarted]);

  // Restart quiz
  const restartQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setShowLeaderboard(false);

    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setQuestions([]);
    setTimeLeft(15);
  };

  return (
    <div className="app">
      <Navbar />

      {showLeaderboard ? (
        <Leaderboard
          leaderboard={leaderboard}
          onBack={() => setShowLeaderboard(false)}
        />
      ) : quizStarted ? (
        <Quiz
          questions={questions}
          currentQuestion={currentQuestion}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          onNext={handleNextQuestion}
          timeLeft={timeLeft}
        />
      ) : quizFinished ? (
        <Result
          studentName={studentName}
          registerNumber={registerNumber}
          email={email}
          category={category}
          answers={answers}
          onRestart={restartQuiz}
        />
      ) : (
        <Home
          studentName={studentName}
          setStudentName={setStudentName}
          registerNumber={registerNumber}
          setRegisterNumber={setRegisterNumber}
          email={email}
          setEmail={setEmail}
          category={category}
          setCategory={setCategory}
          shuffleQuestions={shuffleQuestions}
          setShuffleQuestions={setShuffleQuestions}
          onStartQuiz={startQuiz}
          onShowLeaderboard={() => setShowLeaderboard(true)}
        />
      )}
    </div>
  );
}

export default App;