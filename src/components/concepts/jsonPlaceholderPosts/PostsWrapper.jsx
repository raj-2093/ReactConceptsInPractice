import React, { useEffect, useState } from "react";
import Post from "./Post";
import SimpleLoader from "../SimpleLoader";

export default function PostsWrapper() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((jsonPostRes) => {
        fetch("https://jsonplaceholder.typicode.com/comments")
          .then((response) => response.json())
          .then((jsonCommentRes) => {
            console.log("Comments - ", jsonCommentRes);
            for (const post of jsonPostRes) {
              post.comments = [];
            }

            for (const comment of jsonCommentRes) {
              jsonPostRes.forEach((post) => {
                if (post.id == comment.postId) {
                  post.comments.push(comment);
                }
              });
            }

            setPosts(jsonPostRes);
            // setComments(jsonCommentRes);
          });

        // setPosts(jsonPostRes);
      });
  }, []);

  return (
    <div
      className="posts-wrapper"
      style={{
        height: "70vh",
        overflow: "auto",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "20px",
        scrollbarWidth: "none",
        position: "relative",
      }}
    >
      <div className="add-new-post">
        <div className="label">
          <h2>Add new Posts</h2>
        </div>

        <div className="form">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              if (
                newPostTitle != "" &&
                newPostTitle != null &&
                newPostBody != "" &&
                newPostBody != null
              ) {
                fetch("https://jsonplaceholder.typicode.com/posts", {
                  method: "POST",
                  body: JSON.stringify({
                    title: newPostTitle,
                    body: newPostBody,
                    userId: 1,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                })
                  .then((response) => response.json())
                  .then((postJsonRes) => {
                    posts.push(postJsonRes);
                    console.log(postJsonRes);
                  });
              }
            }}
          >
            <input
              type="text"
              name=""
              id="new-post-title"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              placeholder="Enter Title"
            />
            <input
              type="text"
              name=""
              id="new-post-body"
              value={newPostBody}
              onChange={(e) => setNewPostBody(e.target.value)}
              placeholder="Write a new post"
            />
            <input type="submit" value="Post" />
          </form>
        </div>
      </div>
      <div className="label">
        <h2>Recommended Posts</h2>
      </div>
      <div
        className="posts"
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "12px",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {!posts ? (
          <SimpleLoader />
        ) : (
          posts.map((post) => {
            return (
              <Post
                title={post.title}
                body={post.body}
                key={post.id}
                id={post.id}
                userID={post.userId}
                //   comments={() => {
                //     const postComments = comments.filter(
                //       (comment) => comment.postId == post.id
                //     );
                //     console.log("postComments -- ", postComments);
                //     return postComments;
                //   }}
                //   comments={comments.filter((comment) => comment.postId == post.id)}
                comments={post.comments}
              />
            );
          })
        )}
        {/* {} */}
      </div>
    </div>
  );
}
