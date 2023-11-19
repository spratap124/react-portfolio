import uiUxOne from "./assets/ui-ux-project-1.png";
import uiUxTwo from "./assets/ui-ux-project-2.jpg";
import appsOne from "./assets/apps-project-1.png";
import appsTwo from "./assets/apps-project-2.png";
import webOne from "./assets/web-project-4.png";
import webTwo from "./assets/web-project-5.png";
import webThree from "./assets/web-project-6.png";
import webFour from "./assets/web-project-7.png";

import youtubeIcon from "./assets/youtube-icon.svg";
import githubIcon from "./assets/github-icon.svg";
import linkedinIcon from "./assets/linkedin-icon.svg";
import stackOverflowIcon from "./assets/stack-overflow-icon.svg";

export interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  projectLink?: string;
}

export type Category = "uiUx" | "web" | "apps";

export const ProjectType: Category[] = ["web", "uiUx", "apps"];

export const projects: Project[] = [
  {
    id: 0,
    category: "uiUx",
    img: uiUxOne,
    title: "Bookmarkify landing page design",
  },
  {
    id: 1,
    category: "uiUx",
    img: uiUxTwo,
    title: "Bookmarkify logo design",
  },
  {
    id: 3,
    category: "web",
    img: webOne,
    title: "Restaurant Website",
    projectLink: "https://github.com/spratap124/Food-Ordering-Angular",
  },
  {
    id: 4,
    category: "web",
    img: webTwo,
    title: "Beer website Landing Page",
    projectLink: "https://github.com/spratap124/Beercraft",
  },
  {
    id: 5,
    category: "web",
    img: webThree,
    title: "SmartQ Food Ordering website",
    projectLink: "https://github.com/spratap124/Food-Ordering",
  },
  {
    id: 6,
    category: "web",
    img: webFour,
    title: "Game Lister",
    projectLink: "https://github.com/spratap124/Gamelister",
  },
  {
    id: 7,
    category: "apps",
    img: appsOne,
    title: "Snake Game",
    projectLink: "https://suryapratap.in/projects/SnakeGame_v1.html",
  },
  {
    id: 8,
    category: "apps",
    img: appsTwo,
    title: "Bookmarkify Chrome Extension",
    projectLink:
      "https://chrome.google.com/webstore/detail/bookmarkify/dnbnfomolmfanljmiaeenbmdefpiaadd",
  },
];

export const socialMedia = [
  {
    imgSrc: githubIcon,
    title: "Github",
    link: "https://github.com/spratap124/",
  },
  {
    imgSrc: linkedinIcon,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/spratap124/",
  },
  {
    imgSrc: stackOverflowIcon,
    title: "Stack Overflow",
    link: "https://stackoverflow.com/users/2627890/spratap124",
  },
  {
    imgSrc: youtubeIcon,
    title: "Youtube",
    link: "https://www.youtube.com/channel/UCzl6g-dG9i_HM9EqQ0_F1wA",
  },
];
