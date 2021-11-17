import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "../../styles/MyRecipes.css";
import { Link } from 'react-router-dom';
import { useBookmark } from "../../context/bookmarkContext";

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

const linkStyle = {
    textDecoration: "none",
    color: '#e8e8e8',
    cursor: 'pointer'
}

const BookmarkCard = () => {
    const bookmark = useBookmark()
    const dataBookmarks = bookmark.state
    const [click, setClick] = useState(false);
    return(
        <div>
            {dataBookmarks.length>0? dataBookmarks.map((dataBookmark)=>{
                return (
                    <div className="bookmark-container">
                        <div className="image-container">
                            <ImageStyled className="image" src={dataBookmark.image}></ImageStyled>
                        </div>
                    <div className="detail-container">
                        <div className="no-more">
                            <div className="title-icon">
                                <h2>{dataBookmark.name}</h2>
                                <BookmarkIcon onClick={() => {
                                    setClick(!click)
                                    bookmark.dispatch({type: 'remove', name: dataBookmark.name, id: dataBookmark.id, image: dataBookmark.image, isAdd: click})
                                }}>
                                    <i
                                        className={dataBookmark? "fas fa-bookmark fa-lg" :(!click? "fas fa-bookmark fa-lg" : "far fa-bookmark fa-lg")}
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
                                <Link to={`/${dataBookmark.id}`} style={linkStyle}><p>Read More</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })
            : <div>
                <h2>You haven't saved a list of recipes yet</h2>
            </div>}
            
        </div>
    )
}

export default BookmarkCard