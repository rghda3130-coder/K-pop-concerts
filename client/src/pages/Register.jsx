function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Name" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;