import React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";
import "../../styles/Recipes.css"

const OverflowCard = styled.div`
    overflow: auto;
    display: flex;
    justify-content: flex-start;
    margin: 20px 5%;
`

const RecipeCategoryCard = () =>{
    return(
        <div>
            <OverflowCard className="overflow-card">
                <RecipeCard></RecipeCard>
                <RecipeCard></RecipeCard>
                <RecipeCard></RecipeCard>
                <RecipeCard></RecipeCard>
                <RecipeCard></RecipeCard>
                <RecipeCard></RecipeCard>
                <RecipeCard></RecipeCard>
            </OverflowCard>
        </div>
    )
}

export default RecipeCategoryCard