import React, { useContext } from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";
import "../../styles/Recipes.css";
import { MealsContext } from "../../context/meals-context";

const OverflowCard = styled.div`
  overflow: auto;
  display: flex;
  justify-content: flex-start;
  margin: 20px 5%;
`;

const RecipeCategoryCard = (props) => {
  const { meals } = useContext(MealsContext);
  const category = props.category;

  return (
    <div>
      <OverflowCard className="overflow-card">
        {meals[category].map((meal) => (
          <div>
            <RecipeCard key={meal.id} name={meal.name} image={meal.image} id={meal.id} />
          </div>
        ))}
      </OverflowCard>
    </div>
  );
};

export default RecipeCategoryCard;
