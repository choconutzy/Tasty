import { createContext, useEffect, useState } from "react";

function createNewDetail(detail) {
  var obj = detail;
  var ingredients_measurements_mapping = Object.keys(obj)
    .filter(
      (str) =>
        (str.includes("strMeasure") || str.includes("strIngredient")) &&
        obj[str]
    )
    .reduce((acc, curr) => {
      if (curr.includes("strIngredient")) {
        const idx = curr.split("strIngredient")[1];
        const ingredient = obj[curr];
        const measurement = obj[`strMeasure${idx}`];
        return [...acc, `${ingredient} ${measurement}`];
      } else {
        return acc;
      }
    }, []);
  var methode_mapping = detail.strInstructions.replace("\r\n", " ").split(". ");
  const mapped_method = methode_mapping.map((item) =>
    item.replace("\r\n", " ")
  );
  console.log(methode_mapping);
  return {
    id: detail.idMeal,
    title: detail.strMeal,
    image: detail.strMealThumb,
    category : detail.strCategory,
    method: mapped_method,
    ingredients: ingredients_measurements_mapping,
    lengthMethod: methode_mapping.length
  };
}

const defaultValue = [];

export const DetailContext = createContext(defaultValue);

export function DetailProvider({ children }) {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

    fetch(url)
      .then((response) => response.json())
      .then((responseMeals) => responseMeals.meals)
      .then((data) => createNewDetail(data[0]))
      .then(setDetail);
  }, []); // componentDidMount

  const contextValue = {
    detail: detail
  };

  console.log("Detail Resep", contextValue);

  return (
    <DetailContext.Provider value={contextValue}>
      {children}
    </DetailContext.Provider>
  );
}
