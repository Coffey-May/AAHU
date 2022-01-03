import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  nav: {
    // backgroundColor: 'black',
    margin: "0 auto",

    background: `linear-gradient(rgba(0, 0, 0, 1) ,transparent)`,
    // background: 'rgba(0, 0, 0, .7)',
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  burger: {
    [theme.breakpoints.up(600)]: {
      display: "none",
    },
  },
  toolBar: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-around",
  },

  navDisplaySmall: {
    position: "static",
    "& :nth-child(1)": {
      padding: "10px",
    },
    "& :nth-child(2)": {
      padding: "10px",
    },
    "& :nth-child(3)": {
      padding: "10px",
    },
    "& :nth-child(4)": {
      padding: "10px",
    },
    "& :nth-child(5)": {
      padding: "10px",
    },
    listStyleType: "none",
    [theme.breakpoints.up(600)]: {
      display: "flex",
      // flexDirection: "column",
    },
    [theme.breakpoints.up(600)]: {
      width: "40vw",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
  },

  navDisplay: {
    listStyleType: "none",
    paddingLeft: "9em",
    justifyContent: "right",
    width: "90vw",

    [theme.breakpoints.up(600)]: {
      display: "flex",
      flexDirection: "row",
    },
    [theme.breakpoints.down(600)]: {
      display: "none",
    },
  },
}));
