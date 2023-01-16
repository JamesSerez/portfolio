import React from 'react'

const data = {
  title: "Vysio",
  description: "Vysio is a product that sets out to reimagine physiotherapy rehabilitation through enhanced tracking, new communication pathways and comprehensive analytics.",
  banner: "../vysio/vysio_banner.png",
  resume: "../Resume.pdf",
  poster: "../vysio/Vysio Poster.png",
  dashboard: "../vysio/dashboard.gif",
  plan_creation: "../vysio/plan-creation.gif",
  session_review: "../vysio/session-review.gif",
  mobile_home: "../vysio/home.png",
  mobile_session_prep: "../vysio/session_prep.png",
  mobile_session: "../vysio/session.png",
  mobile_notes: "../vysio/notes.png",
  mobile_summary: "../vysio/summary.png",
  logo_white: '../logo_white.png',
  brainstorming:"../vysio/brainstorming.png",
  user_flow:"../vysio/user_flow.png",
  sketches:"../vysio/sketches.png"
}

const Vysio = () => {

  return (
    <main class="min-h-screen min-w-screen dark:bg-dark">
      <div class="h-14 bg-white dark:bg-dark w-screen flex flex-row justify-between items-center"> 
        <a href="/" class="font-semibold dark:text-white pl-16 flex flex-row items-center">
        &lt; Home
        </a>
        <img class="h-9 dark:hidden" src={data.logo_black} />
        <img class="h-9 hidden dark:block" src={data.logo_white} />
        <a href={data.resume} target="_blank" class="font-semibold dark:text-white pr-16">Resume</a>
      </div>
      <img class="w-screen" src={data.banner} />
      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-10 md:pt-16 lg:pt-18">
        <div class="flex flex-col px-3 md:px-1">
          <div class="flex flex-row justify-between pb-6">
            <p class="font-semibold dark:text-white text-4xl pb-2">{data.title}</p>
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
              <a href="https://www.figma.com/proto/DHA6gO4QqWUZcUDASH6nsg/Vysio-Prototype?node-id=1%3A845&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A845" target="_blank">Try Prototype</a>
            </button>
          </div>
          <p class="text-gray-600 dark:text-gray-300">{data.description}</p>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 bg-white dark:bg-dark flex flex-row justify-between">
        <div class="flex flex-col">
          <p class="font-semibold dark:text-white">Team</p>
          <p class="whitespace-pre text-gray-600 dark:text-gray-300">{'Product Designer (me)\n2 Full Stack Developers\nML Engineer'}</p>
        </div>
        <div class="flex flex-col">
          <p class="font-semibold dark:text-white">Role</p>
          <p class="whitespace-pre text-gray-600 dark:text-gray-300">{'Product Direction\nInteraction Design\nUser Testing\nPrototyping'}</p>
          
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Tools</p>
            <p class="text-gray-600 dark:text-gray-300">Figma, Notion, TailwindCSS</p>
          </div>
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Duration</p>
            <p class="text-gray-600 dark:text-gray-300">September 2021 - May 2022</p>
          </div>
        </div>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="font-semibold dark:text-white text-4xl pb-2">Project Overview</p>
          <p class="text-gray-600 dark:text-white pb-2">Check out the informational poster I created to summarize our project, followed by a video I wrote, shot and edited!</p>
          <img class="pb-6" src={data.poster}/>
          <div class="aspect-w-16 aspect-h-9">
            <iframe src="https://www.youtube.com/embed/GaZqT9mZeto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <p class="font-semibold dark:text-white text-4xl pb-2">Solution</p>
        <p class="text-gray-600 dark:text-white">We made some extra work for ourselves by deciding our solution should consist of a web application, an iOS app and an Arduino wearable that feeds data into an ML model. Check out how users interact with these components:</p>
        <div class="py-2 flex flex-row justify-between">
          <div class="text-gray-600 rounded-lg m-4 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F5BB57" class="w-20 h-20 pb-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
            <p class="font-semibold dark:text-white pb-2">For the practitioner</p>
            <p class="text-gray-600 dark:text-white">Web app to create, assign, and monitor the completion of at-home exercise plans.</p>
          </div>
          <div class="text-gray-600 rounded-lg m-4 drop-shadow-md p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F5BB57" class="w-20 h-20 pb-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <p class="font-semibold dark:text-white pb-2">For the client</p>
            <p class="text-gray-600 dark:text-white">Mobile app to record their at-home exercise sessions and provide notes to their practitioner. Clients wear an arduino wearable so that their exercises can be recorded and classified.</p>
          </div>
        </div>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
        <p class="font-semibold text-vysio text-lg pb-2">WEB APPLICATION</p>
          <div class="pb-8">
            <p class="font-semibold text-gray-500 dark:text-white text-2xl pb-4">Client Dashboard</p>
            <img class="border-8" src={data.dashboard}></img>
            <p class="pt-4 text-gray-600 dark:text-white">Working in partnership with local Physiotherapists, we identified a handful of key information that they might find valuable when reviewing their clients. This screen allows them to explore any exercise plans they’ve assigned, recent sessions the client has completed and a monthly heatmap showing their completion rate.</p>
          </div>
          <div class="pb-8">
            <p class="font-semibold text-gray-500 dark:text-white text-2xl pb-4">Plan Creation</p>
            <img class="border-8" src={data.plan_creation}></img>
            <p class="pt-4 text-gray-600 dark:text-white">Here is where practitioners can create and assign exercise plans for their clients to complete throughout the week/month. I collected inspiration through existing physiotherapy, note-taking and data management applications. Practitioners can set the frequency for plans, custom-select a series of exercises and add individual notes.</p>
          </div>
          <div class="pb-8">
            <p class="font-semibold text-gray-500 dark:text-white text-2xl pb-4">Session Review</p>
            <img class="border-8" src={data.session_review}></img>
            <p class="pt-4 text-gray-600 dark:text-white">After clients complete an exercise session with our smartphone application and wearable device, the practitioner is then presented back with the data. They can review any notes recorded by the client and record both public and private notes of their own.</p>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <p class="font-semibold text-vysio text-lg">MOBILE APPLICATION</p>
        <p class="pt-2 pb-4 text-gray-600 dark:text-white">We designed and built a mobile application to accompany our web-app. Take a look at some screenshots demonstrating the flow from selecting an exercise routine to completing the routine to recording notes to reviewing your progress.</p>
        <div class="flex mb-4">
          <div class="w-1/5 px-2 h-auto">
            <img class="" src={data.mobile_home}></img>
          </div>
          <div class="w-1/5 px-2 h-auto">
            <img class="" src={data.mobile_session_prep}></img>
          </div>
          <div class="w-1/5 px-2 h-auto">
            <img class="" src={data.mobile_session}></img>
          </div>
          <div class="w-1/5 px-2 h-auto">
            <img class="" src={data.mobile_notes}></img>
          </div>
          <div class="w-1/5 px-2 h-auto">
            <img class="" src={data.mobile_summary}></img>
          </div>
        </div>
      </div>

      

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="font-semibold dark:text-white text-4xl pb-2">Design Process</p>
          <p class="text-gray-600 dark:text-white">Let's take a quick look at some of the design processes and activities I performed for this project. Given that I was the sole designer and product owner, I had to initiate and lead each stage of the process. I pulled inspiration from course work, previous co-ops and online resources to determine our workflow.</p>
          <p class="font-semibold text-gray-500 dark:text-white text-2xl pt-4">Design Activities</p>
          <p class="font-semibold text-vysio text-lg">BRAINSTORMING</p>          
          <p class="text-gray-600 dark:text-gray-300"><b>Purpose:</b> to explore multiple design option and gain a high level view of the product we hope to produce. This is a key step in creating the architecture of a product.</p>
          <p class="text-gray-600 dark:text-gray-300"><b>Takeaway:</b> the app will have be both web and mobile components. General content for different platforms explored and outlined.</p>
          <p class="text-gray-600 dark:text-gray-300">Below is a screenshot of the brainstorming my team completed on FigJam. Click to see the image full size.</p>
          <a href={data.brainstorming} target="_blank"><img class="pt-4 transition duration-500 ease-in-out transform hover:scale-105" src={data.brainstorming}></img></a>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <p class="font-semibold text-vysio text-lg">USER FLOWS</p>          
        <p class="text-gray-600 dark:text-gray-300"><b>Purpose:</b> to design an intuitive product that presents users with the correct information at the right time and minimizes steps to complete tasks.</p>
        <p class="text-gray-600 dark:text-gray-300"><b>Takeaway:</b> helped us feel out the structure of our product further. Plenty of design choices were decided on:</p>
        <ul class="pl-8 list-disc text-gray-600 dark:text-gray-300"><li>dedicated dashboards per user</li><li>either Patients tab or Patient search bar to minimize work for web user</li><li>use notifications to direct physiotherapists</li><li>session view for physiotherapists to review specific sessions</li><li>and many more!</li></ul>
        <p class="text-gray-600 dark:text-gray-300">Below is a snippet of some of the user flows I created. I built them in Figma then had my team review them. Click to see the image full size.</p>
        <a href={data.user_flow} target="_blank"><img class="pt-4 transition duration-500 ease-in-out transform hover:scale-105" src={data.user_flow}></img></a>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="font-semibold text-vysio text-lg">UI SKETCHES</p>          
          <p class="text-gray-600 dark:text-gray-300"><b>Purpose:</b> rapid idea exploration. Now that we know our general application architecture, time to start brainstorming feature design. We challenged ourselves to do 3 designs per feature idea within 10 minutes to make sure we explored our options.</p>
          <p class="text-gray-600 dark:text-gray-300"><b>Takeaway:</b> general UI design for select features.</p>
          <p class="text-gray-600 dark:text-gray-300">Below is a look at some of my sketches for two different feature ideas. We explored 6 different features in total. Click to see the image full size.</p>
          <a href={data.sketches} target="_blank"><img class="pt-4 transition duration-500 ease-in-out transform hover:scale-105" src={data.sketches}></img></a>
        </div>
      </div>
    </main>
  )
}

export default Vysio
