import { React } from "react";
import { Link } from "react-router-dom";
import { Card } from 'antd';
import { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import {useMutation} from "@apollo/client"
import {REMOVE_RECIPE} from "../../utils/mutations"
import Auth from "../../utils/auth"
import EditRecipe from "../EditRecipe";

function RecipeCard(recipe) {

  const user = Auth.getProfile()
  const userId = user.data._id
    
    const {
        _id,
        image,
        name,
        cookTime,
        cookTimeUnit,
        chefId
    } = recipe;

    const [deleteRecipe, { error }] = useMutation(REMOVE_RECIPE);
    const deleteYourRecipe = async (recipeId) => {
      console.log(recipeId)
      const userData = await deleteRecipe({
        variables: {recipeId, chefId}
      })
      console.log(userData)
      window.location.assign('/profile')
    }

    const items = [
      {
        key: '1',
        label: (
          <a onClick={() => {
            console.log("clickled")
            return (
              window.location.assign(`/edit-recipe/${_id}`)
              // <Link to={`/edit-recipe/${_id}`}>
              //   <EditRecipe recipeId={_id} />
              // </Link>
            )
            
          }}>
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

    const isUsersRecipe = chefId === userId;

    return (
      
        <Card title={name} bordered={false}>
          <Link to={`/recipes/${_id}`}>
          <p>{cookTime} {cookTimeUnit}</p>
          <img src={image}/>
          </Link>
          { isUsersRecipe &&
            <Dropdown menu={{ items }} placement="bottom">       
            <Button>options</Button>
            </Dropdown>
          }
          
        </Card>
        
      
    );
}

export default RecipeCard;