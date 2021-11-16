export function detailExtractor(detail) {
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