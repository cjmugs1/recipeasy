// cuisine tags
import React from 'react';
import { Tag } from 'antd';
import '../tags.css'; // up one level since all tags will have same styling

const cuisineTags = [ 'American', 'Asian', 'British', 'Caribbean', 'Central American', 'Chinese', 'Eastern European', 'French', 'German', 'Greek', 'Indian', 'Italian', 'Japanese', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'South American', 'South East Asian', 'Spanish', 'Thai', 'Vietnamese', 'Other' ];

const Cuisine = () => {
    return (
        <div className="cuisine-tags">
        <h5>Cuisine</h5>
        {cuisineTags.map((method, index) => (
            <Tag key={index} className="tags">
            {method}
            </Tag>
        ))}
        </div>
    );
};

export default Cuisine;