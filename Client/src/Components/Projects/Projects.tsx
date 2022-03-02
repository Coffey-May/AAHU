import Card from "./CardComponent";
import Memphis from "../../assets/memphis.c443141c.webp";
import ArtSite from "../../assets/Screen-Shot-2020-12-10-at-4.41.07-PM.webp";
import WeatherSite from "../../assets/Screen-Shot-2021-02-04-at-1.09.57-PM.webp";

import BonesMalone from "../../assets/Screen-Shot-2022-01-19-at-3.20.06-PM.webp";

import Grocery from "../../assets/Screen-Shot-2021-12-22-at-11.39.44-PM.webp";
import MultiStep from "../../assets/Screen-Shot-2021-12-22-at-11.55.46-PM.webp";
// Client/src/assets/Screen-Shot-2021-12-22-at-11.55.46-PM.webp
import Recipe from "../../assets/Screen-Shot-2022-01-04-at-12.29.42-AM.webp";
import Bp from "../../assets/Screen-Shot-2022-01-07-at-1.01.05-AM.webp";
// Client/src/assets/Screen-Shot-2022-01-07-at-1.01.05-AM.webp
import DogNasium from "../../assets/dogNasium3.webp";
import cSharpSnip1 from "../../assets/Screen-Shot-2022-01-22-at-7.25.04-PM.webp";

// Client/src/assets/Screen Shot 2022-01-07 at 1.01.05 AM.png
// Client/src/assets/Screen-Shot-2022-01-04-at-12.29.42-AM.webp

import TravelShare from "../../assets/Screen-Shot-2021-03-11-at-11.53.18-AM.webp";

let decriptions = {
  TravelShare:
    "This Full stack MERN application leverages backend technologies to offer a unique user experience. State management, handled client side via Redux, communicates with the express server after authentication via Google OAuth or local login/signup is completed. This project performs CRUD opertations on multi depth JSON formatted resources. Users  are allowed affordances common to social media style posts; i,e. likes and edit capabilities, all persisted through a MongoDb database.",
  Multi:
    "This project displays a multi step form, and mimics the format of many online forms that collect large amouts of user data. Built as a front end, this project showcases CRUD and dynamic propogation of DOM elements. A stepper component is implimented to show the progress of the form as it is completed. Error checking and validation ensure that the form is filled out properly and ready to be received server side.",

  Art: "One of my very first projects. This project is a portfolio of my many oil paintings. Visitors can explore my virtual exhibit, and view detail modals of each painting for a closer inspection. A contact page is also provided for inquiries regarding commissioning new work.",
  Grocery:
    "This application serves as an all purpose grocery list app. Attention to rendering components with the appearance of sticky notes, and the neumorphic font effects demostrate my ability to uniquely style UI components and exhibit reponsive practices. Full CRUD operations are exhibited, as well as conditional rendering. Code splitting and next gen formating ensure fast cold load times, and good lighthouse audits.",
  Recipe:
    "Simple, yet useful APi call that retrieves the 1st 10 results of the most popular dishes served with the ingredient as prompt. Links to full recipe provided with ingrdient list. What are you having for dinner? ",
  Weather:
    "This Project makes user dependant queries to multiple external apis for complete data fetching, National weather data, as well as select dropdowns populatable via a Country/State/City NPM resource, and MapGl combine to make the ultimate interactive international weather search experience. The ultimate fetch call, truly international, and instantaneous. An expoloration into the component lifecycles via the functional component pardigm",
  BonesMalone:
    "Full e-commerce JAMStack application, built using Stripe and CommerceJs.  Fill Shopping cart with products, proceed to checkout, place order through secure stripe api, and recieve customer/vendor confirmations, as well as detail invoices provided by CommerceJs CMS.",
  DogNasium:
    "Welcome To Dog-Nasium. The Giant indoor dog park with numerous amenities. Explore plans for varying levels of access and custom build the plan for you.",

  BloodPressure:
    "Track blood pressure and heart rate measures by the day in this easy to use plotting chart. Data is visualized, easily editable and kept in the local storage object.",
  GirlForce:
    "This Multi-National NGO has helped ensure the human rights of women and girls the world over. With over 15 years in charitable contributions and direct action, Girl Force has and continues to advocate for womens rights across numerous national borders.",
  ContemporaryRealism:
    "This project was built using ASP.Net Core, C#, and impliments entity and identity frameworks. This application showcases a gallery  of realist paintings and allows users the ability to interact with the resources at differing levels of access depending on their admin status. This project follows the MVC architectural design pattern and persists data in a SQL Server database.",
  GraphQl:
    "This project is an exploration into performing queries and database operations using a custom built graphql api. The api exposes data related to popular current rappers.",
};

