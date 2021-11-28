import React from "react";
import { SidebarItem } from "../../models/SidebarItem";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";
import { FaCog } from "react-icons/fa";

export const SidebarData: SidebarItem[] = [
  {
    title: "OVERVIEW",
    path: "/dash",
    icon: <AiOutlineHome />,
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: "Users",
        path: "/dash/users",
        icon: <AiOutlineUser />,
      },
    ],
  },
  {
    title: "CONFIG",
    path: "/configuration",
    icon: <FaCog />,
  },
  {
    title: "TESTING",
    path: "/testing",
    icon: <BiTestTube />,
  },
];
