import React from 'react'

const data = {
  title: "Manulife Developer Site",
  description: "developer.manulife.ca is Manulife's first engineering outreach web platform, aiming to generate awareness about engineering at Manulife. The site was launched in July 2020. I drove product strategy, design, and refinement for this project.",
  banner: "../manulife/manulife_banner.png",
  resume:"../Resume.pdf",
  survey: "../manulife/manulife_survey.png",
  persona: "../manulife/manulife_persona.png",
  competitors: "../manulife/manulife_competitors.png",
  map: "../manulife/manulife_map.png",
  flows: "../manulife/manulife_flows.png",
  wireframe: "../manulife/manulife_wireframe.png",
  colours: "../manulife/manulife_colours.png",
  typography: "../manulife/manulife_typography.png",
  landing: "../manulife/manulife_landing.png",
  about: "../manulife/manulife_about.png",
  interns: "../manulife/manulife_interns.png",
  events: "../manulife/manulife_events.png",
  blogs: "../manulife/manulife_blogs.png",
  logo_black: '../logo.png',
  logo_white: '../logo_white.png'
}

const Manulife = () => {

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
          <p class="font-semibold dark:text-white text-4xl pb-2">{data.title}</p>
          <p class="text-gray-600 dark:text-gray-100">{data.description}</p>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 bg-white dark:bg-dark flex flex-row justify-between">
        <div class="flex flex-col">
          <p class="font-semibold dark:text-white">Team</p>
          <p class="whitespace-pre text-gray-600 dark:text-gray-100">{'2 UX Design Co-ops\n2 UI/UX Design Mentors\nProduct Owner\nMarketing Officer\n3 Web Developers'}</p>
        </div>
        <div class="flex flex-col">
          <p class="font-semibold dark:text-white">Role</p>
          <p class="whitespace-pre text-gray-600 dark:text-gray-100">{'Needs Analysis\nArchitecture Design\nInteraction Design\nProduct Thinking'}</p>
          
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Tools</p>
            <p class="text-gray-600 dark:text-gray-100">Sketch, Figma, Axure, HTML</p>
          </div>
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Duration</p>
            <p class="text-gray-600 dark:text-gray-100">January 2020 - April 2020</p>
          </div>
        </div>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="font-semibold dark:text-white text-4xl pb-2">Process</p>
          <div class="flex flex-row">
            <p class="font-semibold text-xl dark:text-gray-100">01.</p>
            <p class="text-xl pl-2 dark:text-gray-100">Understand the problem space</p>
          </div>
          <div class="flex flex-row">
            <p class="font-semibold text-xl dark:text-gray-100">02.</p>
            <p class="text-xl pl-2 dark:text-gray-100">Develop a strategy</p>
          </div>
          <div class="flex flex-row">
            <p class="font-semibold text-xl dark:text-gray-100">03.</p>
            <p class="text-xl pl-2 dark:text-gray-100">Design a solution</p>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <div class="flex flex row pt-2">
          <p class="font-semibold text-2xl dark:text-white">01.</p>
          <p class="text-2xl pl-2 dark:text-white">Understand the problem space</p>
        </div>
        <p class="text-manulife text-lg font-semibold pt-4">BACKGROUND</p>
        <p class="text-gray-600 font-semibold dark:text-white">Problem</p>
        <p class="text-gray-600 pb-2 dark:text-gray-100">Post-secondary students avoid applying for Manulife’s internship/co-op program and full-time positions due to the image they have of the ‘old’ Manulife.</p>
        <p class="text-gray-600 font-semibold dark:text-white">Goal</p>
        <p class="text-gray-600 dark:text-gray-100">The site should provide the necessary information about the technology and culture that exists in the Engineering departments at Manulife. This will be done with the hopes of having a more positive influence on potential co-op studnets or new grads who are deciding whether Manulife will be the next stop in their careers.</p>
        <p class="text-manulife text-lg font-semibold pt-4">STAKEHOLDER OBJECTIVES</p>
        <div class="flex flex-row">
            <p class="text-gray-600 text-3xl dark:text-white">1.</p>
            <p class="text-gray-600 pl-7 dark:text-gray-100">Solution must attract new and young talent by revealing how Manulife is keeping up with technology trends.</p>
          </div>
          <div class="flex flex-row">
            <p class="text-gray-600 text-3xl dark:text-white">2.</p>
            <p class="text-gray-600 pl-5 dark:text-gray-100">Solution must be low maintenance. The site will be low priority in terms of development effort.</p>
          </div>
          <div class="flex flex-row">
            <p class="text-gray-600 text-3xl dark:text-white">3.</p>
            <p class="text-gray-600 pl-5 dark:text-gray-100">Solution should display content in a way that is easy to understand at a glance. We wish to minimize the amount of page jumping users must perform to get the information they came for.</p>
          </div>
          <p class="text-manulife text-lg font-semibold pt-4">PRIMARY RESEARCH</p>
          <p class="text-gray-600 dark:text-gray-100">When I arrived at Manulife, the problem I’d be working to solve was already defined for me by the product owner and some AVPs. My first goal was to understand the problem space better and validate it however I could.</p>
          <p class="text-gray-600 dark:text-gray-100">We generated and sent a survey out to 38 designers and developers of various skill levels <b>to better understand who we are designing for</b>. We also conducted 5 in-person interviews to gain further insight into the current perspective our target users have of tech jobs at financial companies. Here’s a summary that we presented to stakeholders:</p>
      </div>
      
      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 flex justify-center">
          <img class="w-3/5" src={data.survey}/>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <p class="text-gray-600 dark:text-gray-100">I was able to pinpoint the top 3 reasons why users don’t apply to engineering positions at companies in the financial industry:</p>
        <p class="text-gray-600 whitespace-pre pl-10 dark:text-gray-100">{'1. Lack of innovation/inflexible\n2. Boring\n3. Corporate Environment'}</p>
        <p class="text-gray-600 dark:text-gray-100">These will be helpful in identifying where we can stand out in the industry with how we communicate to our users.</p>
        <p class="text-manulife text-lg font-semibold pt-4">ANALYZING CURRENT USER INTERACTIONS</p>
        <p class="text-gray-600 dark:text-gray-100">I decided to <b>investigate the current flow</b> users would take to apply for an internship at Manulife, given that it’ll be a primary function of our solution. From the flow walkthrough and user interviews completed earlier, myself and the fellow co-op identified 3 key pain points users are facing:</p>
        <div class="py-2 flex flex-row justify-between">
          <div class="text-gray-600 border border-2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-100">It takes <b>too long</b> to find relevant job position information online</div>
          <div class="text-gray-600 border border-2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-100">There are <b>too many</b> different engineering positions</div>
          <div class="text-gray-600 border border-2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-100">There's <b>no information</b> about Manulife Engineering and its culture</div>
        </div>
        <p class="text-gray-600 dark:text-gray-100">With all we’ve learned so far, we chose to create 3 personas that represent a spectrum of users we’ll be designing our solution for. Here is one of the three personas, modelling an eager first year student who is wanting a position that’ll broaden his range of technical skills:</p>
        <div class="py-2 flex justify-center">
          <img class="w-3/4" src={data.persona} />
        </div>
        <p class="text-manulife  font-semibold pt-4">COMPETITIVE ANALYSIS</p>
        <p class="text-gray-600 dark:text-gray-100">Now that we have a greater understanding of our users, time to understand our competitors. How do other companies attract students? What content are companies presenting on their careers pages? What components should we introduce? These were some of the questions we were considering.</p>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 flex justify-center">
          <img class="w-full py-2" src={data.competitors}/>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <p class="text-gray-600 dark:text-gray-100">Plenty was learned from this, including ideas to shorten our banners so users land on more content-loaded pages, to introduce plenty of graphics and visuals for easy consumption, and to be sure not to introduce too much nested navigation.</p>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <div class="flex flex row pt-2">
          <p class="font-semibold text-2xl dark:text-white">02.</p>
          <p class="text-2xl pl-2 dark:text-white">Develop a strategy</p>
        </div>
        <p class="text-gray-600 dark:text-gray-100">We spent the first few weeks learning about our users and filling out our problem space. With that stage completed, now came the time to strategize a solution. With our knowledge gained from user interviews and competitive research, we met with the product owner, a Marketing Officer and other Manulife employees to brainstorm the content for the site.</p>
        <p class="text-manulife text-lg font-semibold pt-4">SITE MAP</p>
        <p class="text-gray-600 dark:text-gray-100">Considering what users said, what stood out to us most with competitors, and what Manulife is requiring for the site, we developed the following site map:</p>
        <img class="w-full py-2" src={data.map} />
        <p class="text-gray-600 dark:text-gray-100">To help us stay aligned with stakeholders thorughout the design process, I set up weekly check-in meetings and introduced Agile concepts such as sprints, sprint planning and stand-ups.</p>
        <p class="text-manulife text-lg font-semibold pt-4">USER FLOWS</p>
        <p class="text-gray-600 dark:text-gray-100">We created user flows for some of the interactions we expect on our site. These were developed to help shape the designs we’ll create in the next stage of the process. Here’s an example of one of the flows we made, provided by my fellow design co-op:</p>
        <img class="w-full py-2" src={data.flows} />
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-2 md:pt-4 lg:pt-8 lg:pb-3 space-y-3 bg-white dark:bg-dark">
        <div class="flex flex row pt-2">
          <p class="font-semibold text-2xl dark:text-white">03.</p>
          <p class="text-2xl pl-2 dark:text-white">Design a solution</p>
        </div>
        <p class="text-manulife text-lg font-semibold pt-4">WIREFRAMING AND A/B TESTING</p>
        <p class="text-gray-600 dark:text-gray-100">I used Axure RP to create low-fidelity wireframes of the different pages that make up the solution. Low-fidelity mockups let us test the layout and flow of our site and redesign accordingly before investing too much design effort.</p>
        <img class="w-full py-2" src={data.wireframe} />
        <p class="text-gray-600 dark:text-gray-100">We created a test plan with open ended questions and conducted 8 tests on our designs. Users were presented with two versions of each page (A and B), such as the two featured above, and asked to provide feedback on all aspects.</p>
        <p class="text-gray-600 dark:text-gray-100">Here's a look at some of the <b>key findings:</b></p>
        <div class="grid grid-cols-2 gap-4">
          <div class="text-gray-600 border border-2 rounded-lg m-1 drop-shadow-md p-4 dark:text-gray-100"><b>4/8</b> users <b>couldn’t identify</b> what differentiates Manulife’s co-op experience from other companies</div>
          <div class="text-gray-600 border border-2 rounded-lg m-1 drop-shadow-md p-4 dark:text-gray-100"><b>6/8</b> users looked for information about projects and tools under the FAQ section</div>
          <div class="text-gray-600 border border-2 rounded-lg m-1 drop-shadow-md p-4 dark:text-gray-100"><b>5/8</b> users appreciated the content about co-op before seeing the job openings</div>
          <div class="text-gray-600 border border-2 rounded-lg m-1 drop-shadow-md p-4 dark:text-gray-100"><b>8/8</b> users found the job-opening table’s filtering options <b>intuitive and helpful</b></div>
        </div>
        <p class="text-gray-600 dark:text-gray-100">These findings revealed the need for layout and content changes which we presented to our product owner. We continued to iterate on the wireframes before pushing to high-fidelity design.</p>
        <p class="text-manulife text-lg font-semibold pt-4">DESIGN GUIDELINES</p>
        <p class="text-gray-600 dark:text-gray-100">Using Manulife Canada’s design system, we created a style guide for the website to ensure that all visual design remains consistent across the platform.</p>
        <p class="text-gray-600 font-semibold pt-2 dark:text-white">Colours</p>
        <img class="w-full py-2" src={data.colours} />
        <p class="text-gray-600 font-semibold pt-2 dark:text-white">Typography</p>
        <img class="w-full py-2" src={data.typography} />
        <p class="text-manulife text-lg font-semibold pt-8">FINAL SOLUTION</p>
        <p class="text-gray-600 dark:text-gray-100">Using Sketch, we began to developing high-fidelity versions of the 5 unique pages within the platform. As we added to and modified each page, we continued to meet with stakeholders to realign and ensure we were on target with our designs.</p>
        <p class="text-gray-600 font-semibold pt-4 dark:text-white">Landing</p>
        <p class="text-gray-600 dark:text-gray-100">We promote metrics to advertise the internship program at Manulife then lead directly into quotes bragging about the experience’s users could have. The coloured, offset squares were inspired by competitive analysis into modern tech companies like Shopify.</p>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-4 space-y-3 flex justify-center">
          <img class="w-full" src={data.landing}/>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-2 md:pt-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <p class="text-gray-600 font-semibold pt-4 dark:text-white">About Us</p>
        <p class="text-gray-600 dark:text-gray-100">This page gives the user a quick glance at Manulife’s culture. A timeline was implemented to show readers that Manulife has come a long way technically in the last few years. The timeline is static to meet developer needs and was proven to be meaningful to users in the quick tests we did.</p>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 flex justify-center">
          <img class="w-full" src={data.about}/>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-2 md:pt-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <p class="text-gray-600 font-semibold pt-4 dark:text-white">Internships</p>
        <p class="text-gray-600 dark:text-gray-100">Here students will see what the internship program will entail. We highlight the community and innovative experiences an intern will encouter at Manulife to meet the needs we identified through surveys and interviews. We also provide a table listing Manulife’s openings for quick application.</p>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-2 md:pt-4 lg:pt-8 space-y-3 flex justify-center">
          <img class="w-full" src={data.interns}/>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-2 md:pt-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <p class="text-gray-600 font-semibold pt-4 dark:text-white">Events</p>
        <p class="text-gray-600 dark:text-gray-100">An updated list of community and internal events that are available for interns at Manulife. We introduced anchor links to provide options for users to efficiently navigate to specific sections within the page.</p>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 flex justify-center">
          <img class="w-full" src={data.events}/>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-2 md:pt-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <p class="text-gray-600 font-semibold pt-4 dark:text-white">Blogs</p>
        <p class="text-gray-600 dark:text-gray-100">Here we provide users with blogs to read-up about personal stories from working at Manulife. Design challenges for this page included the design of the cards themselves and the new filtering-by-tag system</p>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 flex justify-center">
          <img class="w-full" src={data.blogs}/>
        </div>
        <div class="flex justify-center pt-4 pb-8">
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            <a href="https://www.figma.com/proto/DHA6gO4QqWUZcUDASH6nsg/Vysio-Prototype?node-id=1%3A845&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A845" target="_blank">Check out the site!</a>
          </button>
        </div>
      </div>

      <div class="w-full bg-manulife dark:bg-manulife">
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

export default Manulife
