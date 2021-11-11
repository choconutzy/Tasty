import React from "react";
import RecipeJumbotronCard from "../components/recipes/RecipeJumbotron";
import RecipeCategoryCard from "../components/recipes/RecipeCategoryCard";
import "../styles/Recipes.css"
import styled from "styled-components";

const TitleCategory = styled.h3`
  text-align: left;
  margin: 40px 5% -10px;
  padding-left: 10px;
`

const Recipes = () => {
  return (
    <div>
      <RecipeJumbotronCard></RecipeJumbotronCard>
      <TitleCategory>Explore  new recipes</TitleCategory>
      <RecipeCategoryCard></RecipeCategoryCard>
      <TitleCategory>Popular  recipes</TitleCategory>
      <RecipeCategoryCard></RecipeCategoryCard>
      <TitleCategory>Cheesy</TitleCategory>
      <RecipeCategoryCard></RecipeCategoryCard>
      <TitleCategory>Meaty</TitleCategory>
      <RecipeCategoryCard></RecipeCategoryCard>
    </div>
  );
};
export default Recipes;
