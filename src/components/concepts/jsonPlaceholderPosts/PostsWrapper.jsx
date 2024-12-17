import React, { useEffect, useState } from "react";
import Post from "./Post";
import SimpleLoader from "../SimpleLoader";

export default function PostsWrapper() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((jsonRes) => {
        console.log("Response - ", jsonRes);
        setPosts(jsonRes);
        console.log("posts - ", posts);
        // console.log(
        //   "posts[0] - ",
        //   posts.map((post, index) => {
        //     console.log(`post[${index}] - `, post);
        //   })
        // );
      });

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((jsonRes) => {
        console.log("Comments - ", jsonRes);
        setComments(jsonRes);
      });
  }, []);

  return (
    <div className="posts-wrapper">
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
                comments={comments}
              />
            );
          })
        )}
        {/* {} */}
      </div>
    </div>
  );
}
