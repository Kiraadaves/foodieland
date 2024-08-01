"use client";
import DetailsInfo from "@/components/sections/DetailsInfo";
import DetailsMoreRecipes from "@/components/sections/DetailsMoreRecipe";
import Directions from "@/components/sections/Directions";
import Ingredients from "@/components/sections/Ingredients";
import { combinedRecipes } from "@/components/array";
import Subscribe from "@/components/sections/subscribe";
import { useParams } from "next/navigation";

interface Recipe {
  id: number;
  favorite: boolean;
  src: string;
  text1: string;
  text2: string;
  meal: string;
  detailsHeading: string;
  name: string;
}

const RecipeDetail = () => {
  const { name } = useParams();

  if (!name || typeof name !== "string") {
    return <div>Loading...</div>;
  }
  let recipe: Recipe | undefined;
  combinedRecipes.some((recipeArray) => {
    recipe = recipeArray.find(
      (r) => r.name.toLowerCase() === name.toLowerCase()
    );
    return recipe !== undefined;
  });

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className=" flex flex-col gap-20">
      <DetailsInfo
        heading={recipe.detailsHeading}
        prepTime={"15"}
        cookTime={"15"}
        meal={recipe.meal}
        src={recipe.src}
      />
      <Ingredients />
      <Directions />
      <Subscribe />
      <DetailsMoreRecipes />
    </div>
  );
};

export default RecipeDetail;
