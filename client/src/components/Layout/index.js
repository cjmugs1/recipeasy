import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from '../HeaderComponent';
import SiderComponent from '../Sider';

const { Content, Sider } = Layout;

// Update the function declaration
export const LayoutComponent = (content) => {
  return (
    <Layout>
      <Sider>
        <SiderComponent />
      </Sider>
      <Layout>
        <HeaderComponent />
        <Content style={{ margin: '0 16px' }}>
          {content}
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};
