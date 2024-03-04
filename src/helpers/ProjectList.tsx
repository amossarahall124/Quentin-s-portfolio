import Proj1 from "../assets/proj1.png";
import Proj2 from "../assets/proj2.png";
import Proj3 from "../assets/proj3.png";
import Proj4 from "../assets/proj4.png";

export type ProjectTpyes ={
  name: string,
  image: any,
  skills: String,
  id: number,
  git: string,
  domo: string,
  
}
export const ProjectList = [
  {
    id: 1,
    name: "Evolve-gym project",
    image: Proj1,
    git : "https://github.com/amossarahall124/evolve-fitness-gym",
    skills: "React.ts, HTML, tailwind CSS",
    domo: "https://evolve-fitness-gym.vercel.app/",
  },
  {
    id: 2,
    name: "Food Ordering Website",
    image: Proj2,
    git : "https://github.com/amossarahall124/food-ordering",
    skills: "React,Node.js,tailwind",
    domo: "https://food-ordering-weld.vercel.app/",
  },
  {
    id: 3,
    name: "web service site",
    image: Proj3,
    git : "https://github.com/amossarahall124/web-service",
    skills: "React,Node.js,MongoDB,SpotifyAPI",
    domo: "https://web-service-psi.vercel.app/",
  },
  {
    id: 4,
    name: "Travel Jamaica site",
    image: Proj4,
    git : "https://github.com/amossarahall124/project-travel",
    skills: "React,Node.js,MySQL,GraphQL",
    domo: "https://65e603c6e63efb10e903eb1b--spectacular-licorice-43c036.netlify.app/?",
  },
];
