import React from "react";

export default function Comment({ name, email, body }) {
  return (
    <div className="comment">
      <div className="user-name">
        <span>{name}</span>
      </div>
      <div className="email">
        <span>{email}</span>
      </div>
      <div className="body">
        <p>{body}</p>
      </div>
    </div>
  );
}
