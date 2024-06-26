import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const getRecipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  return data.recipes;
};

export default async function HomePage() {
  const recipes = await getRecipes();

  const cuisines: Array<string> = [
    "All",
    "Asian",
    "American",
    "Greek",
    "Italian",
    "Indian",
    "Japanese",
    "Meditterranean",
    "Mexican",
    "Pakistani",
  ];

  return (
    <div className="xl:px-24 px-10">
      <div className="my-12">
        {cuisines.map((cuisine, idx) => (
          <Badge
            key={"${cuisine}-${idx}"}
            variant={"outline"}
            className="border-orange-800 text-gray-900 text-lg mx-2 my-1 hover:cursor-pointerbg-orange-50 hover:scale-110 ease-in duration-200"
          >
            {cuisine}
          </Badge>
        ))}

        <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-x-10 gap-y-20 xl:gap-y-32 xl:pt-32 pt-12 pb-40">
          {recipes.map((recipe, idx) => (
            <Card
              key={"${recipe.name}}-${idx}"}
              className="flex flex-col bg-orange-50 hover:scale-105 ease-in duration-200 xl:min-h-[600px] fancyGradient"
            >
              <CardHeader>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  width={500}
                  height={500}
                  className="bg-cover rounded-md shadow-xl"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="upppercase lg:text-3xl relative font-bold line-clamp-2">
                  {recipe.name}
                </CardTitle>
              </CardContent>
              <CardFooter className="flex items-start gap-2 lg:gap-12 lg:flex-row flex-col">
                <div className="flex flex-col">
                  <p className="text-lg">Serves</p>
                  <p className="text-gray-800">{recipe.servings}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">Prep Time</p>
                  <p className="text-gray-800">{recipe.prepTimeMinutes} MIN</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">Cook Time</p>
                  <p className="text-gray-800">{recipe.cookTimeMinutes} MIN</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
