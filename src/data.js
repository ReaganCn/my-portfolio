const Projects = [
  {
    id: 26,
    icon: "fas fa-address-card",
    title: "My portfolio",
    description:
      "This website is a redesign of my previous portfolio for speed and efficiency",
    technologies: ["HTML5","Javascript", "React Js", "Tailwind CSS"],
    github: "https://github.com/ReaganCn/my-portfolio",
    live: "https://charanareagan.netlify.app/"
  },
  {
    id: 25,
    icon: "fas fa-globe-americas",
    title: "Shortly URL Shortener Front End",
    description:
      "The front end to complement the URL shortener API for easy usability",
    technologies: ["HTML5","Javascript", "ReactJs", "ReduxJs","Webpack", "Tailwind CSS"],
    github: "https://github.com/ReaganCn/short-url",
    live: "https://shortly-project.netlify.app/"
  },
  {
    id: 24,
    icon: "fas fa-code",
    title: "Shortly URL Shortener API",
    description:
      "Handles user authetication, URL shortening and URL redirect among other API requests for the Shortly Project",
    technologies: ["Javascript", "NodeJs(Express)","Passport Js Auth", "Mongo DB", "Hosted on Digital Ocean"],
    github: "https://github.com/ReaganCn/shorturl-nodejs",
    live: ""
  },
  {
    id: 23,
    icon: "fas fa-play-circle",
    title: "Gravel Videos",
    description:
      "A concept of a programming tutorial website whereby learning is broken into the simplest and smallest bits",
    technologies: ["HTML5","Javascript", "ReactJs","ReduxJs","Webpack", "Bootstrap 4"],
    github: "https://github.com/ReaganCn/gravel-videos",
    live: "https://gravel-videos.netlify.app/"
  },
  {
    id: 22,
    icon: "fas fa-code",
    title: "Gravel Videos API",
    description:
      "Serves the Gravel Videos Front End by handling video files, extracting the necessary meta data and saving them to the server and the info to the database",
    technologies: ["Javascript", "NodeJs(Express)","Mongo DB", "Hosted on Glitch.com"],
    github: "https://github.com/ReaganCn/gravevideos-nodejs",
    live: ""
  },
  {
    id: 21,
    icon: "fas fa-quote-left",
    title: "Random Quote Generator",
    description:
      "An application that shows random quotes based on a basic API request with simple animations. Utilizes the Twitter API for sharing.",
    technologies: ["HTML5","Javascript", "ReactJs","Bootstrap 4", "Twitter API"],
    github: "https://github.com/ReaganCn/random-quotes",
    live: "https://get-random-quotes.netlify.app/"
  },
];

const Skills = [
  {
    id: 51,
    name: "JavaScript",
  },
  {
    id: 52,
    name: "Tailwind CSS",
  },
  {
    id: 53,
    name: "Bootstrap 4",
  },
  {
    id: 54,
    name: "Git",
  },
  {
    id: 55,
    name: "React",
  },
  {
    id: 56,
    name: "Redux",
  },
  {
    id: 57,
    name: "NodeJs",
  },
  {
    id: 58,
    name: "MongoDB",
  },
  {
    id: 59,
    name: "SQL",
  },
];

export { Projects, Skills };
