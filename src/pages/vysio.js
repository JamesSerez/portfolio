import React from 'react'

const data = {
  title: "Vysio",
  description: "Vysio, my Capstone Project for my degree, is a product that sets out to reimagine physiotherapy rehabilitation through enhanced tracking and comprehensive analytics.",
  banner: "../vysio_banner.png",
  resume: "../Resume.pdf"
}

const Vysio = () => {

  return (
    <main class="min-h-screen min-w-screen dark:bg-black">
      <div class="h-14 bg-white w-screen flex flex-row justify-between items-center"> 
        <a href="/" class="font-semibold pl-16 flex flex-row items-center">
        &lt; Home
        </a>
        <a href={data.resume} target="_blank" class="font-semibold pr-16">Resume</a>
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
          <p class="whitespace-pre text-gray-600">{'Product Designer (me)\n2 Full Stack Developers\nML Engineer'}</p>
        </div>
        <div class="flex flex-col">
          <p class="font-semibold">Role</p>
          <p class="whitespace-pre text-gray-600">{'Product Direction\nInteraction Design\nUser Testing\nPrototyping'}</p>
          
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col">
            <p class="font-semibold">Tools</p>
            <p class="text-gray-600">Figma, Notion, TailwindCSS</p>
          </div>
          <div class="flex flex-col">
            <p class="font-semibold">Duration</p>
            <p class="text-gray-600">September 2021 - Current</p>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white">
        <p class="text-2xl text-gray-600 font-semibold">Full article on the way :)</p>
      </div>
    </main>
  )
}

export default Vysio
