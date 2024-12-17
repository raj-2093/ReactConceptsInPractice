import React, { useEffect, useState } from "react";
import Comment from "./Comment";

export default function Post({ title, userID, body, comments, id }) {
  useEffect(() => {}, []);
  console.log("rj_ COmments ,", comments);
  //   const thisPostComment = comments.filter((comment) => {
  //     console.log("rj_ comment.postId -- ", comment.postId);
  //     return comment.postId == id;
  //   });
  //   console.log("this post comment -- ", thisPostComment, id);

  const [commentOpen, setCommentOpen] = useState(false);
  return (
    <div
      className="post-wrapper"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <div
        className="post"
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "12px",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <div className="title" style={{}}>
          <h4
            style={{
              maxWidth: "300px",
            }}
          >
            {title}
          </h4>
        </div>
        <div className="body">
          <p
            style={{
              maxWidth: "500px",
            }}
          >
            {body}
          </p>
        </div>
        <div className="comment-toggle">
          <button>Open Comments</button>
        </div>
      </div>

      <div
        className="comments"
        style={{
          height: "100%",
          display: !commentOpen ? "block" : "none",
        }}
      >
        <div className="label">
          <span>Comments - {comments?.length} users commented</span>
        </div>
        <div className="comment-list">
          {/* {comments.map((comment) => {
            return (
              <Comment
                name={comments.name}
                email={comments.email}
                body={comments.body}
                key={comments.id}
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
