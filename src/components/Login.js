import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email) {
      navigate(`/dashboard?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>

      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default Login;
