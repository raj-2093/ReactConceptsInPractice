import React from "react";
import { Link } from "react-router";

function LeftNavLink(linkObj) {
  return (
    <li>
      <Link to={`/${linkObj.path}`}>linkObj.label</Link>
    </li>
  );
}

export default function LeftNavLinksList(li) {
  return (
    <ul>
      <li>
        <Link></Link>
      </li>
    </ul>
  );
}
