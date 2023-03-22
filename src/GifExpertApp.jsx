import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const ondAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    /* categories.push(newCategory); */
  };
  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>
      {/* Input */}
      <AddCategory /* setCategories={setCategories} del hijo al padre */
        onNewCategory={ondAddCategory}
      />

      {/* Listado gifs */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* gif Item */}
    </>
  );
};
