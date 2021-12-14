import React, { FC, useState ,useEffect} from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import { Stepper } from "react-form-stepper";
import useStyles from "./styles";
import axios from "axios";
import { Button, Typography, Container } from "@material-ui/core";
import MessageList from "./MessageList";
import { ContactSupportOutlined } from "@material-ui/icons";

//  interface User {
//   email: string | null;
//   password:  string |  null;
//     confirmPassword: string;
//     firstName: string;
//   lastName:  string;
//     userName: string;
//     nationality:  string;
//  other: string;
// }
// type Props = {
//    email: string;
//   password:  string;
//     confirmPassword: string;
//     firstName: string;
//   lastName:  string;
//     userName: string;
//     nationality:  string;
//  other: string;
// };

const Form = ({ }) => {
  
  let initialState = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    userName: "",
    nationality: "",
    other: "",

  }
  
  const [page, setPage] = useState(0);
 const [list, setList] = useState([])
  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
   setList([{...formData}])
  }, [])

 
  const classes = useStyles();

//   const handleAdd = (formData) => {
//   setList();
// }

  // axios
  //   .get("http://localhost:5000", {
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   })
  //   .then((response) => console.log("response:", response));

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const handleDelete = (id) => {
    let filteredList = list.filter((el) => (
      el.nationality != id
    ))
      
  setList(filteredList)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "rgba(232,232,232)",
        paddingTop: "13vh",
      }}
    >
      <div className={classes.formWrap}>
        <div className="header">
          <Stepper
            steps={[
              { label: "Sign Up" },
              { label: "Personal Info" },
              { label: "Other" },
            ]}
            activeStep={page}
          />
          <Typography variant={"h3"}>{FormTitles[page]}</Typography>
        </div>
        <hr />
        <div
          style={{
            marginTop: "2em",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            backgroundColor: "rgba(255,255,255)",
            padding: "1em",
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 0.9,
              padding: "1em",
            }}
          >
            {PageDisplay()}

            <div>
              <Button
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </Button>
              <Button
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("FORM SUBMITTED");
                    console.log(formData, list);
                    let newArr = [...list]
                    console.log("new",newArr)
                    newArr.push(formData)
                    setList(newArr)
                    setFormData(initialState)
                    setPage(0)
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
          <MessageList list={list} handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
};

export default Form;
