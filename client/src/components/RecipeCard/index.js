import { React } from "react";
import { Link } from "react-router-dom";
import { Card } from 'antd';

function RecipeCard(recipe) {
    
    const {
        _id,
        image,
        name,
        cookTime,
        cookTimeUnit
    } = recipe;

    return (
      <Link to={`/recipes/${_id}`}>
        <Card title={name} bordered={false}>
          <p>{cookTime} {cookTimeUnit}</p>
          <img src={image}/>
          
        </Card>
        </Link>
      
    );
}

export default RecipeCard;