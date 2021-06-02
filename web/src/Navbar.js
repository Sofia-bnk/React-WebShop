import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={props.className}>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>About</li>
        <li>login</li>
      </ul>
    </nav>
  );
}

export default styled(Navbar)`
  font-size: 20px;
  font-weight: bolder;
  color: white;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    background-color: darkblue;
  }
  li {
    padding: 1rem;
  }
`;
