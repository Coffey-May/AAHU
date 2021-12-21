import Card from "./CardComponent";
import Memphis from "../../assets/memphis.png";
import ArtSite from "../../assets/Screen Shot 2020-12-10 at 4.41.07 PM.png";
import WeatherSite from "../../assets/Screen Shot 2021-02-04 at 12.52.31 PM.png";
import BonesMalone from "../../assets/Screen Shot 2020-02-20 at 9.40.16 PM.png";

import TravelShare from "../../assets/Screen Shot 2021-03-11 at 11.52.32 AM.png";

let decriptions = {
  TravelShare:
    "This Full stack MERN application leverages backend technologies to offer a unique user experience. State management, handled client side via Redux, communicates with the express server after authentication via Google OAuth or local sign/signup is completed. This project performs CRUD opertations on multi depth JSON formatted resources. Users  are allowed affordances common to social media style posts.",
  Multi:
    "This project displays a multi step form, and mimics the format of many online forms that collect large amouts of user data. A stepper component is implimented to show the progress of the form as it is completed. Error checking and validation ensure that the form is filled out properly and ready to be received by the NodeJs server. A count of the amount of users who have completed the form will be displayed. ",

  Art: "One of my very first projects. This project is a portfolio of my many oil paintings. Visitors can explore my virtual exhibit, and view detail modals of each painting for a closer inspection. A contact page is also provided for inquiries regarding commissioning new work.",
  Grocery: "sklfnldfnl",
  Recipe: "ldfnldnfldsnf",
  Weather: "kasbbaskfjbk",
  BonesMalone: "kasbbaskfjbk",
  GirlForce: "dnkjsndknsdkjndnasjkndkjsna",
};

const projectData = [
  {
    title: "Multi Step Form",
    description: `${decriptions.Multi}`,
    image: `${Memphis}`,
    linkMultiForm: "/multi-step-form",
    bgColor: "#54731e",
  },
  {
    title: "Travel Share",
    description: `${decriptions.TravelShare}`,
    image: `${TravelShare}`,
    linkMultiForm: "https://coffey-may-coffey-may-merntime.zeet.app/",
    bgColor: "#FAA613",
  },
  {
    title: "Piet Mondrian Grocery List",
    description: `${decriptions.Grocery}`,
    image: `${Memphis}`,
    linkMultiForm: "/groceries",
    bgColor: "#F44708",
  },
  {
    title: "Coffey May Fine Art",
    description: `${decriptions.Art}`,
    image: `${ArtSite}`,
    linkMultiForm: "https://coffeymayart.com",
    bgColor: "#F43E8A",
  },
  {
    title: "ForecasterPlus",
    description: `${decriptions.Weather}`,
    image: `${WeatherSite}`,
    linkMultiForm: "/weather",
    bgColor: "#724CF9",
  },
  {
    title: "Recipe Search",
    description: `${decriptions.Recipe}`,
    image: `${Memphis}`,
    linkMultiForm: "/recipe",
    bgColor: "#00F5D4",
  },
  {
    title: "Bones Malone",
    description: `${decriptions.BonesMalone}`,
    image: `${BonesMalone}`,
    linkMultiForm: "/bonesMalones",
    bgColor: "#2978A0",
  },
  {
    title: "Girl Force",
    description: `${decriptions.GirlForce}`,
    image: `${Memphis}`,
    linkMultiForm: "/girlForce",
    bgColor: "#861388",
  },
];

const Projects = () => {
  return (
    <>
      <div>
        {projectData.map((projectData, index) => {
          return <Card projectData={projectData} key={index} />;
        })}
      </div>
    </>
  );
};

export default Projects;
