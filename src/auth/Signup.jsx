function Signup({ onSignup, onShowLogin }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-icon">✨</div>

        <h1>Create Account</h1>
        <p>Join QuizMaster and start learning!</p>

        <form onSubmit={onSignup}>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Create a password"
            minLength="6"
            required
          />

          <button type="submit" className="main-button">
            Create Account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?
          <button type="button" onClick={onShowLogin}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;