// search for recipes
import React, { useState, useEffect } from "react";

import { Input, Tag, Row, Col } from "antd";
import { cookingMethodTags } from "../components/RecipeTags/CookingMethod";
import { cuisineTags } from "../components/RecipeTags/Cuisine";
import { dietaryPreferencesTags } from "../components/RecipeTags/DietaryPreferences";
import { dishTypeTags } from "../components/RecipeTags/DishType";
import { mealTypeTags } from "../components/RecipeTags/MealType";
import { occasionTags } from "../components/RecipeTags/Occasions";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };


  const handleSearch = (value) => {
    //build query string based on selected tags and search value in url so search URLs can be saved
    const queryString = `/search?tags=${selectedTags.join(",")}&q=${value}`;
    history.push(queryString);
  };

  const recipeTags = [
    ...cookingMethodTags,
    ...cuisineTags,
    ...dietaryPreferencesTags,
    ...dishTypeTags,
    ...mealTypeTags,
    ...occasionTags,
  ];

useEffect(() => {
}, []);

  return (
   <div>
      <Row>
        <Col span={12} offset={6}>
          <Input.Search
            placeholder="Search for recipes..."
            enterButton
            size="large"
            style={{ marginBottom: "1rem" }}
            onSearch={handleSearch}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          {recipeTags.map((tag) => (
            <Tag
              key={tag}
              onClick={() => handleTagClick(tag)}
              color={selectedTags.includes(tag) ? "geekblue" : "#d9d9d9"}
              style={{ cursor: "pointer", marginBottom: "0.5rem" }}
            >
              {tag}
            </Tag>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Search;
