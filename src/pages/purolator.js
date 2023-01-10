import React from 'react'

const data = {
  title: "Purolator Support Desk",
  description: "This project is a self-initiated, custom designed and custom built prototype to fuel a full ground-up rebuild of Purolator’s Support Desk system.",
  banner: "../purolator_banner.png",
  resume: "../Resume.pdf",
  logo_white:"../logo_white.png",
  old:"../purolator/old.png",
  old_article:"../purolator/old_article.png",
  table:"../purolator/table.png",
  architecture:"../purolator/architecture.png",
  interac:"../purolator/interac.png",
  final_article:"../purolator/final_article.png",
  final_home:"../purolator/final_home.png",
  final_mobile:"../purolator/final_mobile.png",
  lofi_article:"../purolator/lofi_article.png",
  lofi_home:"../purolator/lofi_home.png",
  lofi_mobile:"../purolator/lofi_mobile.png",
  mefi_home:"../purolator/mefi_home.png",
  nav:"../purolator/nav.png",
  navcode:"../purolator/navcode.png",
  real_article:"../purolator/real_article.png",
  real_home:"../purolator/real_home.png",
  real_mobile:"../purolator/real_mobile.png",
  search:"../purolator/search.png",
  table:"../purolator/table.png"
}

const Purolator = () => {

  return (
    <main class="min-h-screen min-w-screen dark:bg-dark">
      <div class="h-14 bg-white dark:bg-dark w-screen flex flex-row justify-between items-center"> 
        <a href="/" class="font-semibold pl-16 flex flex-row items-center dark:text-white">
        &lt; Home
        </a>
        <img class="h-9 dark:hidden" src={data.logo_black} />
        <img class="h-9 hidden dark:block" src={data.logo_white} />
        <a href={data.resume} target="_blank" class="font-semibold pr-16 dark:text-white">Resume</a>
      </div>
      <img class="w-screen" src={data.banner}/>
      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-10 md:pt-16 lg:pt-18">
        <div class="flex flex-col px-3 md:px-1">
          <p class="font-semibold dark:text-white text-4xl pb-2">{data.title}</p>
          <p class="text-gray-600 dark:text-white">{data.description}</p>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 bg-white dark:bg-dark flex flex-row justify-between">
        <div class="flex flex-col">
          <p class="font-semibold dark:text-white">Team</p>
          <p class="whitespace-pre text-gray-600 dark:text-gray-300">{'UI/UX Designer (me)\nSoftware Developer (still me)\n2 Supporting Engineers\nVP of Product'}</p>
        </div>
        <div class="flex flex-col">
          <p class="font-semibold dark:text-white">Role</p>
          <p class="whitespace-pre text-gray-600 dark:text-gray-300">{'UX Research\nInteraction Design\nSoftware Engineering\nPrototyping'}</p>
          
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Tools</p>
            <p class="text-gray-600 dark:text-gray-300">Figma, HTML, CSS, JavaScript</p>
          </div>
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Duration</p>
            <p class="text-gray-600 dark:text-gray-300">May 2019 - July 2019</p>
          </div>
        </div>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="font-semibold dark:text-white text-4xl pb-2">Process</p>
          <div class="flex flex-row">
            <p class="font-semibold text-xl dark:text-gray-300">01.</p>
            <p class="text-xl pl-2 dark:text-gray-300">Identify the problem space</p>
          </div>
          <div class="flex flex-row">
            <p class="font-semibold text-xl dark:text-gray-300">02.</p>
            <p class="text-xl pl-2 dark:text-gray-300">Evaluate the current solution</p>
          </div>
          <div class="flex flex-row">
            <p class="font-semibold text-xl dark:text-gray-300">03.</p>
            <p class="text-xl pl-2 dark:text-gray-300">Design an improved solution</p>
          </div>
          <div class="flex flex-row">
            <p class="font-semibold text-xl dark:text-gray-300">04.</p>
            <p class="text-xl pl-2 dark:text-gray-300">Build a prototype</p>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <div class="flex flex row pt-2">
          <p class="font-semibold text-2xl dark:text-white">01.</p>
          <p class="text-2xl pl-2 dark:text-white">Identify the problem space</p>
        </div>
        <p class="text-gray-600 pb-2 dark:text-gray-300">Within my first week at Purolator, I decided I really didn’t like their current support desk. I’ll get more into my proper analysis of it in the next section, but a few short experiences with it trying to learn about key shipping terms and I realized their solution was insufficient. Here’s a sneak peak of what it was looking like:</p>
        <img class="w-full py-2" src={data.old}/>
        <p class="text-gray-600 dark:text-gray-300">You see what I mean? Purolator was on a mission to modernize their company and I knew this would have to be one of the first things to go. I began defining the project before proposing it to my manager.</p>
        <p class="text-purolator text-lg font-semibold pt-4">REQUIREMENTS</p>
        <p class="text-gray-600 pb-2 dark:text-gray-300">To make my case to my manager to take on this project, I created some requirements and constraints to demonstrate its reality and importance. Practice from previous co-ops and knowledge from my degree helped me craft these.</p>
        <div class="py-2 flex flex-row justify-between">
          <div class="text-gray-600 border border-2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-300"><p class="text-lg pb-2"><b>User Interface</b></p><p>Layout, sizing, styling and architecture all must be assessed and reconstructed accordingly to meet modern design standards and user expectations.</p></div>
          <div class="text-gray-600 border border-2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-300"><p class="text-lg pb-2"><b>User Experience</b></p><p>The journey the user takes to seek out desired information must be more efficient, attractive and effective to relieve support staff and retain users.</p></div>
        </div>
        <p class="text-purolator text-lg font-semibold pt-4">CONSTRAINTS</p>
        <p class="text-gray-600 dark:text-gray-300">At the time of this project I had pretty little knowledge of web development, so initial technical restraints were quite limited. Here are two relatively straightforward constraints I came up with before diving into the project.</p>
        <div class="py-2 flex flex-row justify-between">
          <div class="text-gray-600 w-1/2 border border-2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-300"><p class="text-lg pb-2"><b>Complexity</b></p><p>To satisfy the user’s need for quick information, the new support desk must load efficiently. Animations and aesthetic upgrades should be limited accordingly.</p></div>
          <div class="text-gray-600 w-1/2 border border-2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-300"><p class="text-lg pb-2"><b>Design System</b></p><p>Colouring must abide by the previously defined Purolator design system.</p><p class="font-bold text-puro_red">Purolator Red #F00000</p><p class="font-bold text-puro_blue">Purolator Blue #001996</p></div>
        </div>
        <p class="text-gray-600 dark:text-gray-300">I scheduled a meeting with my manager, proposed the project titled “ESO Support Desk Redesign”, and had it approved! Now came a proper assessment of the current solution.</p>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark_diff">
          <div class="flex flex row pt-2">
            <p class="font-semibold text-2xl dark:text-white">02.</p>
            <p class="text-2xl pl-2 dark:text-white">Evaluate the current solution</p>
          </div>
          <p class="text-gray-600 dark:text-gray-300">I completed a heuristic evaluation of Purolator’s support desk. This means to evaluate the solution against a set of design principles, including Norman’s Principles of Good Design (NPD), the 7 Principles of Universal Design (PUD), and Nielsen’s 10 Usability Heuristics (NUH).</p>
          <p class="text-purolator text-lg font-semibold pt-4">TOO MANY CHOICES</p>
          <img class="w-full py-2" src={data.old}/>
          <p class="text-gray-600 dark:text-gray-300">The user is presented with far too many options here. Without even considering the poor UI that makes it hard to distinguish between them, the sheer quantity of options completely halts the user in their search for information. This had to change.</p>
          <p class="text-purolator text-lg font-semibold pt-4">NAVIGATION</p>
          <img class="w-full py-2" src={data.old_article}/>
          <p class="text-gray-600 dark:text-gray-300">Aside from the very small text with minimal line spacing, a few more problems were found within the articles themselves. Potentially the biggest problem was navigation. After completing some internal testing, I found that most users clicked “Close” to navigate back to the Main Menu of articles, but instead it would close the entire support window. Navigation was going to need a serious rework.</p>
          <p class="text-purolator text-lg font-semibold pt-4">SUMMARY</p>
          <img class="w-full py-2" src={data.table}/>
          <p class="text-gray-600 dark:text-gray-300">The table above summarizes the ways in which the current Support Desk violates standard design principles. These flaws would be the focus of my redesign.</p>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <div class="flex flex row pt-2">
          <p class="font-semibold text-2xl dark:text-white">03.</p>
          <p class="text-2xl pl-2 dark:text-white">Design an improved solution</p>
        </div>
        <p class="text-purolator text-lg font-semibold pt-4">NEW ARCHITECTURE</p>
        <p class="text-gray-600 pb-2 dark:text-gray-300">Through simple observation of the current solution, I realized the support desk could gain greatly from sorting articles into buckets. Groups of articles shared common themes, such as Profile- or Address Book-related articles. I came up with the 9 following categories:</p>
        <img class="w-full py-2" src={data.architecture}/>
        <p class="text-gray-600 dark:text-gray-300">By creating these 9 general categories, I hoped that I could streamline the user’s experience and ease the problem of having to decide between too many options.</p>
        <p class="text-purolator text-lg font-semibold pt-4">TOOLKIT SELECTION</p>
        <div class="py-2 flex flex-row justify-between">
          <div class="text-gray-600 w-1/2 border border-2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-300"><p class="text-lg pb-2"><b>Figma</b></p><p>It’s been my primary platform for design work in the past, it’s highly accessible, and it allows for easy collaboration.</p></div>
          <div class="text-gray-600 w-1/2 border border-2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-300"><p class="text-lg pb-2"><b>Bootstrap Responsive Framework</b></p><p>I needed something simple, straightforward and responsive to build my prototype. I also wanted to ensure both Web and Mobile needs would be met.</p></div>
        </div>
        <p class="text-purolator text-lg font-semibold pt-4">COMPETITIVE RESEARCH</p>
        <p class="text-gray-600 pb-2 dark:text-gray-300">Always a necessary step in my design process! Sometimes you don’t need to invent the wheel, you just need to build the best wheel. I explored a few different platforms, one of which was Interac’s website. I loved their expand-condense method to relay information:</p>
        <img class="w-full py-2" src={data.interac}/>
        <p class="text-purolator text-lg font-semibold pt-4">LOW-FIDELITY MOCKUPS</p>
        <p class="text-gray-600 pb-2 dark:text-gray-300">To allow for quick iteration and exploration, I started building some low-fidelity mockups in Figma. I would frequently present my mockups to developers and product owners within the company to get their opinion. As I continued to iterate, I landed on these designs:</p>
        <img class="w-full py-2" src={data.lofi_home}/>
        <p class="text-gray-600 dark:text-gray-300"><b>Cards:</b> Competitive research taught me that cards are trendy and effective. Icons, when used correctly, are an effective way for users to quickly identify what each category entails.</p>
        <p class="text-gray-600 dark:text-gray-300"><b>Search Bar:</b> I also included a search bar at the top since one of the most frequent pieces of feedback from user testing was that a support desk <i>needs</i> a search bar.</p>
        <img class="w-full py-2" src={data.lofi_article}/>
        <p class="text-gray-600 dark:text-gray-300"><b>Font size:</b> Larger text! The previous solution had small, bold text that very poor visibility.</p>
        <p class="text-gray-600 dark:text-gray-300"><b>Expandable articles:</b> Now that multiple articles are contained in each category, I knew the users would want an efficient way to flip between them. Each articles is easily expanded and condensed based on the needs of the user.</p>
        <img class="w-full py-2" src={data.lofi_mobile}/>
        <p class="text-gray-600 dark:text-gray-300"><b>Mobile build:</b> For quick info, users often turn to their phones. Our support desk should be mobile friendly so that users can access information as fast as possible.</p>
        <p class="text-purolator text-lg font-semibold pt-4">MEDUIM-FIDELITY COLOURING TEST</p>
        <p class="text-gray-600 pb-2 dark:text-gray-300">I decided it wasn’t worth putting hours and hours into developing high fidelity mockups of my prototype since I knew my main goal was proof of concept. If my prototype were approved, then would begin the fine-tuning to match Purolator’s new feel.</p>
        <p class="text-gray-600 pb-2 dark:text-gray-300">However, I did want to get a clear idea of how I would style my prototype. I whipped up some medium fidelity designs to test colours, shadowing and iconography. Here’s a sample:</p>
        <img class="w-full py-2" src={data.mefi_home}/>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark_diff">
          <div class="flex flex row pt-2">
            <p class="font-semibold text-2xl dark:text-white">04.</p>
            <p class="text-2xl pl-2 dark:text-white">Build the prototype</p>
          </div>
          <p class="text-purolator text-lg font-semibold pt-4">OVERVIEW</p>
          <div class="flex flex-col justify-between border border-2 rounded-lg">
            <div class="flex flex-row">
              <div class="text-gray-600 rounded-lg m-4 pt-4 px-4 w-2/3">
                <p class="font-semibold dark:text-white pb-2">Objective</p>
                <p class="text-gray-600 dark:text-white">To develop a functional prototype that enhances the user experience of Purolator’s support desk.  If approved, this prototype will be transferred to the development team as a model for the support desk rebuild.</p>
              </div>
              <div class="text-gray-600 rounded-lg m-4 drop-shadow-md pt-4 px-4 w-1/3">
                <p class="font-semibold dark:text-white pb-2">Tech Stack</p>
                <p class="text-gray-600 dark:text-white">HTML</p>
                <p class="text-gray-600 dark:text-white">CSS3</p>
                <p class="text-gray-600 dark:text-white">JavaScript</p>
                <p class="text-gray-600 dark:text-white">Bootstrap Framework</p>
              </div>
            </div>
            <div class="flex flex-col m-4 pb-4 px-4">
              <p class="font-semibold dark:text-white pb-2">Validation</p>
              <p class="text-gray-600 dark:text-white">Success will be determined via internal user testing. Users will be asked to complete short tasks on each platform, qualitative comparisons will be recorded.</p>
            </div>
          </div>
          <p class="text-purolator text-lg font-semibold pt-4">NAVBAR</p>
          <p class="text-gray-600 pb-2 dark:text-gray-300">The heuristic evaluation discussed in section 2 revealed that the navigation of the support desk desperately needed to be updated.</p>
          <img class="w-full py-2" src={data.navcode}/>
          <p class="text-gray-600 pb-2 dark:text-gray-300">Above is a snippet of the code I wrote to structure the navbar shown below. Bootstrap made development efficient and ensured responsive design when switching between mobile and web.</p>
          <img class="w-full py-2" src={data.nav}/>
          <p class="text-purolator text-lg font-semibold pt-4">SEARCH FUNCTION</p>
          <p class="text-gray-600 pb-2 dark:text-gray-300">Users <i>needed</i> the ability to search. One doesn’t typically enter a support desk to browse, but instead find very specific information that they need as soon as possible. With a search bar, I hoped to streamline the user experience.</p>
          <img class="w-full py-2" src={data.search}/>
          <p class="text-purolator text-lg font-semibold pt-4">HOME PAGE</p>
          <p class="text-gray-600 pb-2 dark:text-gray-300">Now with cards, large icons and categories, the home page has been revamped to ease the decision process for the user. What was once 30+ tiny text titles is now 9, large, easily distinguishable options. I’ll spare sharing the code in this article, but here’s an image of the final build:</p>
          <img class="w-full py-2" src={data.final_home}/>
          <p class="text-purolator text-lg font-semibold pt-4">ARTICLES</p>
          <p class="text-gray-600 pb-2 dark:text-gray-300">Within the category, a user can click to expand individual articles. Pulling from competitive research, this layout is efficient and intuitive. I added the option for quick navigation between different categories in the navbar to reduce clicks from the user. Here’s what I created:</p>
          <img class="w-full py-2" src={data.final_article}/>
          <p class="text-purolator text-lg font-semibold pt-4">MOBILE</p>
          <p class="text-gray-600 pb-2 dark:text-gray-300">Bootstrap’s responsive nature was helpful, but it still took some fine-tuning to finish up the mobile builds. Industry standard UI elements were used, such as the hamburger menu in navbar.</p>
          <img class="w-full py-2" src={data.final_mobile}/>
          <p class="text-purolator text-lg font-semibold pt-4">VALIDATION</p>
          <p class="text-gray-600 pb-2 dark:text-gray-300">Internal testing was completed with 3 software developers, a fellow co-op, a product owners, and the director of product at Purolator. Qualitative observations all highlighted that the redesign was more efficient, attractive and effective. Support articles were found faster, UI approvals were much higher, and users didn’t get confused in the process.</p>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <div class="flex flex row pt-2">
          <p class="font-semibold text-2xl dark:text-white">Appx.</p>
          <p class="text-2xl pl-2 dark:text-white">Comparison with Purolator's current support desk</p>
        </div>
        <p class="text-gray-600 pb-2 dark:text-gray-300">The prototype was approved by the director of product. I handed off my prototype at the end of my co-op term. A few months later, I checked back on Purolator’s live site and was pleasantly surprised to see their support section was modeled off my prototype.</p>
        <p class="text-purolator text-lg font-semibold pt-4">HOME PAGE</p>
        <img class="w-full py-2" src={data.real_home}/>
        <p class="text-gray-600 pb-2 dark:text-gray-300">Observe the large cards, Purolator Blue text, and a few select categories.</p>
        <p class="text-purolator text-lg font-semibold pt-4">ARTICLES</p>
        <img class="w-full py-2" src={data.real_article}/>
        <p class="text-gray-600 pb-2 dark:text-gray-300">Observe the stacked articles and click-to-expand functionality with plus/minus icons.</p>
        <p class="text-purolator text-lg font-semibold pt-4">MOBILE</p>
        <img class="w-full py-2" src={data.real_mobile}/>
        <p class="text-gray-600 pb-2 dark:text-gray-300">Observe the responsive design modeled directly off of my prototype.</p>
      </div>
    </main>
  )
}

export default Purolator
