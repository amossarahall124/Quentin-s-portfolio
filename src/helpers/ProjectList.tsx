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
    domo: "https://amossarahall124.github.io/evolve-fitness-gym/",
  },
  {
    id: 2,
    name: "Food Ordering Website",
    image: Proj2,
    git : "https://github.com/amossarahall124/food-ordering",
    skills: "React,Node.js,tailwind",
    domo: "https://amossarahall124.github.io/food-ordering/",
  },
  {
    id: 3,
    name: "web service site",
    image: Proj3,
    git : "https://github.com/amossarahall124/web-service",
    skills: "React,Node.js,MongoDB,SpotifyAPI",
    domo: "https://amossarahall124.github.io/web-service/",
  },
  {
    id: 4,
    name: "Travel Jamaica site",
    image: Proj4,
    git : "https://github.com/amossarahall124/project-travel",
    skills: "React,Node.js,MySQL,GraphQL",
    domo: "https://amossarahall124.github.io/pro-travel/",
  },
];
