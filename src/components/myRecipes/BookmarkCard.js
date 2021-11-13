import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "../../styles/MyRecipes.css"

const ImageStyled = styled.img`
    width:80%;
    height: auto;
    padding: 0px;
    border-radius: 100%;
`

const BookmarkIcon = styled.div`
  display: flex;
  align-items: start;
  justify-content: end;
  margin-top: 2%;
`;

const BookmarkCard = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <div>
            <div className="bookmark-container">
                <div className="image-container">
                    <ImageStyled className="image" src={
              "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg"
            }></ImageStyled>
                </div>
                <div className="detail-container">
                    <div className="no-more">
                        <div className="title-icon">
                            <h2>Creamy Tomato Soup</h2>
                            <BookmarkIcon onClick={handleClick}>
                                <i
                                    className={click ? "fas fa-bookmark fa-lg" : "far fa-bookmark fa-lg"}
                                ></i>
                            </BookmarkIcon>
                        </div>
                        <div className=" t-ingredient">
                            <p>Ingredients</p>
                        </div>
                        <div className="ingredients">
                            <ul className="">
                                <li key="1" className="px-3">Tomato</li>
                                <li key="2" className="px-3">Carrots</li>
                                <li key="3" className="px-3">Onion</li>
                            </ul>
                        </div>
                        <div className="duration">
                            <i className="far fa-clock"></i>
                            <p className="time">1 Hour</p>
                        </div>
                    </div>
                    <div className="more">
                        <div className="to-detail">
                            <p>Read More</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookmarkCard