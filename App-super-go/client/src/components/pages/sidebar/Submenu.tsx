import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarItem } from "../../models/SidebarItem";

type SidebarLinkProps = {
  item: SidebarItem;
};

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  font-size: 1.125rem;
  padding: 2rem;
  text-decoration: none;
  color: #ffffff;
`;

const SidebarLabel = styled.span`
  margin-left: 1rem;
`;

export const Submenu: FC<SidebarLinkProps> = ({ item }) => {
  return (
    <>
      <SidebarLink to={item.path}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </>
  );
};
