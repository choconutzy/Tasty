import React from "react";
import RecipeJumbotronCard from "../components/recipes/RecipeJumbotron";
import RecipeCategoryCard from "../components/recipes/RecipeCategoryCard";
import "../styles/Recipes.css";
import styled from "styled-components";

const TitleCategory = styled.h3`
  text-align: left;
  margin: 40px 5% -10px;
  padding-left: 10px;
`;

const Recipes = () => {
  return (
    <div>
      <RecipeJumbotronCard></RecipeJumbotronCard>
      <TitleCategory>Popular recipes</TitleCategory>
      <RecipeCategoryCard category="popular"></RecipeCategoryCard>
      <TitleCategory>Chinese Cuisine</TitleCategory>
      <RecipeCategoryCard category="chinese"></RecipeCategoryCard>
      <TitleCategory>Vegetarian</TitleCategory>
      <RecipeCategoryCard category="vegetarian"></RecipeCategoryCard>
      <TitleCategory>Beef</TitleCategory>
      <RecipeCategoryCard category="beef"></RecipeCategoryCard>
    </div>
  );
};
export default Recipes;
