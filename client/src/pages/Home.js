//make this the recipe display/browser page
//importing renamed components
  //recipe item
  //---etc
// ------------------------------
  
import React from "react";
import Layout from '../components/Layout';
import RecipeBrowser from '../components/RecipeBrowser';
const { Content } = Layout;

const Home = () => {
  return (
    <Layout content={RecipeBrowser} />
  );
};

export default Home;
