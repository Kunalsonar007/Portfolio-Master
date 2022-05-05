import emoji from "react-easy-emoji";

export const greetings = {
  name: "Kunal Sonar",
  title: "Hi all, I'm Kunal",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Android development on Java, Kotlin and Flutter Framework.",
  resumeLink: " /*Resume link */",
};

export const openSource = {
  githubUserName: "Kunalsonar007",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/kunal.wankhede.140",
  instagram: "https://www.instagram.com/kunal_sonar_19/",
  twitter: "https://twitter.com/Viru45297613",
  github: "https://github.com/Kunalsonar007",
  linkedin: "https://www.linkedin.com/in/kunal-sonar-133108227/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "vscode-icons:file-type-django",
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary",
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
        },
        {
          skillName: "Sentry",
          fontAwesomeClassname: "logos:sentry-icon",
        },
      ],
    },
    {
      title: "Android Development",
      lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
        ),
        emoji(
          "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
        ),
        emoji(
          "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
        ),
        emoji("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
        emoji(
          "⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "logos:ethereum",
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "logos:solidity",
        },
        {
          skillName: "Web3js",
          fontAwesomeClassname: "logos:web3js",
        },
        {
          skillName: "Metamask",
          fontAwesomeClassname: "logos:metamask-icon",
        },
        {
          skillName: "Ganache",
          fontAwesomeClassname: "logos:ganache-icon",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Android",
    progressPercentage: "80",
  },
  {
    Stack: "UI / UX",
    progressPercentage: "85",
  },
];

export const educationInfo = [
  {
    schoolName: "Cyber Security Workshop",
    // subHeader: "Cyber Security",
    duration: "September 2018 - April 2019",
    desc: "Participated in the research of XXX and published 3 papers.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    schoolName: "Ethical Hacking",
    // subHeader: "Ethical Hacking",
    duration: "June 2018 - April 2019",
    desc: "Participated in the research of XXX and published 3 papers.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    schoolName: "Developer Internship",
    // subHeader: "Bachelor of Science in Computer Science",
    duration: "January 2022 - Present",
    desc:
      "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    descBullets: ["Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit"],
  },
  {
    schoolName: "Bachelor Of Computer Application",
    // subHeader: "Bachelor of Science in Computer Science",
    duration: "October 2021 - Present",
    desc:
      "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    descBullets: ["Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit"],
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Web Enterprise Expert",
    companylogo: "/img/icons/common/programming.png",
    date: "June 2018 – January 2019",
    desc:
      "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "Android Developer",
    company: "Sparks Foundation",
    companylogo: "/img/icons/common/op.svg",
    date: "May 2017 – May 2018",
    desc:
      "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "Junior Software Developer",
    company: "S.B.I.T",
    companylogo: "/img/icons/common/airbnbLogo.png",
    date: "Jan 2022 – Present",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const projects = [
  {
    name: "Modern Dashboard",
    desc:
      "Data analitical dashboard adaptable to all devices, with ui components and animated interactions.",
    github: "https://github.com/Kunalsonar007",
    link: "https://kunalsonar007.github.io/modern-dashboard/",
  },
  {
    name: "Covid 19 tracker",
    desc:
      "Covid-19-tracker is a react app made to track, check status and count of Corona virus affected countries and people.",
    github: "https://github.com/Kunalsonar007",
    link: "https://covid-19-tracker-e4bda.web.app/",
  },
  {
    name: "Tesla - Clone using ReactJs",
    desc:
      "Tesla Clone is adaptable to all devices, with ui components and animated interactions.",
    github: "https://github.com/Kunalsonar007",
    link: "https://w17b2.csb.app/",
  },
];

export const feedbacks = [
  {
    name: "Yugal Mali",
    feedback:
      "Hard working intern of our S.B.I.T Hub,carry out my project with all the possible quality and attention and support 24 hours a day.",
  },
  {
    name: "Hitesh Sikka",
    feedback:
      "Hard working intern of our S.B.I.T Hub,carry out my project with all the possible quality and attention and support 24 hours a day.",
  },
];
