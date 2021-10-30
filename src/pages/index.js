import * as React from "react"
import Section from '../components/Section';

// data
const data = {
  name: "James Serez",
  links: [
    {
      text: "Email",
      url: "mailto:jdserez@uwaterloo.ca",
      newTab: false
    },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/james-serez/",
      newTab: true
    },
    {
      text: "Resume",
      url: "dummy.pdf",
      newTab: true
    },
  ],
  sections: [
    {
      title: "Vysio",
      label: "Project",
      description: "this is the description",
      year: "2021",
      imagePath: "vysio_dash.png",
      route: "/vysio/"
    },
    {
      title: "Manulife Developer Site",
      label: "Work",
      description: "this is the description",
      year: "2020",
      imagePath: "placeholder600.png",
      route: "/manulife/"
    },
    {
      title: "Purolator Support Desk",
      label: "Work",
      description: "this is the description",
      year: "2019",
      imagePath: "placeholder600.png",
      route: "/purolator/"
    },
    {
      title: "Fingo",
      label: "Project",
      description: "this is the description",
      year: "2020",
      imagePath: "placeholder600.png",
      route: "/fingo/"
    },
  ]
}

// markup
const IndexPage = () => {
  return (
    <main class="min-h-screen min-w-screen dark:bg-black">
      <div class="mx-auto min-h-screen w-full sm:w-3/4 xl:w-2/3 pt-10 md:pt-16 lg:pt-28">
      <div class="flex flex-col px-3 md:px-1">
        <div class="w-full h-full mb-6 sm:mb-12 md:mb-16 lg:mb-20">
          <p class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">{data.name}</p>
          <div class="flex flex-row space-x-4 px-1">
            {
              data?.links?.map((link) => (
                <a class="dark:text-white hover:text-primary text-sm lg:text-lg" href={link.url} target={link.newTab ? "_blank" : "_self"}>{link.text}</a>
              ))
            }
          </div>
        </div>
        {
          data?.sections?.map((section) => (
            <Section data={section} />
          ))
        }
      </div>
      </div>
    </main>
  )
}

export default IndexPage
