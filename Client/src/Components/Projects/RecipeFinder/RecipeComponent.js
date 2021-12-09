import React from 'react';
import { Ingredients } from './Ingredients';

export const RecipeComponent = (recipe) => {
    return (

        <div style={{
            padding: '1em', margin: '1em', display: 'inline-block', minWidth: '30vw', height: '775px', backgroundColor: 'rgba(210,210,210)', borderRadius: '15px'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <div>
                    <img src={recipe.recipe.recipe.image} alt="" />
                </div>

                <div>
                    <h2 style={{ color: 'black' }}>{recipe.recipe.recipe.label}</h2>
                </div>
                <div>
                    <p style={{ color: 'black' }}>Calories: {parseInt(recipe.recipe.recipe.calories)}</p>
                    <p style={{ color: 'black' }}>Cuisine Type: {recipe.recipe.recipe.cuisineType}</p>
                </div>
                <div style={{ color: 'black' }} >
                    INGREDIENTS:
                    {recipe.recipe.recipe.ingredients.map((item, index) => (<Ingredients key={index} item={item} />))}
                </div>

                <a style={{ color: 'blue' }} rel="noreferrer" target="_blank" href={recipe.recipe.recipe.url}>Full Link to cooking directions</a>
            </div>
        </div >
    )
}