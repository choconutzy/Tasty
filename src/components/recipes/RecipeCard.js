import React from "react";
import styled from "styled-components";
import "../../styles/Recipes.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useBookmark } from "../../context/bookmarkContext";
import { useNavigate } from "react-router";

const RecipeCardContainer = styled.div`
  width: 350px;
  height: auto;
  border-radius: 10px;
  background: #393d3d;
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
  const navigate = useNavigate()
  const bookmark = useBookmark()
  const Profil = JSON.parse(sessionStorage.getItem("isLoggedin"))
  const findBookmark = bookmark.state.find(i=>i.id===props.id)
  console.log(Profil)
  const [click, setClick] = useState(false);
  const handleClick = () =>{ 
    if(!Profil){
      alert("Anda Harus Log In")
      navigate('/sign-in')
    } else{
      if(findBookmark){
        bookmark.dispatch({type: 'remove', name: props.name, id: props.id, image: props.image, isAdd: click}) 
      } else{
        setClick(click)
        click? bookmark.dispatch({type: 'remove', name: props.name, id: props.id, image: props.image, isAdd: click}) : bookmark.dispatch({type: 'add', name: props.name, id: props.id, image:props.image, isAdd: click})
      }
    }
  };
  return (
    <div>
      <RecipeCardContainer className="shadow-effect">
        <TopContainer>
          <NavLink to={`/${props.id}`} style={linkStyle}>
            <div name={props.name} image={props.image} id={props.id}>
              <ImageStyled src={props.image}></ImageStyled>
              <h3>{props.name}</h3>
            </div>
          </NavLink>
          <BookmarkIcon onClick={handleClick}>
            <i className={
              !Profil? "far fa-bookmark fa-lg" :
              findBookmark? "fas fa-bookmark fa-lg" : 
              click? "fas fa-bookmark fa-lg" :  
              "far fa-bookmark fa-lg"
              }></i>
          </BookmarkIcon>
        </TopContainer>
      </RecipeCardContainer>
    </div>
  );
};

export default RecipeCard;
