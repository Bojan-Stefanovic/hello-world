import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Dashboard.module.css";
function Dashboard() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");

  return (
    <div className={styles.container}>
      <main>
        <p>Welcome {email || "Not available"}</p>
      </main>
    </div>
  );
}

export default Dashboard;
