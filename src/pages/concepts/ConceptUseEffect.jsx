import React, { useEffect } from "react";
import PostsWrapper from "../../components/concepts/jsonPlaceholderPosts/PostsWrapper";

export default function ConceptUseEffect() {
  useEffect(() => {
    console.log("Render function called");
    return () => {
      console.log("Clean-up function called");
    };
  }, []);
  return (
    <div>
      <h2>This page demonstrates the use of use-effect hook</h2>
      <div className="practices">
        <div className="practice-label">
          <h3>This is using jsonplaceholder apis</h3>
        </div>
        <div
          className="json-placeholder-api"
          style={{
            height: "70vh",
            overflow: "auto",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "20px",
            scrollbarWidth: "none",
          }}
        >
          <PostsWrapper />
        </div>
      </div>
    </div>
  );
}