const projectData = [
  {
    title: "Multi Step Form Validator",
    description: `${decriptions.Multi}`,
    image: `${MultiStep}`,
    linkMultiForm: "/multi-step-form",
    bgColor: "#54731e",
    gitHubLink:
      "https://github.com/Coffey-May/portfolioV3/tree/master/Client/src/Components/Projects/MultiStepForm",
    techs: ["REACT", "CRUD", "VALIDATION", "STEPPER"],
  },
  {
    title: "Traveler Share Guide",
    description: `${decriptions.TravelShare}`,
    image: `${TravelShare}`,
    linkMultiForm: "https://coffey-may-coffey-may-merntime.zeet.app/",
    bgColor: "#FAA613",
    gitHubLink: "https://github.com/Coffey-May/MERNTime",
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
    gitHubLink:
      "https://github.com/Coffey-May/portfolioV3/tree/master/Client/src/Components/Projects/GroceryList",
    techs: ["CRUD OPERATIONS", "DYNAMIC RENDERING", "NEXT-GEN-FORMATTING"],
  },
  {
    title: "Coffey May Fine Art",
    description: `${decriptions.Art}`,
    image: `${ArtSite}`,
    linkMultiForm: "https://coffeymayart.com",
    bgColor: "#F43E8A",
    gitHubLink: "",
    techs: ["DYNAMIC RENDERING", "BLOG STYLE PORTFOLIO", "FINE ART SERVICES"],
  },
  {
    title: "Forecaster Daily Plus",
    description: `${decriptions.Weather}`,
    image: `${WeatherSite}`,
    linkMultiForm: "/weather",
    bgColor: "#724CF9",
    gitHubLink:
      "https://github.com/Coffey-May/portfolioV3/tree/master/Client/src/Components/Projects/Weather",
    techs: [
      "MULTIPLE APIS",
      "CASCADING SELECT",
      "INTERACTIVE WORLD MAP",
      "LIVE WEATHER DATA",
    ],
  },
  {
    title: "Dinner Solver",
    description: `${decriptions.Recipe}`,
    image: `${Recipe}`,
    linkMultiForm: "/recipe",
    bgColor: "hotpink",
    gitHubLink:
      "https://github.com/Coffey-May/portfolioV3/tree/master/Client/src/Components/Projects/RecipeFinder",
    techs: ["API FETCHES", "QUERY PARAMETERS", "RESPONSIVE RETRO DESIGN"],
  },
  {
    title: "Bones Malone",
    description: `${decriptions.BonesMalone}`,
    image: `${BonesMalone}`,
    linkMultiForm: "/BonesMalone",
    bgColor: "navy",
    gitHubLink: "https://github.com/Coffey-May/E-Store",
    techs: ["E-COMMERCE", "JAM-STACK", "COMMERCEJS", "STRIPE", "ASYNC"],
  },
  {
    title: "Dog-Nasium",
    description: `${decriptions.DogNasium}`,
    image: `${DogNasium}`,
    linkMultiForm: "/DogNasium",
    bgColor: "teal",
    gitHubLink: "https://github.com/Coffey-May/DogNasium",
    techs: ["E-COMMERCE", "JSON Database", "Front-End"],
  },
  {
    title: "Fine Tuned Blood Pressure Chart",
    description: `${decriptions.BloodPressure}`,
    image: `${Bp}`,
    linkMultiForm: "/blood-pressure-monitor",
    bgColor: "#54731e",
    gitHubLink:
      "https://github.com/Coffey-May/portfolioV3/tree/master/Client/src/Components/Projects/BloodPressureMonitor",
    techs: ["INTERACTIVE CHART", "CRUD"],
  },
  {
    title: "Girl Force",
    description: `${decriptions.GirlForce}`,
    image: `${Memphis}`,
    linkMultiForm: "/girlForce",
    bgColor: "#FAA613",
    gitHubLink: "",
    techs: [],
  },
  {
    title: "Contemporary Realism and C#",
    description: `${decriptions.ContemporaryRealism}`,
    image: `${cSharpSnip1}`,
    linkMultiForm: "/ContemporaryRealism",
    bgColor: "#F44708",
    gitHubLink: "https://github.com/Coffey-May/MyPaintingsMVC",
    techs: ["C#", "MVC", "ASP.NET CORE", "SQL", "ENTITY", "IDENTITY"],
  },
  {
    title: "GraphQL Custom API",
    description: `${decriptions.GraphQl}`,
    image: "https://cdn.codersociety.com/uploads/graphql-reasons.png",
    linkMultiForm: "/graphql",
    bgColor: "#F43E8A",
    gitHubLink: "https://github.com/Coffey-May/graphql-api",
    techs: ["MULTIPLE ENDPOINTS"],
  },
];

const Projects = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#EEE",
          filter: "invert(1)",
          boxShadow: "inset 0px 0px 150px 0px #d1006c3E",
        }}
      >
        <div
          style={{
            padding: "3em 0em",
            width: "70%",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              color: "#d1006c",
              fontSize: "3em",
            }}
          >
            PROJECTS
          </h1>
        </div>
      </div>

      <div>
        {projectData.map((projectData, index) => {
          return <Card projectData={projectData} key={index} />;
        })}
      </div>
    </>
  );
};

export default Projects;
