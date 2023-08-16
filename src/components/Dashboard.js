import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Dashboard.module.css";
function Dashboard() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");

  return (
    <div className={styles.container}>
      <header>
        <nav>
          <ul>
            {/* <li>
              <a href="/">Home</a>
            </li> */}
          </ul>
        </nav>
        {/* <h1>Dashboard</h1> */}
      </header>

      <main>
        <p>Welcome {email || "Not available"}</p>
      </main>
    </div>
  );
}

export default Dashboard;
