//make this the recipe display/browser page
//importing renamed components
  //recipe item
  //---etc
// ------------------------------
  
import React from "react";
import { useState } from 'react';
import { Layout, theme } from 'antd';
const { Content } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      
      {/* import side bar / nav bar component here!! (example side bar menu commented out below) */}
      
      {/* <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider> */}


      <Layout className="site-layout">

        {/* import header component here!! (example header commented out below) */}

        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        /> */}


        <Content style={{ margin: '0 16px' }}>

          {/* import recipe browser container component here!! (example content commented out below) */}

          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div> */}
        </Content> 


        {/* import footer component here!! (example footer commented out below) */}

        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer> */}


      </Layout>
    </Layout>
  );
};

export default Home;
