import React from 'react'

const data = {
  title: "Purolator",
  description: "this is a description"
}

const Purolator = () => {

  return (
    <main class="min-h-screen min-w-screen dark:bg-black">
      <div class="mx-auto min-h-screen w-full sm:w-3/4 xl:w-2/3 pt-10 md:pt-16 lg:pt-28">
        <div class="flex flex-col px-3 md:px-1">
          <p class="font-bold dark:text-white">{data.title}</p>
          <p class="dark:text-white">{data.description}</p>
        </div>
      </div>
    </main>
  )
}

export default Purolator
