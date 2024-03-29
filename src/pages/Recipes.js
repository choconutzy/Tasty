import React from "react";
import RecipeCategoryCard from "../components/recipes/RecipeCategoryCard";
import "../styles/Recipes.css";
import styled from "styled-components";
import Layout from "../layouts";

const TitleCategory = styled.h3`
  text-align: left;
  margin: 40px 5% -10px;
  padding-left: 10px;
`;

const Recipes = () => {
  return (
    <Layout>
      <div>
        <TitleCategory>Popular recipes</TitleCategory>
        <RecipeCategoryCard category="popular"></RecipeCategoryCard>
        <TitleCategory>Chinese Cuisine</TitleCategory>
        <RecipeCategoryCard category="chinese"></RecipeCategoryCard>
        <TitleCategory>Vegetarian</TitleCategory>
        <RecipeCategoryCard category="vegetarian"></RecipeCategoryCard>
        <TitleCategory>Beef</TitleCategory>
        <RecipeCategoryCard category="beef"></RecipeCategoryCard>
      </div>
    </Layout>
  );
};
export default Recipes;
