import Proj1 from "../assets/proj1.jpg";
import Proj2 from "../assets/proj2.jpg";
import Proj3 from "../assets/proj3.webp";
import Proj4 from "../assets/proj4.webp";
import Proj5 from "../assets/proj5.jpg";
import Proj6 from "../assets/proj6.png";

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
    name: "Social Media Website",
    image: Proj4,
    git : "https://github.com/safak/restaurant-ui",
    skills: "React,Node.js,MySQL,GraphQL",
  },
  // {
  //   id: 5,
  //   name: "Dashboard Visualizer",
  //   image: Proj5,
  //   git : "https://github.com/safak/restaurant-ui",
  //   skills: "JavaScript,HTML,CSS",
  // },
  // {
  //   id:6,
  //   name: "Mobile Game",
  //   image: Proj6,
  //   git : "https://github.com/safak/restaurant-ui",
  //   skills: "React Native,JavaScript,HTML,CSS",
  // },
];
