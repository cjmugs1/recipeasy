import React from "react";

import LayoutComponent from '../components/LayoutComponent';
import RecipeBrowser from '../components/RecipeBrowser';

// renders the recipe browser component as the child of the layout component. If you look at the layout component, you'll see that this is rendered in the content area of the layout component.
const Home = () => {
  return (
      <LayoutComponent>
        <RecipeBrowser />
      </LayoutComponent>
  );
};

export default Home;
