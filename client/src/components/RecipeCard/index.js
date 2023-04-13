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
      <Link to={`/products/${_id}`}>
            <Card title={name} bordered={false}>
              <p>{cookTime}</p>
              <img src={image}/>
            </Card>
      </Link>
    );
}

export default RecipeCard;