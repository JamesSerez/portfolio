import React from 'react'

const data = {
  title: "Vysio",
  description: "Vysio is a product that sets out to reimagine physiotherapy rehabilitation through enhanced tracking, new communication pathways and comprehensive analytics.",
  banner: "../vysio/vysio_banner.png",
  resume: "../Resume.pdf",
  dashboard: "../vysio/dashboard.gif",
  plan_creation: "../vysio/plan-creation.gif",
  session_review: "../vysio/session-review.gif",
  mobile_home: "../vysio/home.png",
  mobile_session_prep: "../vysio/session_prep.png",
  mobile_session: "../vysio/session.png",
  mobile_notes: "../vysio/notes.png",
  mobile_summary: "../vysio/summary.png",
  logo_white: '../logo_white.png',
  logo_black: "../logo_black.png",
  brainstorming:"../vysio/brainstorming.png",
  user_flow:"../vysio/user_flow.png",
  sketches:"../vysio/sketches.png",
  competitive:"../vysio/competitive.png",
  user_testing_script:"../vysio/user_testing_script.png",
  test_results:"../vysio/test_results.png",
  lofi_web:"../vysio/lofi_web.jpg",
  lofi_mobile:"../vysio/lofi_mobile.jpg",
  job_board:"../vysio/job_board.png",
  meeting_minutes:"../vysio/meeting_minutes.png",
  poster1:"../vysio/poster.png"
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
          <p class="text-gray-600 dark:text-gray-100">{data.description}</p>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 bg-white dark:bg-dark flex flex-row justify-between">
        <div class="flex flex-col">
          <p class="font-semibold dark:text-white">Team</p>
          <p class="whitespace-pre text-gray-600 dark:text-gray-200">{'Product Designer (me)\n2 Full Stack Developers\nML Engineer'}</p>
        </div>
        <div class="flex flex-col">
          <p class="font-semibold dark:text-white">Role</p>
          <p class="whitespace-pre text-gray-600 dark:text-gray-200">{'Product Direction\nInteraction Design\nUser Testing\nPrototyping'}</p>
          
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Tools</p>
            <p class="text-gray-600 dark:text-gray-200">Figma, Notion, TailwindCSS</p>
          </div>
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Duration</p>
            <p class="text-gray-600 dark:text-gray-200">September 2021 - May 2022</p>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pb-2 md:pb-4 lg:pb-8 bg-white dark:bg-dark">
        <p class="font-semibold text-vysio text-lg pb-2">SHORTCUTS</p>
        <div class="flex flex-row justify-between">
          
            <button class="dark:bg-dark_diff bg-gray-100 hover:bg-blue-400 text-gray-600 dark:text-white font-bold py-2 px-4 rounded drop-shadow-md">
              <a href="#overview">Project Overview</a>
            </button>
          
            <button class="dark:bg-dark_diff bg-gray-100 hover:bg-blue-400 text-gray-600 dark:text-white font-bold py-2 px-4 rounded drop-shadow-md">
              <a href="#solution">Solution</a>
            </button>
          
            <button class="dark:bg-dark_diff bg-gray-100 hover:bg-blue-400 text-gray-600 dark:text-white font-bold py-2 px-4 rounded drop-shadow-md">
              <a href="#process">Design Process</a>
            </button>
          
            <button class="dark:bg-dark_diff bg-gray-100 hover:bg-blue-400 text-gray-600 dark:text-white font-bold py-2 px-4 rounded drop-shadow-md">
              <a href="">Project Management</a>
            </button>
        </div>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff" id="overview">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="font-semibold dark:text-white text-4xl pb-2">Project Overview</p>
          <p class="font-semibold text-vysio text-lg pb-2">MISSION STATEMENT</p>
          <div class="flex justify-center py-4">
            <p class="w-3/4 border border-2 rounded-lg px-4 pt-4 pb-4 text-center text-gray-600 dark:text-gray-100 pb-2">Vysio seeks to <b>improve data visibility</b> and <b>communication</b> between practitioners and clients, leading to <b>improved client outcomes</b>.</p>
          </div>
          <p class="font-semibold text-vysio text-lg">MEDIA</p>
          <p class="text-gray-600 dark:text-gray-100 pb-2">Check out the informational poster I created to summarize our project (click to enlarge), followed by a video I wrote, shot and edited!</p>
          <a href={data.poster1} target="_blank"><img class="pt-4 scale-95 transition duration-500 ease-in-out transform hover:scale-100" src={data.poster1}></img></a>
          <div class="aspect-w-16 aspect-h-9">
            <iframe src="https://www.youtube.com/embed/GaZqT9mZeto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark" id="solution">
        <p class="font-semibold dark:text-white text-4xl pb-2">Solution</p>
        <p class="text-gray-600 dark:text-gray-100">We made some extra work for ourselves by deciding our solution should consist of a web application, an iOS app and an Arduino wearable that feeds data into an ML model. Check out how users interact with these components:</p>
        <div class="py-2 flex flex-row justify-between">
          <div class="text-gray-600 rounded-lg m-4 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F5BB57" class="w-20 h-20 pb-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
            <p class="font-semibold dark:text-gray-100 pb-2">For the practitioner</p>
            <p class="text-gray-600 dark:text-gray-100">Web app to create, assign, and monitor the completion of at-home exercise plans.</p>
          </div>
          <div class="text-gray-600 rounded-lg m-4 drop-shadow-md p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F5BB57" class="w-20 h-20 pb-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <p class="font-semibold dark:text-gray-100 pb-2">For the client</p>
            <p class="text-gray-600 dark:text-gray-100">Mobile app to record their at-home exercise sessions and provide notes to their practitioner. Clients wear an arduino wearable so that their exercises can be recorded and classified.</p>
          </div>
        </div>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
        <p class="font-semibold text-vysio text-lg pb-2">WEB APPLICATION</p>
          <div class="pb-8">
            <p class="font-semibold text-gray-500 dark:text-white text-2xl pb-4">Client Dashboard</p>
            <img class="border-8" src={data.dashboard}></img>
            <p class="pt-4 text-gray-600 dark:text-gray-100">Working in partnership with local Physiotherapists, we identified a handful of key information that they might find valuable when reviewing their clients. This screen allows them to explore any exercise plans they’ve assigned, recent sessions the client has completed and a monthly heatmap showing their completion rate.</p>
          </div>
          <div class="pb-8">
            <p class="font-semibold text-gray-500 dark:text-white text-2xl pb-4">Plan Creation</p>
            <img class="border-8" src={data.plan_creation}></img>
            <p class="pt-4 text-gray-600 dark:text-gray-100">Here is where practitioners can create and assign exercise plans for their clients to complete throughout the week/month. I collected inspiration through existing physiotherapy, note-taking and data management applications. Practitioners can set the frequency for plans, custom-select a series of exercises and add individual notes.</p>
          </div>
          <div class="pb-8">
            <p class="font-semibold text-gray-500 dark:text-white text-2xl pb-4">Session Review</p>
            <img class="border-8" src={data.session_review}></img>
            <p class="pt-4 text-gray-600 dark:text-gray-100">After clients complete an exercise session with our smartphone application and wearable device, the practitioner is then presented back with the data. They can review any notes recorded by the client and record both public and private notes of their own.</p>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <p class="font-semibold text-vysio text-lg">MOBILE APPLICATION</p>
        <p class="pt-2 pb-4 text-gray-600 dark:text-gray-100">We designed and built a mobile application to accompany our web-app. Take a look at some screenshots demonstrating the flow from selecting an exercise routine to completing the routine to recording notes to reviewing your progress.</p>
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

      

      <div class="w-full bg-gray-100 dark:bg-dark_diff" id="process">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="font-semibold dark:text-white text-4xl pb-2">Design Process</p>
          <p class="text-gray-600 dark:text-gray-100">I initiated and lead each stage of the design process for Vysio, pulling inspiration from course work, previous co-ops and online resources to determine our workflow.</p>
          <p class="font-semibold text-vysio text-lg">BRAINSTORMING</p>          
          <p class="text-gray-600 dark:text-gray-100"><b>Purpose:</b> to explore multiple design option and gain a high level view of the product we hope to produce. This is a key step in creating the architecture of a product.</p>
          <p class="text-gray-600 dark:text-gray-100"><b>Takeaway:</b> the app will have be both web and mobile components. General content for different platforms explored and outlined.</p>
          <p class="text-gray-600 dark:text-gray-100">Below is a screenshot of the brainstorming my team completed on FigJam. Click to see the image full size.</p>
          <a href={data.brainstorming} target="_blank"><img class="pt-4 scale-95 transition duration-500 ease-in-out transform hover:scale-100" src={data.brainstorming}></img></a>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <p class="font-semibold text-vysio text-lg">COMPETITIVE RESEARCH</p>          
        <p class="text-gray-600 dark:text-gray-100"><b>Purpose:</b> to gain inspiration from what's out there already. We're hoping to find ways people have solved smaller components of our problem already.</p>
        <p class="text-gray-600 dark:text-gray-100"><b>Takeaway:</b> plenty of ideas for the dashboard, user lists, navigation and mobile components.</p>
        <p class="text-gray-600 dark:text-gray-100">Take a look at a portion of some competitive research I completed. I tend to take a mood board approach, compiling similar screens and components together. Click to see the image full size.</p>
        <a href={data.sketches} target="_blank"><img class="pt-4 scale-95 transition duration-500 ease-in-out transform hover:scale-100" src={data.competitive}></img></a>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="font-semibold text-vysio text-lg">USER FLOWS</p>          
          <p class="text-gray-600 dark:text-gray-100"><b>Purpose:</b> to design an intuitive product that presents users with the correct information at the right time and minimizes steps to complete tasks.</p>
          <p class="text-gray-600 dark:text-gray-100"><b>Takeaway:</b> helped us feel out the structure of our product further. Plenty of design choices were decided on:</p>
          <ul class="pl-8 list-disc text-gray-600 dark:text-gray-100"><li>dedicated dashboards per user</li><li>either Patients tab or Patient search bar to minimize work for web user</li><li>use notifications to direct physiotherapists</li><li>session view for physiotherapists to review specific sessions</li><li>and many more!</li></ul>
          <p class="text-gray-600 dark:text-gray-100">Below is a snippet of some of the user flows I created. I built them in Figma then had my team review them. Click to see the image full size.</p>
          <a href={data.user_flow} target="_blank"><img class="pt-4 scale-95 transition duration-500 ease-in-out transform hover:scale-100" src={data.user_flow}></img></a>

        
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">

        <p class="font-semibold text-vysio text-lg">UI SKETCHES</p>          
        <p class="text-gray-600 dark:text-gray-100"><b>Purpose:</b> rapid idea exploration. Now that we know our general application architecture, time to start brainstorming feature design. We challenged ourselves to do 3 designs per feature idea within 10 minutes to make sure we explored our options.</p>
        <p class="text-gray-600 dark:text-gray-100"><b>Takeaway:</b> general UI design for select features.</p>
        <p class="text-gray-600 dark:text-gray-100">Below is a look at some of my sketches for two different feature ideas. We explored 6 different features in total. Click to see the image full size.</p>
        <a href={data.sketches} target="_blank"><img class="pt-4 scale-95 transition duration-500 ease-in-out transform hover:scale-100" src={data.sketches}></img></a>         
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="font-semibold text-vysio text-lg">LOW FIDELITY MOCKUPS</p>          
          <p class="text-gray-600 dark:text-gray-100"><b>Purpose:</b> to quickly test out a handful of design ideas for different features & screens.</p>
          <p class="text-gray-600 dark:text-gray-100"><b>Takeaway:</b> layout decisions made, feature structure decided upon.</p>
          <p class="text-gray-600 dark:text-gray-100">Check out example lofi sketches I created for both the mobile and web applications (click either to see full image):</p>
          <div class="flex flew-col mb-4">
            <a href={data.lofi_web} target="_blank">
              <div class="px-2 h-auto pt-4 transition duration-500 ease-in-out transform hover:scale-105">
                <img class="" src={data.lofi_web}></img>
              </div>
            </a>
            <a href={data.lofi_mobile} target="_blank">
              <div class="px-2 h-auto pt-4 transition duration-500 ease-in-out transform hover:scale-105">
                <img class="" src={data.lofi_mobile}></img>
              </div>
            </a>
          </div> 
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <p class="font-semibold text-vysio text-lg">USER TESTING</p>          
        <p class="text-gray-600 dark:text-gray-100"><b>Purpose:</b> to empathize with my users and identify strengths and weaknesses in my solution.</p>
        <p class="text-gray-600 dark:text-gray-100"><b>Takeaway:</b> layout decisions made, feature structure decided upon.</p>
        <p class="text-gray-600 dark:text-gray-100">I performed user testing throughout the duration of this project. Sometimes it was live interviews over Zoom where I screen-shared my prototype, sometimes it was sending out screens of my solution with a questionnaire. I tested on industry professionals for the web app and physio attendees for mobile. Here is a snippet of my testing script for the final prototype:</p>
        <a href={data.user_flow} target="_blank"><img class="pt-4 scale-95 transition duration-500 ease-in-out transform hover:scale-100" src={data.user_testing_script}></img></a>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="font-semibold text-vysio text-lg">TESTING RESULTS</p>          
          <p class="text-gray-600 dark:text-gray-100"><b>Purpose:</b> to convert both user and stakeholder feedback into actionable items to advance our solution.</p>
          <p class="text-gray-600 dark:text-gray-100"><b>Takeaway:</b> outlined in the image below, we learned out dashboard was pretty useless and that notifications were <b>required</b> if we wanted physiotherapists to even open the app.</p>
          <p class="text-gray-600 dark:text-gray-100">I prepared this graphic below as part of a proposal to my group for where we should dedicate our development effort:</p>
          <a href={data.user_flow} target="_blank"><img class="pt-4 scale-95 transition duration-500 ease-in-out transform hover:scale-100" src={data.test_results}></img></a>
        </div>
      </div>
    
      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
          <p class="font-semibold dark:text-white text-4xl pb-2">Project Management</p>
          <p class="text-gray-600 dark:text-gray-100">Without any boss or manager, any and all project management was left to us. We selected <b>Notion</b> as our base for all information management and progress tracking.</p>
          <p class="font-semibold text-vysio text-lg">JOB BOARD</p>
          <a href={data.job_board} target="_blank"><img class="pt-4 scale-95 transition duration-500 ease-in-out transform hover:scale-100" src={data.job_board}></img></a>
          <p class="text-gray-600 dark:text-gray-100">I crafted this job board within Notion to help track our progress. Tickets would be created, categorized based on priority and type, and assigned to individuals. We found this incredibly helpful for monitoring our workflow and effectively allocating development resources.</p>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="font-semibold text-vysio text-lg">WEEKLY SYNC-UPS</p>          
          <a href={data.meeting_minutes} target="_blank"><img class="pt-4 scale-95 transition duration-500 ease-in-out transform hover:scale-100" src={data.meeting_minutes}></img></a>
          <p class="text-gray-600 dark:text-gray-100">We scheduled weekly meetings with our advisor for the project, as well as group meetings 3 times a week. Touching base often prevents delays from blockers and helped us keep the project moving forward. Notice above how each meeting we'd discuss blockers and action items.</p>
        </div>
      </div>

      <div class="w-full bg-vysio">
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

export default Vysio
