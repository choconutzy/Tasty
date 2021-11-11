import React from "react";
import styled from "styled-components";
import "../../styles/Recipes.css"
import { useState } from "react";

const RecipeCardContainer = styled.div`
    width: 400px;
    height: auto;
    border-radius: 10px;
    background: #282c2c;
    margin: 0px 5px 20px 5px;
    padding: 10px;
    text-align: left;
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom:10px
`
const ImageStyled = styled.img`
    width:50%;
    height: auto;
    padding: 0px;
    border-radius: 100%;
    padding: 10px;
`
const BookmarkIcon = styled.div`
  display: flex;
  align-items: start;
  justify-content: end;
  margin-top: 2%;
`;

const RecipeCard = () =>{
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <div>
            <RecipeCardContainer className="shadow-effect">
                <TopContainer>
                    <ImageStyled src={"https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg"}></ImageStyled>
                    <BookmarkIcon onClick={handleClick}>
                        <i className={click ? "fas fa-bookmark fa-lg" : "far fa-bookmark fa-lg"}></i>
                    </BookmarkIcon>
                </TopContainer>
                <h3>Creamy Tomato Soup</h3>
            </RecipeCardContainer>
        </div>
    )
}

export default RecipeCard