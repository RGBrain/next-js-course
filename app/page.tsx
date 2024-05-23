import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

export default function HomePage() {

  const recipes = [
    {
      id: 1,
      name: 'chicken sandwich',
      cuisine: 'American',
    }

  ]

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
    <div>
      {cuisines.map((cuisine, idx) => (
        <Badge 
        key={'${cuisine}-${idx}'} 
        variant={'outline'}
        className='border-orange-800 text-gray-900 text-lg mx-2 my-1 hover:cursor-pointerbg-orange-50 hover:scale-110 ease-in duration-200'>

          {cuisine}
        </Badge>
      ) )}

      {recipes.map((recipe, idx) => (
      <Card key={'${recipe.name}}-${idx}'}>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <p>{recipe.name}</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      ))}
    </div>
  )
}
