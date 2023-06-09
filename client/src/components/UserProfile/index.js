// component for creating, displaying, and editing user profilename, email, language, saved recipes

import React from "react";

import { QUERY_USER_BY_ID } from "../../utils/queries";
import { useQuery } from "@apollo/client";

import Auth from "../../utils/auth";

import LayoutComponent from "../LayoutComponent";
import RecipeCard from "../RecipeCard";

import { Col, Row } from "antd";

export default function Profile() {
  const user = Auth.getProfile();
  const userId = user.data._id;
  console.log(userId);

  const { loading, data } = useQuery(QUERY_USER_BY_ID, {
    variables: { userId },
  });

  if (loading) {
    return <h2>loading...</h2>;
  }

  const userInfo = data.singleUser;
  const recipes = userInfo.recipes;

  const styles = {
    layout: {
      height: "90vh",
    },
    header: {
      padding: "10px 0",
      backgroundColor: "white",
      width: "100%",
      fontSize: "30px",
    },
  };

  return (
    <>
      <LayoutComponent>
        <h1 style={styles.header}>{userInfo.username} Recipes</h1>
        <Row gutter={[24, 16]}>
          {/* something like map each recipe in array to a card */}
          {recipes.map((recipe) => (
            <Col span={6}>
              <RecipeCard
                key={recipe._id}
                _id={recipe._id}
                image={recipe.imageURL}
                name={recipe.name}
                cookTime={recipe.cookTime.amount + " " + recipe.cookTime.unit}
                chefId={recipe.userId._id}
              />
            </Col>
          ))}
        </Row>
      </LayoutComponent>
    </>
  );
}
