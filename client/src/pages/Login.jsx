function Login() {
  return (
    <div className="page">
      <form className="form">
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="you@example.com" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;