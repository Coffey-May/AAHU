import React from "react";

export const Ingredients = ({ item }: { item: any }) => {
  return (
    <div>
      <p style={{ margin: "0", color: "black" }}> {item.text}</p>
    </div>
  );
};
