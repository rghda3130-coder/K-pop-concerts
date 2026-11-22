function Register() {
  return (
    <div className="page">
      <form className="form">
        <h2>Register</h2>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Your name" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="you@example.com" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;