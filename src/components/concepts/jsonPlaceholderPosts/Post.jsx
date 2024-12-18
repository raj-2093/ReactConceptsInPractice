import React, { useEffect, useState } from "react";
import Comment from "./Comment";

export default function Post({ title, userID, body, comments, id }) {
  useEffect(() => {}, []);
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
          <button
            onClick={() => {
              setCommentOpen(!commentOpen);
            }}
          >
            Open Comments
          </button>
        </div>
      </div>

      <div
        className="comments"
        style={{
          height: "250px",
          overflow: "auto",
          display: commentOpen ? "block" : "none",
        }}
      >
        <div className="label">
          <h3>Comments - {comments?.length} users commented</h3>
        </div>
        <hr />
        <div
          className="comment-list"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="add-comment-button">
            <input type="text" name="" id="" placeholder="Add a comment" />
            <button>Post comment</button>
          </div>
          {comments.map((comment) => {
            return (
              <Comment
                name={comment.name}
                email={comment.email}
                body={comment.body}
                key={comment.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
