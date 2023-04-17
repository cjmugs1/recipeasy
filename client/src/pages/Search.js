import React, { useState, useEffect } from "react";
import SearchResults from "../components/SearchResults";
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
  const [searchTerm, setSearchTerm] = useState("");
  const history = useNavigate();

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

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
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
    <div
      style={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        borderRadius: "34px",
      }}
    >
      <div width="100%" justifyContent="center" alignItems="center">
        <p
          className="recipeasy-text"
          style={{ color: "#E7693E", fontSize: "50px" }}
        >
          Recipeasy.
        </p>
      </div>
      <Input.Search
        placeholder="Search for recipes..."
        enterButton="SEARCH RECIPES"
        size="large"
        style={{ marginBottom: "1rem" }}
        onSearch={handleSearch}
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
      />
    </div>
  );
};

export default Search;
