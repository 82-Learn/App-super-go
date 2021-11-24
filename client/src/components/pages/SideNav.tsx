import * as React from "react";
import styled from "styled-components";
import { useState } from "react"; 
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/Gi"



const SidebarNav = styled.div<{ sidebar: boolean}>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 20%;
  height: 100%;
  width:200px;
  background-color: #ff6600;
  opacity: 0.9;
  transition: transform 300ms;
  border-radius: 20px;
  left: ${({sidebar}) => (sidebar ? '0' : '-100%')}
`;

const NavButton = styled.button`
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

const NavIcon = styled.div `
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


`;

const SidebarWrap = styled.div`

`;



const SideNav = () => {
  const [sidebar, setSidebar ] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (  

      <IconContext.Provider value={{ color: '#fff' }}>
      <NavIcon onClick={showSidebar}>
      <GiHamburgerMenu />
      </NavIcon>
  
 
    </IconContext.Provider>

  
        


  );
};
export default SideNav;
