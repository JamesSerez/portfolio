import React from 'react';
import { Link } from "gatsby"

const Section = ({ data }) => {
  const { title, label, description, year, imagePath, route } = data;

  return (
    <Link to={route} class="flex flex-row justify-between pt-2 md:pt-4 lg:pt-6 dark:bg-dark dark:text-white hover:text-gray-400 group">
      <div class="flex flex-col max-w-48">
        <h1 class="font-semibold text-lg sm:text-xl lg:text-3xl my-2 w-64 xl:pb-4 lg:pb-4 md:pb-1 sm:pb-1">{title}</h1>
        <div class="border border-gray-300 border-current colo w-16 md:w-20 lg:w-10"></div>
        <p class="font-semibold text-gray-500 uppercase my-1 pt-1 text-sm lg:text-md xl:pt-2 lg:pt-2 md:pt-1 sm:pt-1">{label}</p>
        <p class="uppercase text-gray-500 my-1 text-sm lg:text-sm">{year}</p>
      </div>
      <div class="p-2 pb-2">
        <img class="md:w-108 xl:w-144 2xl:w-168 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105" src={imagePath} alt={title} />
      </div>
    </Link>
  )
}

export default Section
