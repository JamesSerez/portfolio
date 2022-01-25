import React from 'react'

const data = {
  title: "Purolator Support Desk",
  description: "This project is a self-initiated, custom designed and custom built prototype to fuel a full ground-up rebuild of Purolator’s Support Desk system.",
  banner: "../purolator_banner.png"
}

const Purolator = () => {

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
          <p class="whitespace-pre text-gray-600">{'UI/UX Designer (me)\nSoftware Developer (still me)\n2 Supporting Engineers\nVP of Product'}</p>
        </div>
        <div class="flex flex-col">
          <p class="font-semibold">Role</p>
          <p class="whitespace-pre text-gray-600">{'UX Research\nInteraction Design\nSoftware Engineering\nPrototyping'}</p>
          
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col">
            <p class="font-semibold">Tools</p>
            <p class="text-gray-600">Figma, HTML, CSS, JavaScript</p>
          </div>
          <div class="flex flex-col">
            <p class="font-semibold">Duration</p>
            <p class="text-gray-600">May 2019 - July 2019</p>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white">
        <p class="text-2xl text-gray-600 font-semibold">Full article on the way :)</p>
      </div>
    </main>
  )
}

export default Purolator
