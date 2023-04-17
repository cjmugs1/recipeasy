//make this the recipe display/browser page
//importing renamed components
  //recipe item
  //---etc
// ------------------------------
  
import React from "react";
import LayoutComponent from '../components/LayoutComponent';
import RecipeBrowser from '../components/RecipeBrowser';

const Home = () => {


  return (
    <>

      <LayoutComponent>
      <RecipeBrowser />
      {/* <h1>Home Page</h1> */}
      </LayoutComponent>
    </>
  );
};

export default Home;
