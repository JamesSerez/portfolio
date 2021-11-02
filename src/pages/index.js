import * as React from "react"
import Section from '../components/Section';

// data
const data = {
  //imagePath: "logo.png",
  name: "James Serez",
  image: "logo.png",
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
      imagePath: "vysio_dash.png",
      route: "/manulife/"
    },
    {
      title: "Purolator Support Desk",
      label: "Work",
      description: "this is the description",
      year: "2019",
      imagePath: "vysio_dash.png",
      route: "/purolator/"
    },
    {
      title: "Fingo",
      label: "Project",
      description: "this is the description",
      year: "2020",
      imagePath: "vysio_dash.png",
      route: "/fingo/"
    },
  ]
}

// markup
const IndexPage = () => {
  return (
    <main class="min-h-screen min-w-screen dark:bg-black">
      <div class="mx-auto min-h-screen w-full sm:w-3/4 xl:w-2/3 2xl:w-1/2 pt-10 md:pt-16 lg:pt-28">
      <div class="flex flex-col px-3 md:px-1">
        <img class="xs:w-2 sm:w-6 md:w-12 xl:w-12 2xl:w-12 pb-1" src={data.image} />
        <div class="w-full h-full mb-6 sm:mb-12 md:mb-16 lg:mb-20">
        
          <p class="font-medium text-xl sm:text-2xl md:text-2xl lg:text-xl dark:text-white">{data.name}</p>
          <div class="flex flex-row space-x-4 px-1">
            {
              data?.links?.map((link) => (
                <a class="text-gray-500 font-normal dark:text-white hover:text-primary text-sm lg:text-md" href={link.url} target={link.newTab ? "_blank" : "_self"}>{link.text}</a>
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
