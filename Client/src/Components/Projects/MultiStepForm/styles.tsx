import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formWrap: {
    margin: "0 auto",
    maxWidth: "80vw",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  messages: {
    width: "40vw",
    [theme.breakpoints.down(1160)]: {
      width: "76.5vw",
    },
  },
}));
