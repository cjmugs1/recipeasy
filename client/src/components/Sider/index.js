/// sidebar component for extension of navigation components for easier navigation
// Add Recipe, RecipeCategories, SearchRecipes, SavedRecipes
// upding Sider index 

import React, { useState } from 'react';
// import { useNavigation } from 'react-router-dom';
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
  // const navigation = useNavigation();
  // const handleSearch = () => {
  //   history.push('/search');
  // };
  return (
      <div className="side-menu">
        <div className="logo"></div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Home',
              onClick: () => {
                return window.location.assign('/')
              }
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Profile',
              onClick: () => {
                return window.location.assign('/profile')
              }
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
              onClick: () => {
                return window.location.assign('/add-recipe')
              }
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