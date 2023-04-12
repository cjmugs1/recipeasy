/// sidebar component for extension of navigation components for easier navigation
// Add Recipe, RecipeCategories, SearchRecipes, SavedRecipes
// upding Sider index 

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UploadOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken(); 

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
        //   theme="dark"
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
              icon: <UploadOutlined />,
              label: 'Upload recipe',
            },
            {
                key: '3',
                icon: <SearchOutlined />,
                label: 'Search recipes',
              },
          ]}
        />
      </Sider>
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
    </Layout>
  );
};

export default App;