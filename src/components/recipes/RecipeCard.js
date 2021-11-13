import React from "react";
import styled from "styled-components";
import "../../styles/Recipes.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const RecipeCardContainer = styled.div`
  width: 350px;
  height: auto;
  border-radius: 10px;
  background: #282c2c;
  margin: 0px 5px 20px 5px;
  padding: 10px 3px 3px 20px;
  text-align: left;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;
const ImageStyled = styled.img`
  width: 50%;
  height: auto;
  padding: 0px;
  border-radius: 100%;
  padding: 10px;
`;
const BookmarkIcon = styled.div`
  display: flex;
  align-items: start;
  justify-content: end;
  margin-top: 2%;
  margin-right: 3%;
  &&:hover{
    cursor: pointer;
  }
`;

const linkStyle = {
  textDecoration: "none",
  color: '#e8e8e8',
  cursor: 'pointer'
}

const RecipeCard = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <RecipeCardContainer className="shadow-effect">
        <TopContainer>
          <NavLink to='/detail-recipe' style={linkStyle}>
            <div>
              <ImageStyled src={props.image}></ImageStyled>
              <h3>{props.name}</h3>
            </div>
          </NavLink>
          <BookmarkIcon onClick={handleClick}>
            <i className={click ? "fas fa-bookmark fa-lg" : "far fa-bookmark fa-lg"}></i>
          </BookmarkIcon>
        </TopContainer>
      </RecipeCardContainer>
    </div>
  );
};

export default RecipeCard;
