function Login({ onLogin, onShowSignup }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-icon">🚀</div>

        <h1>Welcome Back!</h1>
        <p>Login to continue your QuizMaster journey.</p>

        <form onSubmit={onLogin}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="main-button">
            Login
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?
          <button type="button" onClick={onShowSignup}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;