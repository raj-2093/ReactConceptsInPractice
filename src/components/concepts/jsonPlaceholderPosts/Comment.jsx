import React from "react";

export default function Comment({ name, email, body }) {
  return (
    <div
      className="comment"
      style={{
        border: "1px solid black",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <div
        className="user-info"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* <div className="user-name">
          <span>name: {name}</span>
        </div>
        | */}
        <div className="email">
          <span>email: {email}</span>
        </div>
      </div>
      <div className="body">
        <p>{body}</p>
      </div>
    </div>
  );
}
