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
  margin: 0 20%;;
`;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  text-align: left;
  padding: 8% 10%;
`;

const FooterContent = styled.div`
  padding: 3%;
`;

const Home = () => {
  return (
    <div className="container">
      <JumbotronContainer className="jumbotron">
        <StyledWelcome className="desc content d-flex justify-content-center">
          <div className="desc item">
            <h2 className="m-sm">Best Recipe Your Meals Days</h2>
            <p className="m-sm">
              Search your favourite meals recipes and save it to your
              collections
            </p>
          </div>
          <div className="button-center">
            <StyledButton className="button m-sm">Getting Started</StyledButton>           
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
      <FooterContainer className="footer-flex">
        <FooterContent>
          <h3>Tasty</h3>
          <p class="mb-4 mt-4">Kondang Merak Street, 136135, Indonesia</p>
          <p>
            <strong>Phone:</strong> +91 8548920904
          </p>
          <p>
            <strong>Email:</strong> tasty.official0@gmail.com
          </p>
        </FooterContent>
        <FooterContent className="footer-menus">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <i class="fas fa-check"></i> <a href="Home">Home</a>
            </li>
            <li>
              <i class="fas fa-check"></i> <a href="#AboutUs">About us</a>
            </li>
            <li>
              <i class="fas fa-check"></i> <a href="#Services">Services</a>
            </li>
            <li>
              <i class="fas fa-check"></i> <a href="#TOS">Terms of service</a>
            </li>
            <li>
              <i class="fas fa-check"></i> <a href="#PrivacyPolicy">Privacy policy</a>
            </li>
          </ul>
        </FooterContent>
        <FooterContent className="footer-menus">
          <h4>Our Services</h4>
          <ul>
            <li>
              <i class="fas fa-check"></i> Recipes Meals
            </li>
            <li>
              <i class="fas fa-check"></i> Popular Recipes
            </li>
            <li>
              <i class="fas fa-check"></i> Bookmark Recipes
            </li>
            <li>
              <i class="fas fa-check"></i> Checklist Ingredients
            </li>
          </ul>
        </FooterContent>
        <FooterContent>
          <h4>Our Newsletter</h4>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>

          <div className="social-links mt-3">
            <a href="https://www.facebook.com/">
              <i class="fab fa-facebook-f icon"></i>
            </a>
            <a href="https://twitter.com/home">
              <i class="fab fa-twitter icon"></i>
            </a>
            <a href="https://www.linkedin.com/">
              <i class="fab fa-linkedin-in icon"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i class="fab fa-instagram icon"></i>
            </a>
            <a href="https://id.pinterest.com/">
              <i class="fab fa-pinterest-p icon"></i>
            </a>
          </div>
        </FooterContent>
      </FooterContainer>
    </div>
  );
};

export default Home;
