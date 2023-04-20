import React, { useState } from 'react';

import HeaderComponent from '../HeaderComponent';
import SiderComponent from '../Sider';
import FooterComponent from '../FooterComponent';

import { Layout } from 'antd';
const { Content, Sider } = Layout;

import './layout.css'


function LayoutComponent ({ children }) {

  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SiderComponent />
      </Sider>
      <Layout className="d-flex flex-column layout">
        <HeaderComponent />
        <Content style={{ flex: "1 0 auto" }}>
          {children}
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;