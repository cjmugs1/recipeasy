// DietaryPreferences tags
// cuisine tags
import React from 'react';
import { Tag } from 'antd';
import '../tags.css'; // up one level since all tags will have same styling


const dietaryPreferencesTags = [ 'Dairy Free', 'Egg Free', 'Gluten Free', 'Grain Free', 'Keto', 'Low Carb', 'Low Fat', 'Low Sodium', 'Paleo', 'Pescatarian', 'Raw', 'Vegan', 'Vegetarian'];
export { dietaryPreferencesTags }; // export the array of tags so that it can be used in other files

const DietaryPreferences = () => {
    return (
        <div className="dietary-preferences-tags">
        <h5>Dietary Preferences</h5>
        {dietaryPreferencesTags.map((method, index) => (
            <Tag key={index} className="tags">
            {method}
            </Tag>
        ))}
        </div>
    );
};

export default DietaryPreferences;