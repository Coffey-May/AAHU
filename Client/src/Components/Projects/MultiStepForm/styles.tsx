import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  formWrap: {
    margin: "0 auto",
    maxWidth: "1200px",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  messages: {
    width: "50vw",
    [theme.breakpoints.down(1160)]: {
      width: "76.5vw",
    },
  },
  modalForm: {
    width: "80vw",
    height: "53vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    boxShadow: "2px 8px 25px 3px #000000",
    "&:hover": {
      boxShadow: "2px 5px 38px -3px #000000",
    },
  },
  entryTable: {
    fontSize: "1vw",
    [theme.breakpoints.down(850)]: {
      fontSize: "1.75vw",
    },
  },
}));
