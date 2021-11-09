import React from 'react';
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { CssBaseline } from '@material-ui/core';
import { motion } from 'framer-motion';

const Home = () => {
    const classes = useStyles();
    return (
        
        <Grid container  className={classes.container} >
            <CssBaseline />
             <Grid item lg={6}md={6} sm={12}xs={12} className={classes.paperLeft}>
             <motion.div
            //  className={classes.nameTitle}
        animate={{
          x: "5vw",
          opacity: 1,
        }}
        initial={{
          opacity: -1,
        }}
        transition={{
          type: "spring",
          duration: 1.75,
        }}
      >
        <div
          style={{
            WebkitBoxReflect:
              "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))",
            top: "-60px",
          }}
        >
          <Typography variant={"h2"}>Coffey May</Typography>
          <Typography variant={"h4"}>Software Developer</Typography>
        </div>
      </motion.div>
            </Grid>
         
            <Grid item lg={6}md={6} sm={12}xs={12} className={classes.paperRight}>
            <Paper className={classes.paper} >kdsbfkjdbs</Paper>

            </Grid>
        
        </Grid>
    )
}

export default Home
