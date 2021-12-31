import React from "react";
import { Ingredients } from "./Ingredients";

export const RecipeComponent = (recipe: {
  recipe: {
    recipe: {
      image: string | undefined;
      label:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
      calories: string;
      cuisineType:
        | string
        | number
        | boolean
        | {}
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactNodeArray
        | React.ReactPortal
        | null
        | undefined;
      ingredients: any[];
      url: string | undefined;
    };
  };
}) => {
  return (
    <div
      style={{
        // padding: "1em",
        margin: "1em",
        display: "inline-block",

        width: window.innerWidth > 900 ? "33vw" : "100vw",

        backgroundColor: "rgba(240,250,250)",
        borderRadius: "99px 0px 99px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "1em",
        }}
      >
        <img
          style={{ width: "100%", borderRadius: "99px 0px 99px 0px" }}
          src={recipe.recipe.recipe.image}
          alt=""
        />

        <div>
          <h2
            style={{
              maxWidth: "30vw",
              color: "black",
              fontSize: "2em",
              overflowWrap: "break-word",
            }}
          >
            {recipe.recipe.recipe.label}
          </h2>
        </div>
        <div>
          <p style={{ color: "black" }}>
            Calories: {parseInt(recipe.recipe.recipe.calories)}
          </p>
          <p style={{ color: "black" }}>
            Cuisine Type: {recipe.recipe.recipe.cuisineType}
          </p>
        </div>
        <div style={{ color: "black", lineHeight: "1em" }}>
          INGREDIENTS:
          {recipe.recipe.recipe.ingredients.map((item, index) => (
            <Ingredients key={index} item={item} />
          ))}
        </div>

        <a
          style={{ color: "blue" }}
          rel="noreferrer"
          target="_blank"
          href={recipe.recipe.recipe.url}
        >
          Full Link to cooking directions
        </a>
      </div>
    </div>
  );
};
