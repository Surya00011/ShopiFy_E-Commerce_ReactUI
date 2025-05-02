import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <h2 style={styles.text}>Oops! Page Not Found</h2>
      <p style={styles.description}>
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link to="/" style={styles.link}>Go to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  heading: {
    fontSize: "100px",
    fontWeight: "bold",
    color: "#ff4c4c",
  },
  text: {
    fontSize: "24px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#666",
  },
  link: {
    fontSize: "18px",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#007bff",
    padding: "10px 20px",
    borderRadius: "5px",
  },
};

export default NotFound;
