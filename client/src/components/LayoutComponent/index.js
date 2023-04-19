import React, { useState } from 'react';
import { Layout } from 'antd';
import HeaderComponent from '../HeaderComponent';
import SiderComponent from '../Sider';
import FooterComponent from '../FooterComponent';
const { Content, Sider } = Layout;
const styles = {
  layout: {
    height: "100vh"
  }
}
// Update the function declaration
function LayoutComponent ({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SiderComponent />
      </Sider>
      <Layout className="d-flex flex-column" style={styles.layout}>
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