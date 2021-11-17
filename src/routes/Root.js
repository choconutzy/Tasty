import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MyRecipes from "../pages/MyRecipes";
import Recipes from "../pages/Recipes";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import DetailRecipes from "../pages/DetailRecipes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="my-recipes" element={<MyRecipes />} />
      <Route exact path="recipes" element={<Recipes />} />
      <Route exact path="sign-in" element={<SignIn />} />
      <Route exact path="sign-up" element={<SignUp />} />
      <Route exact path="/:id" element={<DetailRecipes />} />
      <Route exact path="not-found" element={<NotFound />} />
    </Routes>
  );
}
