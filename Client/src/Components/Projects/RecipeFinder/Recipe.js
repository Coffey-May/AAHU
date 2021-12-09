

import React, { useState, useEffect } from 'react';
import { RecipeComponent } from './RecipeComponent';

const APP_ID = 'bda981b2';
const API_KEY = '51d23d506ab149659791d984fa1a008f'

export const Recipe = () => {
    const [inputText, setInputText] = useState('')
    const [query, setQuery] = useState('chicken')
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        const getRecipes = async () => {
            const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`)
            const data = await response.json()

            setRecipes(data.hits)

        }
        getRecipes()
    }, [query])


    // const getRecipesCallback = () => {
    //     getRecipes()
    // }


    const getSearch = (e) => {
        e.preventDefault();
        setQuery(inputText)
        setInputText('')
    }
    const captureInput = (e) => {

        setInputText(e.target.value)
    }

    return (

        <div style={{ minHeight: '100vh', backgroundColor: 'rgba(20,20,20)', marginTop: '-3vh' }}>

            <form onSubmit={getSearch} style={{ margin: '0 auto' }}>
                <h1 style={{ color: 'white', paddingTop: '15vh' }}>WHAT SHOULD I EAT?</h1>
                <input value={inputText} style={{ backgroundColor: 'goldenrod' }} onChange={captureInput} type="text" />
            </form>
            <div style={{ margin: '0 auto' }}> {recipes.map((recipe, index) => (<RecipeComponent key={index} recipe={recipe} />))}</div>
        </div >

    )
}