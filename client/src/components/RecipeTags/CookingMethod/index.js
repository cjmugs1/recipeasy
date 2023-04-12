// cooking method tags
import React from 'react';
import { Tag } from 'antd';
import '../tags.css'; // up one level since all tags will have same styling

const cookingMethodTags = [ 'Bake', 'Boil', 'Broil', 'Fry', 'Grill', 'Microwave', 'Roast', 'Saute', 'Steam', 'Stew', 'Stir-fry', 'Other' ];
export { cookingMethodTags }; // export the array of tags so that it can be used in other files

const CookingMethod = () => {
    return (
        <div className="cook-method-tags">
        <h5>Cooking Methods</h5>
        {cookingMethodTags.map((method, index) => (
            <Tag key={index} className="tags">
            {method}
            </Tag>
        ))}
        </div>
    );
};


export default CookingMethod; //default export for the CookingMethod component