import { createContext, useEffect, useState, useContext } from "react";

function createNewMeal(meal) {
  return {
    name: meal.strMeal,
    image: meal.strMealThumb,
    id: meal.idMeal,
  };
}

const defaultValue = [];

export const MealsContext = createContext(defaultValue);

export function MealsProvider({ children }) {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const url = "https://themealdb.com/api/json/v1/1/filter.php?a=American";

    fetch(url)
      .then((response) => response.json())
      .then((responseArray) => responseArray.meals)
      .then((responseMeals) => responseMeals.map(createNewMeal))
      .then(setPopular);
  }, []); // componentDidMount

  const [chinese, setChinese] = useState([]);
  useEffect(() => {
    const url = "https://themealdb.com/api/json/v1/1/filter.php?a=Chinese";

    fetch(url)
      .then((response) => response.json())
      .then((responseArray) => responseArray.meals)
      .then((responseMeals) => responseMeals.map(createNewMeal))
      .then(setChinese);
  }, []); // componentDidMount

  const [beefs, setBeefs] = useState([]);
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef";

    fetch(url)
      .then((response) => response.json())
      .then((responseArray) => responseArray.meals)
      .then((responseMeals) => responseMeals.map(createNewMeal))
      .then(setBeefs);
  }, []); // componentDidMount

  const [vegetarian, setVegetarian] = useState([]);
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";

    fetch(url)
      .then((response) => response.json())
      .then((responseArray) => responseArray.meals)
      .then((responseMeals) => responseMeals.map(createNewMeal))
      .then(setVegetarian);
  }, []); // componentDidMount

  const contextValue = {
    meals: {
      popular: popular.slice(0, 8),
      chinese: chinese.slice(0, 8),
      beef: beefs.slice(4, 12),
      vegetarian: vegetarian.slice(4, 12),
    },
  };

  console.log("CONTEXT", contextValue);

  return <MealsContext.Provider value={contextValue}>{children}</MealsContext.Provider>;
}

export const useMeals = () =>{
  const context = useContext(MealsContext);
  if(context === undefined){
      throw new Error('useCount must be used within a Bookmark Provider')
  }

  return context
}