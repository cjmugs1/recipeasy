//make this the recipe display/browser page
//importing renamed components
  //recipe item
  //---etc
// ------------------------------
  
import React from "react";
// import { useState } from 'react';
// import { Layout } from 'antd';
import { Layout } from '../components/Layout';
import { recipeBrowser } from '../components/RecipeBrowser';
const { Content } = Layout;

const Home = () => {
  return (
    <Layout content={recipeBrowser} />
  );
};

export default Home;
