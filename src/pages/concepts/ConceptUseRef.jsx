import React, { useRef } from "react";

export default function ConceptUseRef() {
  const fileInputRef = useRef(null);
  console.log("ref - ", fileInputRef);
  return (
    <div>
      <h2>This page demonstrates the use of use-ref hook</h2>
      <hr />
      <h3>Example 1</h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          border: "1px solid black",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <img
          src="src\assets\icons\user.png"
          style={{
            width: "100px",
            height: "auto",
          }}
          onClick={() => {
            fileInputRef.current.click();
          }}
        ></img>
        <input
          type="file"
          name=""
          id="fileInput"
          ref={fileInputRef}
          style={{
            display: "none",
          }}
        />
        <input type="text" name="" id="" placeholder="Name" />
        <input type="text" name="" id="" placeholder="Enroll No." />
        <input type="text" name="" id="" placeholder="Phone" />
        <input type="button" value="Submit" />
      </form>
    </div>
  );
}
