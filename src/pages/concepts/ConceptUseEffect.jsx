import React, { useEffect } from "react";

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
      <button>Change</button>
    </div>
  );
}
