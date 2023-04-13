import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from '../Header';
import SiderComponent from '../Sider';

const { Content, Sider } = Layout;

// Update the function declaration
export const LayoutComponent = () => {
  return (
    <Layout>
      <HeaderComponent />
      <Layout>
        <Sider>
          <SiderComponent />
        </Sider>
        
      </Layout>
    </Layout>
  );
};
