import React from "react";
import { Link } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export default function TopNav() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1>React</h1>
      </div>
      <div>
        <nav>
          <ul
            type="none"
            style={{
              display: "flex",
              gap: "12px",
              padding: 0,
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Core Concepts</Link>
            </li>
            {!isAuthenticated && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {isAuthenticated && (
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
