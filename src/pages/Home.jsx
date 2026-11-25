function Home({
  studentName,
  setStudentName,
  registerNumber,
  setRegisterNumber,
  email,
  setEmail,
  category,
  setCategory,
  shuffleQuestions,
  setShuffleQuestions,
  onStartQuiz,
  onShowLeaderboard,
}) {
  const isFormValid =
    String(studentName ?? "").trim() !== "" &&
    String(registerNumber ?? "").trim() !== "" &&
    String(email ?? "").trim() !== "";

  return (
    <div className="new-home">

      <section className="home-hero">

        <div className="home-left">
          <span className="home-tag">🚀 YOUR LEARNING JOURNEY STARTS HERE</span>

          <h1>
            Challenge Your
            <br />
            <span>Knowledge.</span>
            <br />
            Test Your Skills.
          </h1>

          <p>
            Welcome to QuizMaster! Improve your knowledge, challenge
            yourself and discover how much you know.
          </p>

          <div className="home-stats">
            <div>
              <h2>04</h2>
              <p>Categories</p>
            </div>

            <div>
              <h2>20+</h2>
              <p>Questions</p>
            </div>

            <div>
              <h2>100%</h2>
              <p>Learning</p>
            </div>
          </div>
        </div>

        <div className="home-right">
          <div className="hero-icon">🧠</div>
          <h2>Think. Learn. Win.</h2>
          <p>Every question takes you one step closer to success.</p>
          <div className="hero-decoration">✦ ✧ ✦</div>
        </div>

      </section>

      <section className="home-features">

        <div className="home-feature">
          <span>🎯</span>
          <h3>Test Yourself</h3>
          <p>Challenge your technical knowledge.</p>
        </div>

        <div className="home-feature">
          <span>⏱️</span>
          <h3>Beat the Timer</h3>
          <p>Answer questions before time runs out.</p>
        </div>

        <div className="home-feature">
          <span>🏆</span>
          <h3>Track Progress</h3>
          <p>Check your score and leaderboard position.</p>
        </div>

      </section>

      <section className="home-quiz-form">

        <div className="form-description">
          <span>📝 GET STARTED</span>
          <h2>Student Registration</h2>
          <p>Enter your details and get ready for the quiz!</p>
        </div>

        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={studentName ?? ""}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Register Number</label>
          <input
            type="text"
            placeholder="Enter your register number"
            value={registerNumber ?? ""}
            onChange={(e) => setRegisterNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email ?? ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Select Quiz Category</label>
          <select
            value={category || "HTML"}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
          </select>
        </div>

        <div className="shuffle-option">
          <label>
            <input
              type="checkbox"
              checked={!!shuffleQuestions}
              onChange={(e) => setShuffleQuestions(e.target.checked)}
            />
            Shuffle Questions
          </label>
        </div>

        <button
          className="main-button"
          type="button"
          disabled={!isFormValid}
          onClick={onStartQuiz}
        >
          Start Quiz 🚀
        </button>

        <button
          className="leaderboard-button"
          type="button"
          onClick={onShowLeaderboard}
        >
          🏆 View Leaderboard
        </button>

      </section>

    </div>
  );
}

export default Home;