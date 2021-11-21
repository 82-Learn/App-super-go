import * as React from "react";
import styled from "styled-components";

const Sidebar = styled.div``;

const SideContainer = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 20%;
  height: 100%;
  min-width: 200px;
  background-color: #ff6600;
  opacity: 0.9;
  z-index: 999;
  padding: 5em 1em;
  transition: transform 300ms;
  border-radius: 20px;
`;

const Button = styled.button`
  font-size: 15px;
  line-height: 1em;
  padding: 15px 15px;
  color: white;
  border: 2px solid #ff6600;
  border-radius: 5px;
  background-color: black;
  float: left;
  margin-top: -15px;

  &:hover {
    background-color: #ff6600;
  }
`;

const NavName = styled.div`
  a {
    padding: 30px 30px 30px 60px;
    text-decoration: none;
    font-size: 20px;
    color: white;
    display: block;
    transition: 0.3s;
  }
  p {
    color: #1b0707;
  }
`;

const SideNav = () => {
  return (
    <div>
      <Sidebar>
        <SideContainer>
          <Button>☰</Button>
          <NavName>
            <a className="menu-item" href="/">
              HOME
            </a>
            <a className="menu-item" href="/dash">
              TECH 1
            </a>
            <a className="menu-item" href="/tech2">
              TECH 2
            </a>
            <a className="menu-item" href="/tech3">
              TECH 3
            </a>
          </NavName>
        </SideContainer>
      </Sidebar>
    </div>
  );
};
export default SideNav;
