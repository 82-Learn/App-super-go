import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarItem } from "../../models/SidebarItem";

type SidebarLinkProps = {
  item: SidebarItem;
};

const SidebarLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;

const SidebarLabel = styled.span``;

export const Submenu: FC<SidebarLinkProps> = ({ item }) => {
  return (
    <>
      <SidebarLink>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </>
  );
};
