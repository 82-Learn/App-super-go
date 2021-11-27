import React from "react";
import { SidebarItem } from "../../models/SidebarItem";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";

import { FaCog } from "react-icons/fa";

export const SidebarData: SidebarItem[] = [
  {
    title: "Overview",
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
    title: "configuration",
    path: "/configuration",
    icon: <FaCog />,
  },
];
