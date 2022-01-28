import React from 'react'

const data = {
  title: "Manulife Developer Site",
  description: "developer.manulife.ca is Manulife's first engineering outreach web platform, aiming to generate awareness about engineering at Manulife. The site was launched in July 2020. I drove product strategy, design, and refinement for this project.",
  banner: "../manulife_banner.png",
  resume:"../Resume.pdf",
  survey: "../manulife_survey.png",
  persona: "../manulife_persona.png",
  competitors: "../manulife_competitors.png",
  map: "../manulife_map.png",
  flows: "../manulife_flows.png",
  wireframe: "../manulife_wireframe.png",
  colours: "../manulife_colours.png",
  typography: "../manulife_typography.png",
  landing: "../manulife_landing.png",
  about: "../manulife_about.png",
  interns: "../manulife_interns.png",
  events: "../manulife_events.png",
  blogs: "../manulife_blogs.png"
}

const Manulife = () => {

  return (
    <main class="min-h-screen min-w-screen dark:bg-black">
      <div class="h-14 bg-white w-screen flex flex-row justify-between items-center"> 
        <a href="/" class="font-semibold pl-16 flex flex-row items-center">
          Home
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
          <p class="whitespace-pre text-gray-600">{'2 UX Design Co-ops\n2 UI/UX Design Mentors\nProduct Owner\nMarketing Officer\n3 Web Developers'}</p>
        </div>
        <div class="flex flex-col">
          <p class="font-semibold">Role</p>
          <p class="whitespace-pre text-gray-600">{'Needs Analysis\nArchitecture Design\nInteraction Design\nProduct Thinking'}</p>
          
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col">
            <p class="font-semibold">Tools</p>
            <p class="text-gray-600">Sketch, Figma, Axure, HTML</p>
          </div>
          <div class="flex flex-col">
            <p class="font-semibold">Duration</p>
            <p class="text-gray-600">January 2020 - April 2020</p>
          </div>
        </div>
      </div>

      <div class="w-full bg-gray-100">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="font-semibold dark:text-white text-4xl pb-2">Process</p>
          <div class="flex flex-row">
            <p class="font-semibold text-xl">01.</p>
            <p class="text-xl pl-2">Understand the problem space</p>
          </div>
          <div class="flex flex-row">
            <p class="font-semibold text-xl">02.</p>
            <p class="text-xl pl-2">Develop a strategy</p>
          </div>
          <div class="flex flex-row">
            <p class="font-semibold text-xl">03.</p>
            <p class="text-xl pl-2">Design a solution</p>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white">
        <div class="flex flex row pt-2">
          <p class="font-semibold text-2xl">01.</p>
          <p class="text-2xl pl-2">Understand the problem space</p>
        </div>
        <p class="text-manulife text-lg pt-4">BACKGROUND</p>
        <p class="text-gray-600 font-semibold">Problem</p>
        <p class="text-gray-600 pb-2">Post-secondary students avoid applying for Manulife’s internship/co-op program and full-time positions due to the image they have of the ‘old’ Manulife.</p>
        <p class="text-gray-600 font-semibold">Goal</p>
        <p class="text-gray-600">The site should provide the necessary information about the technology and culture that exists in the Engineering departments at Manulife. This will be done with the hopes of having a more positive influence on potential co-op studnets or new grads who are deciding whether Manulife will be the next stop in their careers.</p>
        <p class="text-manulife text-lg pt-4">STAKEHOLDER OBJECTIVES</p>
        <div class="flex flex-row">
            <p class="text-gray-600 text-3xl">1.</p>
            <p class="text-gray-600 pl-7">Solution must attract new and young talent by revealing how Manulife is keeping up with technology trends.</p>
          </div>
          <div class="flex flex-row">
            <p class="text-gray-600 text-3xl">2.</p>
            <p class="text-gray-600 pl-5">Solution must be low maintenance. The site will be low priority in terms of development effort.</p>
          </div>
          <div class="flex flex-row">
            <p class="text-gray-600 text-3xl">3.</p>
            <p class="text-gray-600 pl-5">Solution should display content in a way that is easy to understand at a glance. We wish to minimize the amount of page jumping users must perform to get the information they came for.</p>
          </div>
          <p class="text-manulife text-lg pt-4">PRIMARY RESEARCH</p>
          <p class="text-gray-600">When I arrived at Manulife, the problem I’d be working to solve was already defined for me by the product owner and some AVPs. My first goal was to understand the problem space better and validate it however I could.</p>
          <p class="text-gray-600">We generated and sent a survey out to 38 designers and developers of various skill levels <b>to better understand who we are designing for</b>. We also conducted 5 in-person interviews to gain further insight into the current perspective our target users have of tech jobs at financial companies. Here’s a summary that we presented to stakeholders:</p>
      </div>
      
      <div class="w-full bg-gray-100">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 flex justify-center">
          <img class="w-3/5" src={data.survey}/>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white">
        <p class="text-gray-600">I was able to pinpoint the top 3 reasons why users don’t apply to engineering positions at companies in the financial industry:</p>
        <p class="text-gray-600 whitespace-pre pl-10">{'1. Lack of innovation/inflexible\n2. Boring\n3. Corporate Environment'}</p>
        <p class="text-gray-600">These will be helpful in identifying where we can stand out in the industry with how we communicate to our users.</p>
        <p class="text-manulife text-lg pt-4">ANALYZING CURRENT USER INTERACTIONS</p>
        <p class="text-gray-600">I decided to <b>investigate the current flow</b> users would take to apply for an internship at Manulife, given that it’ll be a primary function of our solution. From the flow walkthrough and user interviews completed earlier, myself and the fellow co-op identified 3 key pain points users are facing:</p>
        <div class="py-2 flex flex-row justify-between">
          <div class="text-gray-600 border border-2 rounded-lg m-4 drop-shadow-md p-4">It takes <b>too long</b> to find relevant job position information online</div>
          <div class="text-gray-600 border border-2 rounded-lg m-4 drop-shadow-md p-4">There are <b>too many</b> different engineering positions</div>
          <div class="text-gray-600 border border-2 rounded-lg m-4 drop-shadow-md p-4">There's <b>no information</b> about Manulife Engineering and its culture</div>
        </div>
        <p class="text-gray-600">With all we’ve learned so far, we chose to create 3 personas that represent a spectrum of users we’ll be designing our solution for. Here is one of the three personas, modelling an eager first year student who is wanting a position that’ll broaden his range of technical skills:</p>
        <div class="py-2 flex justify-center">
          <img class="w-3/4" src={data.persona} />
        </div>
        <p class="text-manulife text-lg pt-4">COMPETITIVE ANALYSIS</p>
        <p class="text-gray-600">Now that we have a greater understanding of our users, time to understand our competitors. How do other companies attract students? What content are companies presenting on their careers pages? What components should we introduce? These were some of the questions we were considering.</p>
      </div>

      <div class="w-full bg-gray-100">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 flex justify-center">
          <img class="w-full py-2" src={data.competitors}/>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white">
        <p class="text-gray-600">Plenty was learned from this, including ideas to shorten our banners so users land on more content-loaded pages, to introduce plenty of graphics and visuals for easy consumption, and to be sure not to introduce too much nested navigation.</p>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white">
        <div class="flex flex row pt-2">
          <p class="font-semibold text-2xl">02.</p>
          <p class="text-2xl pl-2">Develop a strategy</p>
        </div>
        <p class="text-gray-600">We spent the first few weeks learning about our users and filling out our problem space. With that stage completed, now came the time to strategize a solution. With our knowledge gained from user interviews and competitive research, we met with the product owner, a Marketing Officer and other Manulife employees to brainstorm the content for the site.</p>
        <p class="text-manulife text-lg pt-4">SITE MAP</p>
        <p class="text-gray-600">Considering what users said, what stood out to us most with competitors, and what Manulife is requiring for the site, we developed the following site map:</p>
        <img class="w-full py-2" src={data.map} />
        <p class="text-gray-600">To help us stay aligned with stakeholders thorughout the design process, I set up weekly check-in meetings and introduced Agile concepts such as sprints, sprint planning and stand-ups.</p>
        <p class="text-manulife text-lg pt-4">USER FLOWS</p>
        <p class="text-gray-600">We created user flows for some of the interactions we expect on our site. These were developed to help shape the designs we’ll create in the next stage of the process. Here’s an example of one of the flows we made, provided by my fellow design co-op:</p>
        <img class="w-full py-2" src={data.flows} />
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-2 md:pt-4 lg:pt-8 lg:pb-3 space-y-3 bg-white">
        <div class="flex flex row pt-2">
          <p class="font-semibold text-2xl">03.</p>
          <p class="text-2xl pl-2">Design a solution</p>
        </div>
        <p class="text-manulife text-lg pt-4">WIREFRAMING AND A/B TESTING</p>
        <p class="text-gray-600">I used Axure RP to create low-fidelity wireframes of the different pages that make up the solution. Low-fidelity mockups let us test the layout and flow of our site and redesign accordingly before investing too much design effort.</p>
        <img class="w-full py-2" src={data.wireframe} />
        <p class="text-gray-600">We created a test plan with open ended questions and conducted 8 tests on our designs. Users were presented with two versions of each page (A and B), such as the two featured above, and asked to provide feedback on all aspects.</p>
        <p class="text-gray-600">Here's a look at some of the <b>key findings:</b></p>
        <div class="grid grid-cols-2 gap-4">
          <div class="text-gray-600 border border-2 rounded-lg m-1 drop-shadow-md p-4"><b>4/8</b> users <b>couldn’t identify</b> what differentiates Manulife’s co-op experience from other companies</div>
          <div class="text-gray-600 border border-2 rounded-lg m-1 drop-shadow-md p-4"><b>6/8</b> users looked for information about projects and tools under the FAQ section</div>
          <div class="text-gray-600 border border-2 rounded-lg m-1 drop-shadow-md p-4"><b>5/8</b> users appreciated the content about co-op before seeing the job openings</div>
          <div class="text-gray-600 border border-2 rounded-lg m-1 drop-shadow-md p-4"><b>8/8</b> users found the job-opening table’s filtering options <b>intuitive and helpful</b></div>
        </div>
        <p class="text-gray-600">These findings revealed the need for layout and content changes which we presented to our product owner. We continued to iterate on the wireframes before pushing to high-fidelity design.</p>
        <p class="text-manulife text-lg pt-4">DESIGN GUIDELINES</p>
        <p class="text-gray-600">Using Manulife Canada’s design system, we created a style guide for the website to ensure that all visual design remains consistent across the platform.</p>
        <p class="text-gray-600 font-semibold pt-2">Colours</p>
        <img class="w-full py-2" src={data.colours} />
        <p class="text-gray-600 font-semibold pt-2">Typography</p>
        <img class="w-full py-2" src={data.typography} />
        <p class="text-manulife text-lg pt-8">FINAL SOLUTION</p>
        <p class="text-gray-600">Using Sketch, we began to developing high-fidelity versions of the 5 unique pages within the platform. As we added to and modified each page, we continued to meet with stakeholders to realign and ensure we were on target with our designs.</p>
        <p class="text-gray-600 font-semibold pt-4">Landing</p>
        <p class="text-gray-600">We promote metrics to advertise the internship program at Manulife then lead directly into quotes bragging about the experience’s users could have. The coloured, offset squares were inspired by competitive analysis into modern tech companies like Shopify.</p>
      </div>

      <div class="w-full bg-gray-100">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-4 space-y-3 flex justify-center">
          <img class="w-full" src={data.landing}/>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-2 md:pt-4 lg:pt-8 lg:pb-3 space-y-3 bg-white">
        <p class="text-gray-600 font-semibold pt-4">About Us</p>
        <p class="text-gray-600">This page gives the user a quick glance at Manulife’s culture. A timeline was implemented to show readers that Manulife has come a long way technically in the last few years. The timeline is static to meet developer needs and was proven to be meaningful to users in the quick tests we did.</p>
      </div>

      <div class="w-full bg-gray-100">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 flex justify-center">
          <img class="w-full" src={data.about}/>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-2 md:pt-4 lg:pt-8 lg:pb-3 space-y-3 bg-white">
        <p class="text-gray-600 font-semibold pt-4">Internships</p>
        <p class="text-gray-600">Here students will see what the internship program will entail. We highlight the community and innovative experiences an intern will encouter at Manulife to meet the needs we identified through surveys and interviews. We also provide a table listing Manulife’s openings for quick application.</p>
      </div>

      <div class="w-full bg-gray-100">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-2 md:pt-4 lg:pt-8 space-y-3 flex justify-center">
          <img class="w-full" src={data.interns}/>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-2 md:pt-4 lg:pt-8 lg:pb-3 space-y-3 bg-white">
        <p class="text-gray-600 font-semibold pt-4">Events</p>
        <p class="text-gray-600">An updated list of community and internal events that are available for interns at Manulife. We introduced anchor links to provide options for users to efficiently navigate to specific sections within the page.</p>
      </div>

      <div class="w-full bg-gray-100">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 flex justify-center">
          <img class="w-full" src={data.events}/>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-2 md:pt-4 lg:pt-8 lg:pb-3 space-y-3 bg-white">
        <p class="text-gray-600 font-semibold pt-4">Blogs</p>
        <p class="text-gray-600">Here we provide users with blogs to read-up about personal stories from working at Manulife. Design challenges for this page included the design of the cards themselves and the new filtering-by-tag system</p>
      </div>

      <div class="w-full bg-gray-100">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 flex justify-center">
          <img class="w-full" src={data.blogs}/>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-6 md:py-10 lg:py-16 space-y-3 bg-white">
        <div class="flex justify-center">
          <p class="font-semibold text-gray-600">Check out the live site <a href="https://www.developer.manulife.ca" target="_blank" class="text-blue-500 font-semibold">here</a>!</p>
        </div>
      </div>
    </main>
  )
}

export default Manulife
