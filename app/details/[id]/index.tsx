"use client";
import { PrintAndShare } from "@/components/Collections";
import DetailsInfo from "@/components/sections/DetailsInfo";
import DetailsMoreRecipes from "@/components/sections/DetailsMoreRecipe";
import Directions from "@/components/sections/Directions";
import Ingredients from "@/components/sections/Ingredients";
import { recipe1 } from "@/components/sections/MoreRecipes";
import Subscribe from "@/components/sections/Subscribe";
import { useParams } from "next/navigation";

const RecipeDetail = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Loading...</div>;
  }
  const recipeId = Number(id);

  const recipe = recipe1.find((r) => r.id === recipeId);
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
