/// sidebar component for extension of navigation components for easier navigation

import React, { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UploadOutlined,
  TagOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";


function SiderComponent() {

  return (
    <div className="side-menu">
      <div className="logo"></div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: "Home",
            onClick: () => {
              return window.location.assign("/");
            },
          },
          {
            key: "2",
            icon: <UserOutlined />,
            label: "Profile",
            onClick: () => {
              return window.location.assign("/profile");
            },
          },
          {
            key: "3",
            icon: <TagOutlined />,
            label: "Categories",
          },
          {
            key: "4",
            icon: <UploadOutlined />,
            label: "Upload recipe",
            onClick: () => {
              return window.location.assign("/add-recipe");
            },
          },
          {
            key: "5",
            icon: <SearchOutlined />,
            label: "Search recipes",
          },
        ]}
      ></Menu>
    </div>
  );
}

export default SiderComponent;
