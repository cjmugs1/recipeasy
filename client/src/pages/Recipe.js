import React from "react";

import LayoutComponent from '../components/LayoutComponent';
import SingleRecipe from '../components/SingleRecipe';

const Recipe = () => {
    return (
      <>
        <LayoutComponent>
          <SingleRecipe />
        </LayoutComponent>
      </>
    );
  };
  
  export default Recipe;