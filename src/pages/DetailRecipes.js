import { useState } from "react";
import useWindowDimensions from "../components/detailRecipes/DetailHelper";
import styled from "styled-components";
import "../styles/DetailRecipes.css";
import IngredientComponent from "../components/detailRecipes/IngredientsComponent";
import MethodeComponent from "../components/detailRecipes/MethodeComponent";

const MealsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  /* border: 1px solid #e8e8e8; */
  border-radius: 10px;
  padding: 2%;
  margin: 30px 30%;
  height: 200px;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  background: #282c2c;
  padding: 40px;
`;

const StyledImageMeals = styled.img`
  width: auto;
  border-radius: 50%;
  height: 100px;
`;

const DetailContainer = styled.div`
  margin: 10px 5%;
  display: flex;
  justify-content: center;
`;

const IngredientContainer = styled.div`
  width: 50%;
  margin: 10px;
  text-align: left;
  padding: 10px;
  height: min-content;
`;

const BoxTitle = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BookmarkIcon = styled.div`
  display: flex;
  align-items: start;
  justify-content: end;
  margin-top: -15px;
  margin-right: -15px;
`;

const MethodContainer = styled.div`
  width: 50%;
  margin: 10px;
  text-align: left;
  padding: 10px;
`;

const DetailRecipes = () => {
  const [tabShows, setTabShows] = useState("Ingredients");
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { width } = useWindowDimensions();
  let show = () => {
    if (width > 780) {
      return (
        <DetailContainer>
          <IngredientComponent />
          <MethodeComponent />
        </DetailContainer>
      );
    } else {
      return tabShows === "Ingredients" ? (
        <IngredientComponent />
      ) : (
        <MethodeComponent />
      );
    }
  };
  return (
    <div>
      {/* <h2 className="mt-6">Detail Recipe</h2> */}
      <MealsContainer className="meals box pad">
        <BoxTitle>
          <div className="titles meals">
            <h2>Creamy Tomato Soup</h2>
          </div>
          <StyledImageMeals
            className="image"
            src={
              "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg"
            }
          ></StyledImageMeals>
        </BoxTitle>
        <BookmarkIcon onClick={handleClick}>
          <i
            className={click ? "fas fa-bookmark fa-lg" : "far fa-bookmark fa-lg"}
          ></i>
        </BookmarkIcon>
      </MealsContainer>
      <DetailContainer className="meals box title box">
        <IngredientContainer className="text-center ingredient">
          <h4 className="text-start">Ingredients</h4>
        </IngredientContainer>
        <MethodContainer className="text-center methode">
          <h4 className="text-start">Method</h4>
        </MethodContainer>
      </DetailContainer>
      <div className="nav-container">
        <div
          className={
            tabShows === "Ingredients" ? "nav-item active" : "nav-item"
          }
          onClick={() => setTabShows("Ingredients")}
        >
          <h4>Ingredients</h4>
        </div>
        <div
          className={tabShows === "Methode" ? "nav-item active" : "nav-item"}
          onClick={() => setTabShows("Methode")}
        >
          <h4>Method</h4>
        </div>
      </div>
      <DetailContainer className="meals box">{show()}</DetailContainer>
    </div>
  );
};

export default DetailRecipes;
