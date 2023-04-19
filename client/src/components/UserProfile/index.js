// component for creating, displaying, and editing user profile
// name, email, language, saved recipes

import React, { useState } from 'react';
import LayoutComponent from '../LayoutComponent';
import {QUERY_USER_BY_ID} from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from "../../utils/auth"

import { Layout, Col, Row } from 'antd';
import RecipeCard from "../RecipeCard";


export default function Profile() {
  
  const user = Auth.getProfile()
  const userId = user.data._id
  console.log(userId)

  const { loading, data } = useQuery(QUERY_USER_BY_ID, {
    variables: { userId},
  });

  if (loading) {
    return <h2>loading...</h2>
  }

  
  const userInfo = data.singleUser;
  console.log(userInfo)
  const recipes = userInfo.recipes
  console.log(recipes)


  return (
    <>
    <LayoutComponent>
      <h2>{userInfo.username}</h2>

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