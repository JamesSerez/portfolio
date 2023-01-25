import React from 'react'

const data = {
  title: "Purolator Support Desk",
  description: "This project is a self-initiated, custom designed and custom built prototype to fuel a full ground-up rebuild of Purolator’s Support Desk system.",
  banner: "../purolator_banner.png",
  resume: "../Resume.pdf",
  logo_white:"../logo_white.png",
  logo_black: "../logo_black.png",
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
  table:"../purolator/table.png",
  timeline_dark:"../purolator/timeline_dark.svg",
  timeline_light:"../purolator/timeline_light.svg",
  wireframe:"../purolator/wireframe.png"
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
          <p class="text-gray-600 dark:text-gray-100">{data.description}</p>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 pt-2 md:pt-4 lg:pt-8 bg-white dark:bg-dark flex flex-row justify-between">
        <div class="flex flex-col">
          <p class="font-semibold dark:text-white">Team</p>
          <p class="whitespace-pre text-gray-600 dark:text-gray-100">{'UI/UX Designer (me)\nSoftware Developer (still me)\n2 Supporting Engineers\nVP of Product'}</p>
        </div>
        <div class="flex flex-col">
          <p class="font-semibold dark:text-white">Role</p>
          <p class="whitespace-pre text-gray-600 dark:text-gray-100">{'UX Research\nInteraction Design\nSoftware Engineering\nPrototyping'}</p>
          
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Tools</p>
            <p class="text-gray-600 dark:text-gray-100">Figma, HTML, CSS, JavaScript</p>
          </div>
          <div class="flex flex-col">
            <p class="font-semibold dark:text-white">Duration</p>
            <p class="text-gray-600 dark:text-gray-100">May 2019 - July 2019</p>
          </div>
        </div>
      </div>
      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 bg-white dark:bg-dark">
        <p class="font-semibold dark:text-white">Timeline</p>
        <img class="w-full dark:hidden" src={data.timeline_light} />
        <img class="w-full hidden dark:block" src={data.timeline_dark} />
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3">
          <p class="font-semibold dark:text-white text-4xl pb-2">Process</p>
          <div class="flex flex-row">
            <p class="font-semibold text-xl dark:text-gray-100">01.</p>
            <p class="text-xl pl-2 dark:text-gray-100">Identify the problem space</p>
          </div>
          <div class="flex flex-row">
            <p class="font-semibold text-xl dark:text-gray-100">02.</p>
            <p class="text-xl pl-2 dark:text-gray-100">Evaluate the current solution</p>
          </div>
          <div class="flex flex-row">
            <p class="font-semibold text-xl dark:text-gray-100">03.</p>
            <p class="text-xl pl-2 dark:text-gray-100">Design an improved solution</p>
          </div>
          <div class="flex flex-row">
            <p class="font-semibold text-xl dark:text-gray-100">04.</p>
            <p class="text-xl pl-2 dark:text-gray-100">Build a prototype</p>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <div class="flex flex row pt-2">
          <p class="font-semibold text-2xl dark:text-white">01.</p>
          <p class="text-2xl pl-2 dark:text-white">Identify the problem space</p>
        </div>
        <p class="text-gray-600 pb-2 dark:text-gray-100">Within my first week at Purolator, I decided I really didn’t like their current support desk. I’ll get more into my proper analysis of it in the next section, but a few short experiences with it trying to learn about key shipping terms and I realized their solution was insufficient. Here’s a sneak peak of what it was looking like:</p>
        <img class="w-full py-2" src={data.old}/>
        <p class="text-gray-600 dark:text-gray-100">You see what I mean? Purolator was on a mission to modernize their company and I knew this would have to be one of the first things to go. I began defining the project before proposing it to my manager.</p>
        <p class="text-purolator text-lg font-semibold pt-4">REQUIREMENTS</p>
        <p class="text-gray-600 pb-2 dark:text-gray-100">To make my case to my manager to take on this project, I created some requirements and constraints to demonstrate its reality and importance. Practice from previous co-ops and knowledge from my degree helped me craft these.</p>
        <div class="py-2 flex flex-row justify-between">
          <div class="text-gray-600 border border-2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-100"><p class="text-lg pb-2"><b>User Interface</b></p><p>Layout, sizing, styling and architecture all must be assessed and reconstructed accordingly to meet modern design standards and user expectations.</p></div>
          <div class="text-gray-600 border border-2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-100"><p class="text-lg pb-2"><b>User Experience</b></p><p>The journey the user takes to seek out desired information must be more efficient, attractive and effective to relieve support staff and retain users.</p></div>
        </div>
        <p class="text-purolator text-lg font-semibold pt-4">CONSTRAINTS</p>
        <p class="text-gray-600 dark:text-gray-100">At the time of this project I had pretty little knowledge of web development, so initial technical restraints were quite limited. Here are two relatively straightforward constraints I came up with before diving into the project.</p>
        <div class="py-2 flex flex-row justify-between">
          <div class="text-gray-600 w-1/2 border border-2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-100"><p class="text-lg pb-2"><b>Complexity</b></p><p>To satisfy the user’s need for quick information, the new support desk must load efficiently. Animations and aesthetic upgrades should be limited accordingly.</p></div>
          <div class="text-gray-600 w-1/2 border border-2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-100"><p class="text-lg pb-2"><b>Design System</b></p><p>Colouring must abide by the previously defined Purolator design system.</p><p class="font-bold text-puro_red">Purolator Red #F00000</p><p class="font-bold text-puro_blue">Purolator Blue #001996</p></div>
        </div>
        <p class="text-gray-600 dark:text-gray-100">I scheduled a meeting with my manager, proposed the project titled “ESO Support Desk Redesign”, and had it approved! Now came a proper assessment of the current solution.</p>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-gray-100 dark:bg-dark_diff">
          <div class="flex flex row pt-2">
            <p class="font-semibold text-2xl dark:text-white">02.</p>
            <p class="text-2xl pl-2 dark:text-white">Evaluate the current solution</p>
          </div>
          <p class="text-gray-600 dark:text-gray-100">I completed a heuristic evaluation of Purolator’s support desk. This means to evaluate the solution against a set of design principles, including Norman’s Principles of Good Design (NPD), the 7 Principles of Universal Design (PUD), and Nielsen’s 10 Usability Heuristics (NUH).</p>
          <p class="text-purolator text-lg font-semibold pt-4">TOO MANY CHOICES</p>
          <img class="w-full py-2" src={data.old}/>
          <p class="text-gray-600 dark:text-gray-100">The user is presented with far too many options here. Without even considering the poor UI that makes it hard to distinguish between them, the sheer quantity of options completely halts the user in their search for information. This had to change.</p>
          <p class="text-purolator text-lg font-semibold pt-4">NAVIGATION</p>
          <img class="w-full py-2" src={data.old_article}/>
          <p class="text-gray-600 dark:text-gray-100">Aside from the very small text with minimal line spacing, a few more problems were found within the articles themselves. Potentially the biggest problem was navigation. After completing some internal testing, I found that most users clicked “Close” to navigate back to the Main Menu of articles, but instead it would close the entire support window. Navigation was going to need a serious rework.</p>
          <p class="text-purolator text-lg font-semibold pt-4">SUMMARY</p>
          <img class="w-full py-2" src={data.table}/>
          <p class="text-gray-600 dark:text-gray-100">The table above summarizes the ways in which the current Support Desk violates standard design principles. These flaws would be the focus of my redesign.</p>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <div class="flex flex row pt-2">
          <p class="font-semibold text-2xl dark:text-white">03.</p>
          <p class="text-2xl pl-2 dark:text-white">Design an improved solution</p>
        </div>
        <p class="text-purolator text-lg font-semibold pt-4">NEW ARCHITECTURE</p>
        <p class="text-gray-600 pb-2 dark:text-gray-100">Through simple observation of the current solution, I realized the support desk could gain greatly from sorting articles into buckets. Groups of articles shared common themes, such as Profile- or Address Book-related articles. I came up with the 9 following categories:</p>
        <img class="w-full py-2" src={data.architecture}/>
        <p class="text-gray-600 dark:text-gray-100">By creating these 9 general categories, I hoped that I could streamline the user’s experience and ease the problem of having to decide between too many options.</p>
        <p class="text-purolator text-lg font-semibold pt-4">TOOLKIT SELECTION</p>
        <div class="py-2 flex flex-row justify-between">
          <div class="text-gray-600 w-1/2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-100"><p class="text-lg pb-2"><b>Figma</b></p><p>It’s been my primary platform for design work in the past, it’s highly accessible, and it allows for easy collaboration.</p></div>
          <div class="text-gray-600 w-1/2 rounded-lg m-4 drop-shadow-md p-4 dark:text-gray-100"><p class="text-lg pb-2"><b>Bootstrap Responsive Framework</b></p><p>I needed something simple, straightforward and responsive to build my prototype. I also wanted to ensure both Web and Mobile needs would be met.</p></div>
        </div>
        <p class="text-purolator text-lg font-semibold pt-4">COMPETITIVE RESEARCH</p>
        <p class="text-gray-600 pb-2 dark:text-gray-100">Always a necessary step in my design process! Sometimes you don’t need to invent the wheel, you just need to build the best wheel. I explored a few different platforms, one of which was Interac’s website. I loved their expand-condense method to relay information:</p>
        <div class="flex justify-center">
          <img class="w-2/3 py-2" src={data.interac}/>
        </div>
        <p class="text-purolator text-lg font-semibold pt-4">LOW-FIDELITY MOCKUPS</p>
        <p class="text-gray-600 pb-2 dark:text-gray-100">To allow for quick iteration and exploration, I started building some low-fidelity mockups in Figma. I would frequently present my mockups to developers and product owners within the company to get their opinion. As I continued to iterate, I landed on these designs:</p>
        <div class="flex justify-center">
          <img class="w-5/6 py-2" src={data.lofi_home}/>
        </div>
        <p class="text-gray-600 dark:text-gray-100"><b>Cards:</b> Competitive research taught me that cards are trendy and effective. Icons, when used correctly, are an effective way for users to quickly identify what each category entails.</p>
        <p class="text-gray-600 dark:text-gray-100"><b>Search Bar:</b> I also included a search bar at the top since one of the most frequent pieces of feedback from user testing was that a support desk <i>needs</i> a search bar.</p>
        <div class="flex justify-center">
          <img class="w-5/6 py-2" src={data.lofi_article}/>
        </div>
        <p class="text-gray-600 dark:text-gray-100"><b>Font size:</b> Larger text! The previous solution had small, bold text that very poor visibility.</p>
        <p class="text-gray-600 dark:text-gray-100"><b>Expandable articles:</b> Now that multiple articles are contained in each category, I knew the users would want an efficient way to flip between them. Each articles is easily expanded and condensed based on the needs of the user.</p>
        <div class="flex justify-center">
          <img class="py-2" src={data.lofi_mobile}/>
        </div>
        <p class="text-gray-600 dark:text-gray-100"><b>Mobile build:</b> For quick info, users often turn to their phones. Our support desk should be mobile friendly so that users can access information as fast as possible.</p>
        <p class="text-purolator text-lg font-semibold pt-4">MEDUIM-FIDELITY COLOURING TEST</p>
        <p class="text-gray-600 pb-2 dark:text-gray-100">Since my main goal was to create a proof of concept, it didn't make sense to put hours and hours into developing high fidelity mockups of my prototype. If my prototype were approved, then would begin the fine-tuning to match Purolator’s new feel.</p>
        <p class="text-gray-600 pb-2 dark:text-gray-100">However, I did want to get a clear idea of how I would style my prototype. I whipped up some medium fidelity designs to test colours, shadowing and iconography. Here’s a sample:</p>
        <div class="flex justify-center">
          <img class="w-5/6 py-2" src={data.mefi_home}/>
        </div>
      </div>

      <div class="w-full bg-gray-100 dark:bg-dark_diff">
        <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-gray-100 dark:bg-dark_diff">
          <div class="flex flex row pt-2">
            <p class="font-semibold text-2xl dark:text-white">04.</p>
            <p class="text-2xl pl-2 dark:text-white">Build the prototype</p>
          </div>
          <p class="text-purolator text-lg font-semibold pt-4">OVERVIEW</p>
          <div class="flex flex-col justify-between border border-2 rounded-lg">
            <div class="flex flex-row">
              <div class="text-gray-600 rounded-lg m-4 pt-4 px-4 w-2/3">
                <p class="font-semibold dark:text-white pb-2">Objective</p>
                <p class="text-gray-600 dark:text-gray-100">To develop a functional prototype that enhances the user experience of Purolator’s support desk.  If approved, this prototype will be transferred to the development team as a model for the support desk rebuild.</p>
              </div>
              <div class="text-gray-600 rounded-lg m-4 drop-shadow-md pt-4 px-4 w-1/3">
                <p class="font-semibold dark:text-white pb-2">Tech Stack</p>
                <p class="text-gray-600 dark:text-gray-100">HTML</p>
                <p class="text-gray-600 dark:text-gray-100">CSS3</p>
                <p class="text-gray-600 dark:text-gray-100">JavaScript</p>
                <p class="text-gray-600 dark:text-gray-100">Bootstrap Framework</p>
              </div>
            </div>
            <div class="flex flex-col m-4 pb-4 px-4">
              <p class="font-semibold dark:text-white pb-2">Validation</p>
              <p class="text-gray-600 dark:text-gray-100">Success will be determined via internal user testing. Users will be asked to complete short tasks on each platform, qualitative comparisons will be recorded.</p>
            </div>
          </div>
          <p class="text-purolator text-lg font-semibold pt-4">NAVBAR</p>
          <p class="text-gray-600 pb-2 dark:text-gray-100">The heuristic evaluation discussed in section 2 revealed that the navigation of the support desk desperately needed to be updated.</p>
          <img class="w-full py-2" src={data.navcode}/>
          <p class="text-gray-600 pb-2 dark:text-gray-100">Above is a snippet of the code I wrote to structure the navbar shown below. Bootstrap made development efficient and ensured responsive design when switching between mobile and web.</p>
          <img class="w-full py-2" src={data.nav}/>
          <p class="text-purolator text-lg font-semibold pt-4">SEARCH FUNCTION</p>
          <p class="text-gray-600 pb-2 dark:text-gray-100">Users <i>needed</i> the ability to search. One doesn’t typically enter a support desk to browse, but instead find very specific information that they need as soon as possible. With a search bar, I hoped to streamline the user experience.</p>
          <img class="w-full py-2" src={data.search}/>
          <p class="text-purolator text-lg font-semibold pt-4">HOME PAGE</p>
          <p class="text-gray-600 pb-2 dark:text-gray-100">Now with cards, large icons and categories, the home page has been revamped to ease the decision process for the user. What was once 30+ tiny text titles is now 9, large, easily distinguishable options. I’ll spare sharing the code in this article, but here’s an image of the final build:</p>
          <div class="flex justify-center">
            <img class="w-5/6 py-2" src={data.final_home}/>
          </div>
          <p class="text-purolator text-lg font-semibold pt-4">ARTICLES</p>
          <p class="text-gray-600 pb-2 dark:text-gray-100">Within the category, a user can click to expand individual articles. Pulling from competitive research, this layout is efficient and intuitive. I added the option for quick navigation between different categories in the navbar to reduce clicks from the user. Here’s what I created:</p>
          <div class="flex justify-center">
            <img class="w-5/6 py-2" src={data.final_article}/>
          </div>
          <p class="text-purolator text-lg font-semibold pt-4">MOBILE</p>
          <p class="text-gray-600 pb-2 dark:text-gray-100">Bootstrap’s responsive nature was helpful, but it still took some fine-tuning to finish up the mobile builds. Industry standard UI elements were used, such as the hamburger menu in navbar.</p>
          <img class="w-full py-2" src={data.final_mobile}/>
          <p class="text-purolator text-lg font-semibold pt-4">VALIDATION</p>
          <p class="text-gray-600 pb-2 dark:text-gray-100">Internal testing was completed with 3 software developers, a fellow co-op, a product owners, and the director of product at Purolator. Qualitative observations all highlighted that the redesign was more efficient, attractive and effective. Support articles were found faster, UI approvals were much higher, and users didn’t get confused in the process.</p>
        </div>
      </div>

      <div class="mx-auto w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 py-2 md:py-4 lg:py-8 space-y-3 bg-white dark:bg-dark">
        <div class="flex flex row pt-2">
          <p class="font-semibold text-2xl dark:text-white">Appx.</p>
          <p class="text-2xl pl-2 dark:text-white">Comparison with Purolator's current support desk</p>
        </div>
        <p class="text-gray-600 pb-2 dark:text-gray-100">The prototype was approved by the director of product. I handed off my prototype at the end of my co-op term. A few months later, I checked back on Purolator’s live site and was pleasantly surprised to see their support section was modeled off my prototype.</p>
        <p class="text-purolator text-lg font-semibold pt-4">HOME PAGE</p>
        <div class="flex justify-center">
          <img class="w-5/6 py-2" src={data.real_home}/>
        </div>
        <p class="text-gray-600 pb-2 dark:text-gray-100">Observe the large cards, Purolator Blue text, and a few select categories.</p>
        <p class="text-purolator text-lg font-semibold pt-4">ARTICLES</p>
        <div class="flex justify-center">
          <img class="w-5/6 py-2" src={data.real_article}/>
        </div>
        <p class="text-gray-600 pb-2 dark:text-gray-100">Observe the stacked articles and click-to-expand functionality with plus/minus icons.</p>
        <p class="text-purolator text-lg font-semibold pt-4">MOBILE</p>
        <div class="flex justify-center">
          <img class="w-5/6 py-2" src={data.real_mobile}/>
        </div>
        <p class="text-gray-600 pb-2 dark:text-gray-100">Myself and my team were very pleased with the prototype I developed. This task was the perfect chance to stretch myself not just in terms of problem solving, but problem <i>identifying</i> as well. Feel free to connect with me if you have any questions about my work!</p>
      </div>

      <div class="w-full bg-purolator">
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

export default Purolator
