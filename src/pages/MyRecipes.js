import React from "react";
import BookmarkCard from "../components/myRecipes/BookmarkCard";
import Layout from "../layouts";
import "../styles/MyRecipes.css";
import IsLogin from "../layouts/header/IsLogin";

const MyRecipes = () => {
  const { isLoggedin } = IsLogin();

  return (
    <Layout>
      <div className="container" style={{ paddingTop: 100 }}>
        {isLoggedin && <BookmarkCard></BookmarkCard>}
        {!isLoggedin && <h1>Anda harus login</h1>}
      </div>
    </Layout>
  );
};

export default MyRecipes;
