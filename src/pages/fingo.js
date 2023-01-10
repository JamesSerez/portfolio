import React from 'react'

const data = {
  title: "Fingo",
  description: "A passion project between myself and 3 friends, “fingo” takes an iterative approach to teaching the basics of stock markets. This project was my introduction to Figma and a chance to explore the idea of gamification.",
  banner: "../fingo_banner.png",
  resume:"../Resume.pdf",
  logo_white:"../logo_white.png"
}

const Fingo = () => {

  return (
    <main class="min-h-screen min-w-screen dark:bg-dark">
      <div class="h-14 bg-white dark:bg-dark w-screen flex flex-row justify-between items-center"> 
        <a href="/" class="font-semibold dark:text-white pl-16 flex flex-row items-center">
        &lt; Home
        </a>
        <img class="h-9 dark:hidden" src={data.logo_black} />
        <img class="h-9 hidden dark:block" src={data.logo_white} />
        <a href={data.resume} target="_blank" class="font-semibold pr-16 dark:text-white">Resume</a>
      </div>
      <img class="w-screen" src={data.banner} />
      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-10 md:pt-16 lg:pt-18">
        <div class="flex flex-col px-3 md:px-1">
          <p class="font-semibold dark:text-white text-4xl pb-2">{data.title}</p>
          <p class="text-gray-600 dark:text-white">{data.description}</p>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 bg-white dark:bg-dark flex flex-row justify-between">
        <div class="flex flex-col">
          <p class="font-semibold dark:text-white">Team</p>
          <p class="whitespace-pre text-gray-600 dark:text-gray-300">{'UI/UX Designer (me)\n3 Full Stack Developers'}</p>
        </div>
        <div class="flex flex-col">
          <p class="font-semibold dark:text-white">Role</p>
          <p class="whitespace-pre text-gray-600 dark:text-gray-300">{'UX Development\nUI Design\nArchitecture Design\nPrototyping'}</p>
          
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Tools</p>
            <p class="text-gray-600 dark:text-gray-300">Figma</p>
          </div>
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Duration</p>
            <p class="whitespace-pre text-gray-600 dark:text-gray-300">{'Summer 2019 - TBD'}</p>
          </div>
        </div>
      </div>

      <div class="w-full bg-gray-100 flex justify-center dark:bg-dark_diff">
        <div class="pt-6 pb-6">
          <p class="text-2xl text-gray-600 dark:text-white">🚧 Article under construction. Check back soon! 🛠</p>
        </div>
      </div>
    </main>
  )
}

export default Fingo
