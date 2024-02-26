import { recipeData } from "../../assets/Js/recipeData.js";
import RecipeCard from "./RecipeCard.jsx";

function RecipeList() {
  return (
    <div className="recipe-wrapper">
      {recipeData.map((recipeItem) => {
        return (
          <RecipeCard
            key={recipeItem.id}
            recipeImage={recipeItem.img}
            recipeTitle={recipeItem.title}
            recipeDesc={recipeItem.desc}
            recipeDuration={recipeItem.duration}
            recipeDetail={recipeItem.detail}
            recipeMaterials={recipeItem.materials}
          />
        );
      })}
    </div>
  );
}

export default RecipeList;
