import React, {useState, useEffect} from 'react';
import 'SearchComponent.css';

function RecipeSearch(props) {
   const [recipes, setRecipes] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
   const [searchTag, setSearchTag] = useState('');

   useEffect(() => {
      // Make the API call to fetch recipes with matching tag and id
      fetch(``)
         .then(response => response.json())
         .then(data => setRecipes(data))
         .catch(error => console.log(error))
   }, [searchTerm, searchTag]);

   function handleSearch(e) {
      e.preventDefault();
      // trigger the useEffect hook with updated search terms
      setSearchTerm(e.target.elements.searchTerm.value);
      setSearchTag(e.target.elements.searchTag.value);
   }

   return (
      <div className="recipe-search">
         <form onSubmit={handleSearch}>
            <label htmlFor="searchTerm"></label>
            <input type="text" id="searchTerm" />
            <label htmlFor="searchTag"></label>
            <input type="text" id="searchTag" />
            <button type="submit">Search</button>
         </form>
         <h2>Search results:</h2>
         <ul>
            {recipes.map(recipe => (
               <li>{recipe.title}</li>
            ))}
         </ul>
      </div>
   );
}

export default RecipeSearch;
