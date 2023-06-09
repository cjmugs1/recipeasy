// mealtype tags component
import React from 'react';
import { Tag } from 'antd';
import '../tags.css'; // up one level since all tags will have same styling

const mealTypeTags = [ 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Desserts', 'Appetizers' ];
export { mealTypeTags }; // export the array of tags so that it can be used in other files

const MealType = () => {
    return (
        <div className="meal-type-tags">
        <h5>Meal Type</h5>
        {mealTypeTags.map((method, index) => (
            <Tag key={index} className="tags">
            {method}
            </Tag>
        ))}
        </div>
    );
};

export default MealType;
