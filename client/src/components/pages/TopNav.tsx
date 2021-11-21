import * as React from "react";
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
  }

  & a {
    font-size: 15px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 15px;
    cursor: pointer;
    background-color: #010d11;
    line-height: 1em;

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
            <a href="/home">82 Learn</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">SignUp</a>
          </li>
        </NavLinks>
      </Navbar>
    );
  }
}

export default TopNav;
