import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  text-align: left;
  padding: 8% 10%;
`;

const FooterContent = styled.div`
  padding: 3%;
`;
export default function Footer() {
  return (
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
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>

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
  );
}
