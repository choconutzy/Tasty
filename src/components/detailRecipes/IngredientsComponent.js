import styled from "styled-components";
import "../../styles/DetailRecipes.css";

const IngredientContainer = styled.div`
  width: 50%;
  margin: 10px;
  text-align: left;
  padding: 10px;
  height: min-content;
`;

const DetailIngridient = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 2px 10px;
`;

const IngredientComponent = ({ detail }) => {
  const ingredients = detail?.ingredients;

  return (
    <IngredientContainer className="ingredients border">
      {ingredients?.map((curr, index) => {
        return (
          <DetailIngridient key={index}>
            <label className="container-checkbox">
              <input type="checkbox" />
              {curr}
              <span className="checkmark"></span>
            </label>
          </DetailIngridient>
        );
      })}
    </IngredientContainer>
  );
};

export default IngredientComponent;
