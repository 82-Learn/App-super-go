import React, { FC, useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillXSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { Submenu } from "./Submenu";

const SidebarNav = styled.div<{ sidebar: boolean }>`
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
  padding: 5.5em 0.1em;
  transition: transform 300ms;
  border-radius: 20px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
`;

const NavIcon = styled.div`
  font-size: 2rem;
  margin-left: 2rem;
  line-height: 1em;
  padding: 13px 13px;
  color: white;
  border: 2px solid #ff6600;
  border-radius: 5px;
  background-color: black;
  float: left;
  margin-top: -70px;

  &:hover {
    background-color: #ff6600;
  }
`;

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <NavIcon onClick={showSidebar}>
          <GiHamburgerMenu />
        </NavIcon>
        <SidebarNav sidebar={sidebar}>
          <NavIcon onClick={showSidebar}>
            <GiHamburgerMenu />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
