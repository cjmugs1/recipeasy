// occasion tags
import React from 'react';
import { Tag } from 'antd';
import '../tags.css'; // up one level since all tags will have same styling

const occasionTags = [ 'Holiday', 'Party', 'Picnic', 'Wedding', 'Baby Shower', 'Birthday', 'Anniversary', 'Graduation', 'Sports', 'Party', 'Weeknight', 'Weekend', 'Other' ];

const Occasion = () => {
    return (
        <div className="occasion-tags">
        <h5>Meal Type</h5>
        {occasionTags.map((method, index) => (
            <Tag key={index} className="tags">
            {method}
            </Tag>
        ))}
        </div>
    );
};

export default Occasion;
