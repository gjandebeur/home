// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #6eb5d0, #9acfdf, #c7e5ee, #ecf0f1",
  firstName: "Gabe",
  middleName: "",
  lastName: "Jandebeur",
  message: " Decoding genomic questions with computational approaches. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/gjandebeur/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/gjandebeur/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/jandebeur.jpg"),
  imageSize: 375,
  message:
    " My name is Gabe Jandebeur. I'm a first-year PhD student at the University of Oklahoma Health Sciences Center, where I focus on genomics and bioinformatics. ",
  resume: "https://docs.google.com/document/d/13VS5fmg3Po_7VHU6AkNL5_CF7hIQkNvpqXxu7ZDSJ54/edit?tab=t.0",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "gjandebeur", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "R", value: 95 },
    { name: "Data Structures", value: 80 },
    { name: "HTML/CSS", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Self-motivated", value: 90 },
    { name: "Organization", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking to advance my skills and gain connections to prepare for the transition to industry.",
  email: "john-g-jandebeur@ouhsc.edu",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Graduate Research Assistant',// University of Oklahoma Health Campus
      companylogo: require('../assets/img/ouhc_logo.png'),
      date: 'August 2025 – Present',
    },
    {
      role: 'Post-Bac Research Intern',// Cornell University / Boyce Thompson Institute
      companylogo: require('../assets/img/BTILOGO.jpg'),
      date: 'May - August 2025',
    },
    {
      role: 'Undergraduate Research Assistant ',// University of Oklahoma
      companylogo: require('../assets/img/ou_logo.png'),
      date: 'August 2022 - January 2026',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
