// component for creating, displaying, and editing user profile
// name, email, language, saved recipes

import React, { useState } from 'react';
import LayoutComponent from '../LayoutComponent';
import {QUERY_USER_BY_ID} from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import {useMutation} from "@apollo/client"
import {REMOVE_RECIPE} from "../../utils/mutations"
import Auth from "../../utils/auth"

import { Layout, Col, Row } from 'antd';
import RecipeCard from "../RecipeCard";

// import { UPDATE_ACCOUNT_NAME, UPDATE_LANGUAGE } from '../utils/actions';
// import { useAccountContext } from '../utils/GlobalState';

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

  const [deleteRecipe, { error }] = useMutation(REMOVE_RECIPE);
    const deleteYourRecipe = async (recipeId) => {
      const user = Auth.getProfile()
      const chefId = user.data._id
      console.log(chefId)
      console.log(recipeId)
      const userData = await deleteRecipe({
        variables: {recipeId, chefId}
      })
      console.log(userData)
      window.location.assign('/profile')
    }

    const items: MenuProps['items'] = [
      {
        key: '1',
        label: (
          <a>
            Edit Recipe
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a onClick={() => {
            deleteYourRecipe(_id)
          }}>
            Delete Recipe
          </a>
        ),
      },
      
    ];

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
                    />
                    {/* <Dropdown menu={{ items }} placement="bottom">
        
                    <Button>options</Button>
                  </Dropdown> */}
                </Col>
            ))}
        </Row>      

    </LayoutComponent>
      
    </>
  );
}