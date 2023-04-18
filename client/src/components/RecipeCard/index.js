import { React } from "react";
import { Link } from "react-router-dom";
import { Card } from 'antd';

function RecipeCard(recipe) {
    
    const {
        _id,
        image,
        name,
        cookTime
    } = recipe;

    return (
      
        <Card title={name} bordered={false}>
          <Link to={`/products/${_id}`}>
          <p>{cookTime}</p>
          <img src={image}/>
          </Link>
        </Card>
      
    );
}

export default RecipeCard;