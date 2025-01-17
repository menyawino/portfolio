/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Omar Ahmed",
  title: "Hi all, I'm Omar",
  subTitle: emoji(
    "A driven Computational Biologist 🔬 with a strong enthusiasm for AI, Machine Learning, and GPU optimization 🚀, leveraging computational techniques to advance multidisciplinary research and drive innovative solutions across diverse fields."
  ),
  resumeLink:
    "https://drive.google.com/file/d/15BJ6JFg4x5LqcQiHA9-7840AA-DVCqw3/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/menyawino",
  linkedin: "https://www.linkedin.com/in/omar-ahmedd/",
  gmail: "menyawino@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/3ooomar.ahmed",
  medium: "https://medium.com/@menyawino",
  stackoverflow: "https://stackoverflow.com/users/14444328/omar-ahmed",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BUILDING BOLD SOLUTIONS AND LEVERAGING EMERGING TECHNOLOGIES TO TACKLE LIFE SCIENCES' TOUGHEST CHALLENGES",
  skills: [
    emoji(
      "⚡ Developing algorithms and software tools for biological data analysis"
    ),
    emoji(
      "⚡ Designing scalable, GPU-optimized pipelines for big data processing on HPC and cloud computing environments"
    ),
    emoji(
      "⚡ Building AI/ML models for bioinformatics and omics data"
    ),
    emoji(
      "⚡ Creation of insightful data visualizations to bridge computational and biological insights"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "R",
    fontAwesomeClassname: "fab fa-r-project"
  },
  {
    skillName: "Bash",
    fontAwesomeClassname: "fas fa-terminal"
  },
  {
    skillName: "C++",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "TensorFlow",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "Nextflow",
    fontAwesomeClassname: "fas fa-project-diagram"
  },
  {
    skillName: "Snakemake",
    fontAwesomeClassname: "fas fa-dna"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "CUDA",
    fontAwesomeClassname: "fas fa-microchip"
  },
  {
    skillName: "Flutter",
    fontAwesomeClassname: "fab fa-google"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git"
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The American University in Cairo",
      logo: require("./assets/images/aucLogo.jpg"),
      subHeader: "B.S. in Molecular and Cell Biology, with minors in Bioinformatics and Chemistry",
      duration: "September 2020 - June 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Graduated with High Honors",
        "Full merit scholarship recipient"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "NGS Data Analysis & Pipelines", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Software Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Computational Biologist",
      company: "Magdi Yacoub Global Heart Center",
      companylogo: require("./assets/images/myfLogo.jpg"),
      date: "Jun 2024 – Present",
      desc: "Developing solutions for the analysis of multi-omics data to identify novel biomarkers for cardiovascular diseases.",
      descBullets: [
        "Leading HPC infrastructure and database architecture taskforce",
        "Building reproducible omics analysis pipelines with Snakemake and Nextflow. Reduced analysis time by 82%."
      ]
    },
    {
      role: "Cheif Research Office (CRO)",
      company: "Supertums",
      companylogo: require("./assets/images/supertumsLogo.jpg"),
      date: "Apr 2024 – Present",
      desc: "Leading a team of software engineers, data scientists, and computational biologists to develop a metagenomics testing platform powered with generative AI."
    },
    {
      role: "Bioinformatics Intern",
      company: "Mounir Armanios Research Center",
      companylogo: require("./assets/images/marcLogo.jpg"),
      date: "Jan 2023 – Oct 2023",
      desc: "Trained in the analysis of DNA sequencing data to identify genetic variants associated with rare diseases."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/supertumsLogo.jpg"),
      projectName: "Supertums",
      projectDesc: "Developing a metagenomics testing platform powered with generative AI.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.supertums.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/3ashLogo.jpg"),
      projectName: "3ASH Fitness",
      projectDesc: "Building an AI-powered fitness platform to help users achieve their fitness goals.",
      footerLink: [
        {
          name: "Coming soon!",
          // url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "iCAN International Golden Medal",
      subtitle:
        "Awarded the Golden Medal at the iCAN International Invention Competition for the development of a novel CRISPR-based gene editing protocol.",
      image: require("./assets/images/icanLogo.jpg"),
      imageAlt: "iCAN Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "BIOHACK I Hackathon Winner",
      subtitle:
        "Built a hybrid machine learning model to predict the risk of crohn's disease in patients based on their gut microbiome.",
      image: require("./assets/images/garnLogo.jpg"),
      imageAlt: "BIOHACK I Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "Heart Hackathon Finalist and Most Novel Idea",
      subtitle: "Built a functioning total artificial heart, integrating machine learning algorithms to optimize heart function.",
      image: require("./assets/images/hhLogo.jpg"),
      imageAlt: "Heart Hackathon Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Story",
          url: "https://www.aucegypt.edu/media/media-releases/auc-students-awarded-global-most-novel-idea-heart-hackathon-texas"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+20-01001647050",
  email_address: "menyawino@gmail.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "menyawino", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
