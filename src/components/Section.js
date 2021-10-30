import React from 'react';
import { Link } from "gatsby"

const Section = ({ data }) => {
  const { title, label, description, year, imagePath, route } = data;

  return (
    <Link to={route} class="flex flex-row justify-between pt-2 md:pt-4 lg:pt-6 dark:bg-black dark:text-white hover:text-primary">
      <div class="flex flex-col max-w-48">
        <h1 class="font-bold text-lg sm:text-xl lg:text-3xl my-2">{title}</h1>
        <div class="border border-2 border-current w-16 md:w-20 lg:w-24"></div>
        <p class="font-semibold uppercase my-1 pt-1 text-sm lg:text-lg">{label}</p>
        <p class="uppercase my-1 text-sm lg:text-lg">{year}</p>
      </div>
      <div class="p-2">
        <img class="h-32 w-48 md:h-48 md:w-64 xl:h-64 xl:w-96" src={imagePath} alt={title} />
      </div>
    </Link>
  )
}

export default Section
