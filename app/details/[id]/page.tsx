"use client";
import { recipe1 } from "@/components/sections/morerecipes";
import { useRouter } from "next/router";

const RecipeDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const recipeId = Number(id);

  const recipe = recipe1.find((r) => r.id === recipeId);
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <>
      <div>
        {recipe.meal}
        {recipe.id}
      </div>
    </>
  );
};

export default RecipeDetail;
