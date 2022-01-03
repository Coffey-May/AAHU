import Card from "./CardComponent";
import Memphis from "../../assets/memphis.png";
import ArtSite from "../../assets/Screen Shot 2020-12-10 at 4.41.07 PM.png";
import WeatherSite from "../../assets/Screen Shot 2021-02-04 at 12.52.31 PM.png";
import BonesMalone from "../../assets/Screen Shot 2020-02-20 at 9.40.16 PM.png";
import Grocery from "../../assets/Screen Shot 2021-12-22 at 11.39.44 PM.png";
import MultiStep from "../../assets/Screen Shot 2021-12-22 at 11.55.46 PM.png";

import TravelShare from "../../assets/Screen Shot 2021-03-11 at 11.52.32 AM.png";

let decriptions = {
  TravelShare:
    "This Full stack MERN application leverages backend technologies to offer a unique user experience. State management, handled client side via Redux, communicates with the express server after authentication via Google OAuth or local sign/signup is completed. This project performs CRUD opertations on multi depth JSON formatted resources. Users  are allowed affordances common to social media style posts.",
  Multi:
    "This project displays a multi step form, and mimics the format of many online forms that collect large amouts of user data. A stepper component is implimented to show the progress of the form as it is completed. Error checking and validation ensure that the form is filled out properly and ready to be received server side.",

  Art: "One of my very first projects. This project is a portfolio of my many oil paintings. Visitors can explore my virtual exhibit, and view detail modals of each painting for a closer inspection. A contact page is also provided for inquiries regarding commissioning new work.",
  Grocery:
    "This application serves as an all purpose groocery list or ToDo app.  Full CRUD operations are exhibited, as weel as conditional rendering. ",
  Recipe: "fbdnskjfbkj",
  Weather:
    "This Project makes user dependant queries to multiple external apis for complete data fetching, National weather data, as well as select dropdowns populatable via a Country/State/City NPM, make the ultimate fetch call truly international, and instantaneous.",
  BonesMalone: "kasbbaskfjbk",
  BloodPressure: "sklfnldfnndsfkjbfkbdl",
  GirlForce: "dnkjsndknsdkjndnasjkndkjsna",
};

const projectData = [
  {
    title: "Multi Step Form Validator",
    description: `${decriptions.Multi}`,
    image: `${MultiStep}`,
    linkMultiForm: "/multi-step-form",
    bgColor: "#54731e",
    techs: ["REACT", "CRUD", "VALIDATION", "STEPPER"],
  },
  {
    title: "Traveler Share Guide",
    description: `${decriptions.TravelShare}`,
    image: `${TravelShare}`,
    linkMultiForm: "https://coffey-may-coffey-may-merntime.zeet.app/",
    bgColor: "#FAA613",
    techs: [
      "REACT",
      "REDUX",
      "EXPRESS",
      "NODEJS",
      "MONGOOSE",
      "AUTH",
      "PERSISTANT DATA",
    ],
  },
  {
    title: " Sticky Note Grocery Check-List",
    description: `${decriptions.Grocery}`,
    image: `${Grocery}`,
    linkMultiForm: "/groceries",
    bgColor: "#F44708",
    techs: [],
  },
  {
    title: "Coffey May Fine Art",
    description: `${decriptions.Art}`,
    image: `${ArtSite}`,
    linkMultiForm: "https://coffeymayart.com",
    bgColor: "#F43E8A",
    techs: [],
  },
  {
    title: "Forecaster Daily Plus",
    description: `${decriptions.Weather}`,
    image: `${WeatherSite}`,
    linkMultiForm: "/weather",
    bgColor: "#724CF9",
    techs: [],
  },
  {
    title: "Dinner Solver",
    description: `${decriptions.Recipe}`,
    image: `${Memphis}`,
    linkMultiForm: "/recipe",
    bgColor: "#00F5D4",
    techs: [],
  },
  {
    title: "Bones Malone",
    description: `${decriptions.BonesMalone}`,
    image: `${BonesMalone}`,
    linkMultiForm: "/bonesMalones",
    bgColor: "#2978A0",
    techs: [],
  },
  {
    title: "Fine Tuned Blood Pressure Chart",
    description: `${decriptions.BloodPressure}`,
    image: `${Memphis}`,
    linkMultiForm: "/blood-pressure-monitor",
    bgColor: "#861388",
    techs: [],
  },
  {
    title: "Girl Force",
    description: `${decriptions.GirlForce}`,
    image: `${Memphis}`,
    linkMultiForm: "/girlForce",
    bgColor: "#861388",
    techs: [],
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
