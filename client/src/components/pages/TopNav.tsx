import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  background-color: #010d11;
  display: block;
  text-align: center;
  padding: 30px 30px;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  & li {
    float: right;
    padding: 5px 5px;
  }

  & a {
    font-size: 15px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    padding: 14px 15px;
    cursor: pointer;
    background-color: #010d11;
    line-height: 1em;
    border: 2px solid #ff6600;
    font-weight: bold;

    &:hover {
      background-color: #ff6600;
    }
  }
`;

class TopNav extends React.Component {
  render() {
    return (
      <Navbar>
        <NavLinks>
          <li>
            <Link to="/home">82 Learn</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </NavLinks>
      </Navbar>
    );
  }
}

export default TopNav;
