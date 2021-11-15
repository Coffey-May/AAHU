import React, { FC, useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import { Stepper } from 'react-form-stepper';
import useStyles from './styles';

//   type User = {
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

const Form = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        userName: "",
        nationality: "",
        other: "",
    });

    const classes = useStyles();

    const FormTitles = ["Sign Up", "Personal Info", "Other"];

    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData} />;
        }
        else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        }
        else {
            return <OtherInfo formData={formData} setFormData={setFormData} />;
        }
    };

    return (


        <div style={{ minHeight: '100vh', marginTop: '20vh' }} >
            {/* <div className="progressbar">
                <div
                    style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}
                ></div>
            </div> */}
            <div className={classes.formWrap}>

                <div className="header">
                    <Stepper
                        steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }]}
                        activeStep={page}
                    />
                    <h1>{FormTitles[page]}</h1>
                </div>

                <div>{PageDisplay()}</div>

                <div className="footer">
                    <button
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}
                    >
                        Prev
                    </button>
                    <button
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                alert("FORM SUBMITTED");
                                console.log(formData);
                            } else {
                                setPage((currPage) => currPage + 1);
                            }
                        }}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Form;