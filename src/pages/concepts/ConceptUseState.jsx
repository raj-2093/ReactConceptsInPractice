import React from "react";

export default function ConceptUseState() {
  let num1,
    num2,
    sum = 0;
  return (
    <>
      <h2>This page demonstrates the use of useState hook</h2>
      <div>
        <div>
          <h4>Without useState</h4>
          <hr />
          <p>
            Although the values will reflect on console as they change. The sum
            doesn't change because component is not re-rendering as it changes
          </p>
          <div>
            <input
              type="number"
              name=""
              id=""
              onChange={(e) => {
                console.log("Quantity 1 changed, value is - ", e.target.value);
                sum = sum + Number(e.target.value);
                console.log("New value of sum is - ", sum);
              }}
            />
            <input
              type="number"
              name=""
              id=""
              onChange={(e) => {
                console.log("Quantity 2 changed, value is - ", e.target.value);
                sum = sum + Number(e.target.value);
                console.log("New value of sum is - ", sum);
              }}
            />
            <span>
              <b>Sum</b>: {sum}
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
