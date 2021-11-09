import React,{memo} from "react";
import { motion } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import Memphis from '../../assets/memphis.png'
import ResumePic from '../../assets/VaporResume.png'
const Title = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box>
        <Grid  container spacing={0} >


        <Grid item lg={6}md={6} sm={12}xs={12}>
          <motion.div
          
            className={classes.nameTitle}
            animate={{
              x: 0,
              opacity: 1,
            }}
            initial={{
              opacity: -1,
              x:-20 
            }}
            transition={{
              type: "spring",
              duration: 1.5,
            }}
          >
            <div
              style={{
                WebkitBoxReflect:
                  "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))",
              }}
            >
              {/* <Typography style={{ fontWeight: 600 }} variant={"h2"}>Coffey May</Typography> */}
        

              <Typography className={classes.title} style={{ fontWeight: 900 }} variant={"h2"}> Coffey May </Typography>
              <Typography className={classes.subtitle}  style={{ fontWeight: 100 }} variant={"h4"}>Software Developer</Typography>
            </div>
          </motion.div>
          </Grid>
        
          <Grid item lg={6}md={6} sm={12}xs={12} >
          <motion.div
            // className={classes.nameTitle}
            animate={{
              x: 0,
              opacity: 1,
            }}
            initial={{
              opacity: 0,
              x: 40,
            }}
            transition={{
              type: "spring",
              duration: 2,
            }}
          >
              <Button style={{display:'block',margin:'0 auto'}}>
                 {/* <img style={{ background: 'radial-gradient(black,black,transparent,transparent)', transform: 'rotate(70deg)',position:'absolute'}} className={classes.memphis} src={`${Memphis}`} alt="memphis design" /> */}
                <img style={{  background: 'radial-gradient(white,white,transparent,transparent)',filter: 'invert(1)' }} className={classes.memphis} src={`${Memphis}`} alt="memphis design" />
                
         
<img className={classes.memphis}   style={{   background: 'radial-gradient(black,midnightblue,transparent,transparent)',position:'absolute',marginTop:'8vh'}}src={`${ResumePic}`} alt="memphis design" />
</Button>
            {/* <div style={{
              height:'15em',
              width:'15em',
              clipPath: 'circle(50% at 50% 50%)',
              transform: 'rotate(45deg)',
              backgroundImage: 'radial-gradient(#E4CC37 15em, transparent 0)',
              backgroundSize:' 15em 15em',
            }}>
              </div>
 <div style={{
              height:'10rem',
              width:'10rem',
              position:'relative',
              bottom:'34vh',
              left:'12vw',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              transform: 'rotate(100deg)',
              background: 'transparent',
              backgroundImage: 'radial-gradient(#FFA3AF 7rem, transparent 0)',
              backgroundSize:' 3rem 3rem',
              backgroundPosition: '7rem 7rem'
            }}>
           </div> 
           <div style={{
              height:'12rem',
              width:'12rem',
              position:'relative',
              bottom:'34vh',
              left:'12vw',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              transform: 'rotate(70deg)',
              background: 'transparent',
              backgroundImage: 'radial-gradient(#E18335 7rem, transparent 0)',
              backgroundSize:' 3rem 3rem',
              backgroundPosition: '7rem 7rem'
            }}>
           </div> 
           <div style={{
             zIndex:-1,
              height:'18rem',
              width:'18rem',
              position:'relative',
              
              bottom:'60vh',
              left:'18vw',

              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              transform: 'rotate(330deg)',
              background: '#85D0FF',
              backgroundImage: 'radial-gradient(#85D0FF 7rem, transparent 0)',
              backgroundSize:' 7rem 7rem',
             
            }}>

            </div>
         
            <div style={{
              height:'200px',
              width:'100px',
              bottom:'94vh',
              position:'relative',
              left:'2vw',
              transform: 'rotate(45deg)',
              background: 'transparent',
              backgroundImage: 'radial-gradient(black  5px, transparent 0)',
              backgroundSize:' 20px 20px',
              backgroundPosition: '-19px -19px'
            }}>
       </div>
       <div style={{
              height:'260px',
              width:'100px',
              bottom:'124vh',
              position:'relative',
              left:'22vw',
              transform: 'rotate(85deg)',
              background: 'transparent',
              backgroundImage: 'radial-gradient(white  5px, transparent 0)',
              backgroundSize:' 20px 20px',
              backgroundPosition: '-19px -19px'
            }}>
       </div>
       <div style={{
           zIndex:-2,
              height:'11em',
              width:'11em',
              position:'relative', 
              bottom:'180vh',
              left:'19vw',
              clipPath: 'circle(50% at 50% 50%)',
              transform: 'rotate(45deg)',
              backgroundImage: 'radial-gradient(#00AF54 15em, transparent 0)',
              backgroundSize:' 15em 15em',
            }}>
              </div>
              <div style={{
             zIndex:-3,
              height:'18rem',
              width:'18rem',
              position:'relative',
              
              bottom:'205vh',
              left:'18vw',

              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              transform: 'rotate(120deg)',
              background: '#85D0FF',
              backgroundImage: 'radial-gradient(#FF4365 7rem, transparent 0)',
              backgroundSize:' 7rem 7rem',
             
            }}>

            </div>
            <div style={{
              height:'260px',
              width:'100px',
              bottom:'234vh',
              position:'relative',
              left:'15vw',
              transform: 'rotate(140deg)',
              background: 'transparent',
              backgroundImage: 'radial-gradient(black  3px, transparent 0)',
              backgroundSize:' 15px 15px',
              backgroundPosition: '-19px -19px'
            }}>
       </div> */}
      
          </motion.div>
          </Grid>


        </Grid>

      </Box>
    </Container>
  );
};

export default memo(Title);
