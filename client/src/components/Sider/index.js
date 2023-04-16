/// sidebar component for extension of navigation components for easier navigation
// Add Recipe, RecipeCategories, SearchRecipes, SavedRecipes
// upding Sider index 

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UploadOutlined,
  TagOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

function SiderComponent() {
  const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken(); 

  return (
      <div class="side-menu">
        <div className="logo"></div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Profile',
            },
            {
              key: '3',
              icon: <TagOutlined />,
              label: 'Categories',
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'Upload recipe',
            },
            {
                key: '5',
                icon: <SearchOutlined />,
                label: 'Search recipes',
              },
          ]}
        ></Menu>
      {/* <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout> */}
    </div>
  );
};

export default SiderComponent;