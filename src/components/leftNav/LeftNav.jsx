import React from "react";
import { Link } from "react-router";

const leftNavlinks = [
  {
    label: "",
    path: "",
    child: {},
  },
];

export default function LeftNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/ConceptUseState"}>Use State hook</Link>
          </li>
          <li>
            <Link to={"/ConceptUseReducer"}>Use Reducer Hook</Link>
          </li>
          <li>
            <Link to={"/is"}>is</Link>
            <ul>
              <li>
                <Link to={"/sub-link"}>sub-link</Link>
              </li>
              <li>
                <Link to={"/another-one"}>another-one</Link>
              </li>
              <li>
                <Link to={"/another-one"}>another-one</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
