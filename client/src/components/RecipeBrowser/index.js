import React, { useState, useEffect } from "react";
import { useStoreContext } from '../../utils/GlobalState';
import { useQuery } from '@apollo/client';
import { UPDATE_RECIPES } from '../../utils/actions';
import { QUERY_ALL_RECIPES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
// antd imports
import { Layout, Col, Row } from 'antd';
import RecipeCard from "../RecipeCard";

// run query to back end to get the data, 
// then updated the global state object for recipes with the results
// then also save to indexed db

function RecipeBrowser() {

    const [ state, dispatch ] = useStoreContext();

    const { loading, data } = useQuery(QUERY_ALL_RECIPES);

    console.log(data)

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_RECIPES,
                recipes: data.allRecipes,
            });
            data.allRecipes.forEach((recipe) => {
                idbPromise('recipes', 'put', recipe);
            });
        } else if (!loading) {
            idbPromise('recipes', 'get').then((recipes) => {
                dispatch({
                    type: UPDATE_RECIPES,
                    recipes: recipes,
                });
            });
        }
    }, [data, loading, dispatch]);

    if (!data || !data.allRecipes || !Array.isArray(data.allRecipes)) {
        return <div>Loading...</div>;
    }

    return (
        <Row gutter={[24, 16]}>
            {/* something like map each recipe in array to a card */}
            {data.allRecipes.map((recipe) => (
                <Col span={6}>
                    <RecipeCard
                        key={recipe._id}
                        _id={recipe._id}
                        image={recipe.imageURL}
                        name={recipe.name}
                        cookTime={recipe.cookTime.amount}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default RecipeBrowser;