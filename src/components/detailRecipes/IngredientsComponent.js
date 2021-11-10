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

const IngredientComponent = () => {
  return (
    <IngredientContainer className="ingredients border">
      <DetailIngridient>
        <label class="container-checkbox">
          <input type="checkbox" />3 tbps olive oil
          <span class="checkmark"></span>
        </label>
      </DetailIngridient>
      <DetailIngridient>
        <label class="container-checkbox">
          <input type="checkbox" />2 chopped onions
          <span class="checkmark"></span>
        </label>
      </DetailIngridient>
      <DetailIngridient>
        <label class="container-checkbox">
          <input type="checkbox" />2 sticks salary
          <span class="checkmark"></span>
        </label>
      </DetailIngridient>
      <DetailIngridient>
        <label class="container-checkbox">
          <input type="checkbox" />
          300g carrots
          <span class="checkmark"></span>
        </label>
      </DetailIngridient>
      <DetailIngridient>
        <label class="container-checkbox">
          <input type="checkbox" />
          500g potatoes
          <span class="checkmark"></span>
        </label>
      </DetailIngridient>
      <DetailIngridient>
        <label class="container-checkbox">
          <input type="checkbox" />4 bay leaf
          <span class="checkmark"></span>
        </label>
      </DetailIngridient>
      <DetailIngridient>
        <label class="container-checkbox">
          <input type="checkbox" />5 tblsp tomato puree
          <span class="checkmark"></span>
        </label>
      </DetailIngridient>
    </IngredientContainer>
  );
};

export default IngredientComponent;
