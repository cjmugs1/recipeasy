// DishType tags component
import React from 'react';
import { Tag } from 'antd';
import '../tags.css'; // up one level since all tags will have same styling

const dishTypeTags = [ 'Soups', 'Salads', 'Sandwiches', 'Pasta', 'Desserts', 'Casseroles', 'Drinks', 'Snacks', 'Sauces', 'Stews', 'Stir-fries' ];

const DishType = () => {
    return (
        <div className="dish-type-tags">
        <h5>Dish Type</h5>
        {dishTypeTags.map((method, index) => (
            <Tag key={index} className="tags">
            {method}
            </Tag>
        ))}
        </div>
    );
};

export default DishType;