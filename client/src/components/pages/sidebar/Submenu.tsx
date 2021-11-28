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
`;

const SidebarLabel = styled.span`
  padding: 5px 5px;
  line-height: 1.8;
`;

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
