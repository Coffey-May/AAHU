import React, { useState, useEffect } from "react";
import { RecipeComponent } from "./RecipeComponent";
import Container from "@material-ui/core/Container";
require("dotenv").config();

const APP_ID = process.env.REACT_APP_APP_ID;
const API_KEY = process.env.REACT_APP_API_KEY2;

export const Recipe = () => {
  const [inputText, setInputText] = useState("");
  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`
      );
      const data = await response.json();

      setRecipes(data.hits);
      console.log(data);
    };
    getRecipes();
  }, [query]);

  // const getRecipesCallback = () => {
  //     getRecipes()
  // }

  const getSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setQuery(inputText);
    setInputText("");
  };
  const captureInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputText(e.target.value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "rgba(170,50,50)",
        marginTop: "-3vh",
      }}
    >
      <Container>
        <form onSubmit={getSearch} style={{ margin: "0 auto" }}>
          <h1
            style={{
              color: "white",
              paddingTop: "2em",
              display: "block",
              textAlign: "center",

              fontSize: "4em",
            }}
          >
            DINNER SOLVER
          </h1>
          <input
            value={inputText}
            style={{
              display: "block",
              margin: "2em auto",
              fontSize: "2em",
              width: "70%",
              padding: "1em",
              backgroundColor: "rgba(250, 255, 147, 0.8)",
              borderRadius: "99px",
              color: "black",
            }}
            onChange={captureInput}
            placeholder="Search recipes"
            type="text"
          />
        </form>

        <div
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",

            flexWrap: "wrap",
          }}
        >
          {" "}
          {recipes.map((recipe, index) => (
            <RecipeComponent key={index} recipe={recipe} />
          ))}
        </div>
      </Container>
    </div>
  );
};
