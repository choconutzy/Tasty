import React from "react";
import styled from "styled-components";
import pic from "../images/landingPage.png";
import search from "../images/Search.png";
import bookmark from "../images/Bookmark.png";
import collection from "../images/Collection.png";
import "../styles/Home.css";
import bread from "../images/Bread.png";
import burger from "../images/Burger.png";
import Chicken from "../images/Chicken.png";
import frienchfries from "../images/FrienchFries.png";
import noodle from "../images/Noodle.png";
import soup from "../images/Soup.png";
import orangejuice from "../images/orangeJuice.png";
import Layout from "../layouts";
import { NavLink } from "react-router-dom";

const StyledWelcome = styled.div`
  text-align: left;
  padding: 20px;
  width: 60%;
  padding-top: 8%;
`;

const StyledButton = styled.button`
  padding: 12px;
  background: #f7c325;
  border-radius: 20px;
  border: none;
  font-size: 15px;
`;

const JumbotronContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4% 10% 8%;
`;

const StyledImage = styled.img`
  display: flex;
  justify-content: end;
  width: 50%;
  height: auto;
`;
const FeatureContainer = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  margin: 0 150px 20px;
  padding-bottom: 20px;
`;

const FeatureCard = styled.div`
  width: 30%;
  height: max;
  border-radius: 15px;
  /* border: #e8e8e8 solid 1px; */
  margin: 10px;
  padding: 20px;
  background: #282b2c;
`;

const PopRecipesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const PopRecipesCard = styled.img`
  width: 150px;
  height: auto;
  padding: 10px;
  margin: 20px;
`;

const PopInnerContainer = styled.div`
  flex-wrap: wrap;
  margin: 0 20%; ;
`;

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <JumbotronContainer className="jumbotron">
          <StyledWelcome className="desc content d-flex justify-content-center">
            <div className="desc item">
              <h1 className="m-sm">Best Recipe Your Meals Days</h1>
              <p className="m-sm">Search your favourite meals recipes and save it to your collections</p>
            </div>
            <div className="button-center">
            <NavLink to="/sign-in">
                <StyledButton className="button m-sm">Getting Started</StyledButton>
            </NavLink>
            </div>
          </StyledWelcome>
          <StyledImage className="img jumbotron item" src={pic}></StyledImage>
        </JumbotronContainer>
        <h3> Features </h3>
        <FeatureContainer className="feature">
          <FeatureCard className="feature card">
            <h4 className="m-sm">Search meals</h4>
            <img className="m-sm" src={search} width="20%" alt="search"></img>
            <p className="m-sm">Search your favourites meals recipes from this websites</p>
          </FeatureCard>
          <FeatureCard className="feature card">
            <h4 className="m-sm">Save to Bookmark</h4>
            <img className="m-sm" src={bookmark} width="20%" alt="bookmark"></img>
            <p className="m-sm">Save to your Bookmarkand and you can see later</p>
          </FeatureCard>
          <FeatureCard className="feature card">
            <h4 className="m-sm">Read your Collection</h4>
            <img className="m-sm" src={collection} width="20%" alt="collection"></img>
            <p className="m-sm">Read and cook your favourite meals</p>
          </FeatureCard>
        </FeatureContainer>
        <h3>Popular Recipes</h3>
        <PopRecipesContainer>
          <PopInnerContainer>
            <PopRecipesCard src={bread} className="pop-recipe-item"></PopRecipesCard>
            <PopRecipesCard src={burger} className="pop-recipe-item"></PopRecipesCard>
            <PopRecipesCard src={Chicken} className="pop-recipe-item"></PopRecipesCard>
            <PopRecipesCard src={noodle} className="pop-recipe-item"></PopRecipesCard>
            <PopRecipesCard src={soup} className="pop-recipe-item"></PopRecipesCard>
            <PopRecipesCard src={frienchfries} className="pop-recipe-item"></PopRecipesCard>
            <PopRecipesCard src={orangejuice} className="pop-recipe-item"></PopRecipesCard>
          </PopInnerContainer>
        </PopRecipesContainer>
      </div>
    </Layout>
  );
};

export default Home;
