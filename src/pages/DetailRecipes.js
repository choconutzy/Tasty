import { useState, useEffect } from "react";
import useWindowDimensions from "../helpers/DetailHelper";
import styled from "styled-components";
import "../styles/DetailRecipes.css";
import IngredientComponent from "../components/detailRecipes/IngredientsComponent";
import MethodeComponent from "../components/detailRecipes/MethodeComponent";
import { useParams } from "react-router";
import { useBookmark } from "../context/bookmarkContext";
import { detailExtractor } from "../helpers/detailExtractor";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate()
  const { width } = useWindowDimensions();
  const bookmark = useBookmark();
  const [detailLocal, setDetailLocal] = useState([]);
  console.log(detailLocal)
  let { id } = useParams();
  console.log(bookmark)
  const activeRecipe = bookmark.state.find((i) => i.id === id);
  console.log(activeRecipe)
  console.log(id);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseMeals) => responseMeals.meals)
      .then((data) => detailExtractor(data[0]))
      .then(setDetailLocal);
  }, [id]); // componentDidMount
  const [tabShows, setTabShows] = useState("Ingredients");
  const [click, setClick] = useState(false);
  const Profil = JSON.parse(sessionStorage.getItem("isLoggedin"))
  const handleClick = () =>  () => {
    if(!Profil){
      alert("Anda Harus Log In")
      navigate('/sign-in')
    }else{
      if (activeRecipe) {
        bookmark.dispatch({
          type: "remove",
          name: detailLocal.title,
          id: detailLocal.id,
          image: detailLocal.image,
          isAdd: click
        });
      } else {
        setClick(click);
        click
          ? bookmark.dispatch({
              type: "remove",
              name: detailLocal.title,
              id: detailLocal.id,
              image: detailLocal.image,
              isAdd: click
            })
          : bookmark.dispatch({
              type: "add",
              name: detailLocal.title,
              id: detailLocal.id,
              image: detailLocal.image,
              isAdd: click
            });
      }

    }
  };
  let show = () => {
    if (width > 780) {
      return (
        <DetailContainer>
          <IngredientComponent detail ={detailLocal} />
          <MethodeComponent detail ={detailLocal} />
        </DetailContainer>
      );
    } else {
      return tabShows === "Ingredients" ? (
        <IngredientComponent detail ={detailLocal} />
      ) : (
        <MethodeComponent detail ={detailLocal} />
      );
    }
  };
  return (
    <div>
      {/* <h2 className="mt-6">Detail Recipe</h2> */}
      <MealsContainer className="meals box pad">
        <BoxTitle>
          <div className="titles meals">
            <h2>{detailLocal?.title}</h2>
          </div>
          <StyledImageMeals
            className="image"
            src={
              detailLocal?.image
            }
          ></StyledImageMeals>
        </BoxTitle>
        <BookmarkIcon>
          <i  onClick={handleClick()}
            className={
            activeRecipe
              ? "fas fa-bookmark fa-lg"
              : click
              ? "fas fa-bookmark fa-lg"
              : "far fa-bookmark fa-lg"
            }
          ></i>
        </BookmarkIcon>
      </MealsContainer>
      <DetailContainer className="meals box title box">
        <IngredientContainer className="text-center ingredient">
          <h6 className="text-start">Ingredients</h6>
        </IngredientContainer>
        <MethodContainer className="text-center methode">
          <h6 className="text-start">Method</h6>
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
