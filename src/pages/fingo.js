import React from 'react'

const data = {
  title: "Fingo",
  description: "A passion project between myself and 3 friends, “fingo” takes an iterative approach to teaching the basics of stock markets. This project was my introduction to Figma and a chance to explore the idea of gamification.",
  banner: "../fingo_banner.png",
  resume:"../Resume.pdf",
  logo_white:"../logo_white.png",
  logo_black: "../logo_black.png"
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
          <p class="whitespace-pre text-gray-600 dark:text-gray-100">{'UI/UX Designer (me)\n3 Full Stack Developers'}</p>
        </div>
        <div class="flex flex-col">
          <p class="font-semibold dark:text-white">Role</p>
          <p class="whitespace-pre text-gray-600 dark:text-gray-100">{'UX Development\nUI Design\nArchitecture Design\nPrototyping'}</p>
          
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Tools</p>
            <p class="text-gray-600 dark:text-gray-100">Figma</p>
          </div>
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Duration</p>
            <p class="whitespace-pre text-gray-600 dark:text-gray-100">{'Summer 2019 - TBD'}</p>
          </div>
        </div>
      </div>

      <div class="w-full bg-gray-100 flex justify-center dark:bg-dark_diff">
        <div class="pt-6 pb-6">
          <p class="text-2xl text-gray-600 dark:text-white">🚧 Article under construction. Check back soon! 🛠</p>
        </div>
      </div>

      <div class="w-full bg-fingo">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="text-xl text-black font-semibold pt-4">Like what you see?</p>
          <p class="text-lg text-black font-medium">Let's talk.</p>
          <div class="flex flex-row justify-between w-24 py-2">
            <a href="https://www.linkedin.com/in/james-serez/" target="_blank"><svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            <a href="mailto:serez.james@gmail.com" target="_blank"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63 0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215 4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z"/></svg></a>
            <a href="https://github.com/JamesSerez" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg></a>
          </div>
          <p class="text-black font-medium">Designed & developed by James Serez.</p>
        </div>
      </div>
    </main>
  )
}

export default Fingo
