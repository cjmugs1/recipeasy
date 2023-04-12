// search for recipes
import React, { useState, useEffect } from 'react';
import { Input, Tag } from 'antd';
import 'antd/dist/antd.css';

const Search = () => {
    const [selectedTags, setSelectedTags] = useState([]);
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <Input.Search
            placeholder="Search for recipes..."
            enterButton
            size="large"
            style={{ marginBottom: '1rem' }}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          {recipeTags.map((tag) => (
            <Tag
              key={tag}
              onClick={() => handleTagClick(tag)}
              color={selectedTags.includes(tag) ? 'geekblue' : 'default'}
              style={{ cursor: 'pointer', marginBottom: '0.5rem' }}
            >
              {tag}
            </Tag>
          ))}
        </Col>
      </Row>
    </div>
  );

  export default Search;
