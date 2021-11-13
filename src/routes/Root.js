import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MyRecipes from "../pages/MyRecipes";
import Recipes from "../pages/Recipes";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="my-recipes" element={<MyRecipes />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="not-found" element={<NotFound />} />
    </Routes>
  );
}
