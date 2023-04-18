import React, { useEffect } from "react";

import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_RECIPES } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_RECIPES } from '../../utils/queries';

import { idbPromise } from '../../utils/helpers';

import { Col, Row } from 'antd';
import RecipeCard from "../RecipeCard";


function RecipeBrowser() {

    const [ state, dispatch ] = useStoreContext();

    const { loading, data } = useQuery(QUERY_ALL_RECIPES);

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
            {data.allRecipes.map((recipe) => (
                <Col span={6}>
                    <RecipeCard
                        key={recipe._id}
                        _id={recipe._id}
                        image={recipe.imageURL}
                        name={recipe.name}
                        cookTime={recipe.cookTime.amount}
                        cookTimeUnit = {recipe.cookTime.unit}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default RecipeBrowser;