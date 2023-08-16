import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <header className={styles.header}>
          <nav>
            <ul className={styles.nav}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <h1>Hello World!</h1>
        </header>

        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <footer className={styles.footer}>
          <p>&copy; Hello World</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
