import React, { useState } from 'react';
import { Layout } from 'antd';
import HeaderComponent from '../HeaderComponent';
import SiderComponent from '../Sider';
import FooterComponent from '../FooterComponent';
const { Content, Sider } = Layout;

// Update the function declaration
function LayoutComponent ({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SiderComponent />
      </Sider>
      <Layout>
        <HeaderComponent />
        <Content style={{ margin: '0 16px' }}>
          {children}
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;