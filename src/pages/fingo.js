import React from 'react'

const data = {
  title: "Fingo",
  description: "A passion project between myself and 3 friends, “fingo” takes an iterative approach to teaching the basics of stock markets. This project was my introduction to Figma and a chance to explore the idea of gamification.",
  banner: "../fingo_banner.png"
}

const Fingo = () => {

  return (
    <main class="min-h-screen min-w-screen dark:bg-black">
      <div class="h-14 bg-white w-screen flex flex-row justify-between items-center"> 
        <a href="/" class="font-bold pl-16 flex flex-row items-center">
          Home
        </a>
        <a href="/" class="font-bold pr-16">Resume</a>
      </div>
      <img class="w-screen" src={data.banner} />
      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-10 md:pt-16 lg:pt-18">
        <div class="flex flex-col px-3 md:px-1">
          <p class="font-semibold dark:text-white text-4xl pb-2">{data.title}</p>
          <p class="text-gray-600 dark:text-white">{data.description}</p>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 bg-white flex flex-row justify-between">
        <div class="flex flex-col">
          <p class="font-semibold">Team</p>
          <p class="whitespace-pre text-gray-600">{'UI/UX Designer (me)\n3 Full Stack Developers'}</p>
        </div>
        <div class="flex flex-col">
          <p class="font-semibold">Role</p>
          <p class="whitespace-pre text-gray-600">{'UX Development\nUI Design\nArchitecture Design\nPrototyping'}</p>
          
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col">
            <p class="font-semibold">Tools</p>
            <p class="text-gray-600">Figma</p>
          </div>
          <div class="flex flex-col">
            <p class="font-semibold">Duration</p>
            <p class="whitespace-pre text-gray-600">{'Summer 2019 - Whenever\nI can pick it back up again'}</p>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white">
        <p class="text-2xl text-gray-600 font-semibold">Full article on the way :)</p>
      </div>
    </main>
  )
}

export default Fingo
