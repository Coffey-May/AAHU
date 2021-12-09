import React, { useEffect, useState } from 'react'
import { useStyles } from "./styles";
import Memphis from '../../assets/memphis.png'
import Container from '@material-ui/core/Container'




function useWindowDimensions() {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return {
    width,
  }
}

const About = () => {
  const classes = useStyles();
  const { width } = useWindowDimensions()
  return (
    <>

      <div id="About" className={classes.about} style={{ zIndex: 99,  minWidth: '100vw', backgroundColor: '#FFFFF3' }}>
        <Container>
          <img style={{ background: 'radial-gradient(black,black,transparent,transparent)', transform: 'rotate(70deg)', position: 'absolute', width: '5vw' }} src={`${Memphis}`} alt="memphis design" />
          <div style={{ width: '80%', margin: '0 auto' }}>

            <h1 style={{ padding: '3em 0em 2em 0em ', color: '#d1006c', borderBottom:'1px solid #d1006c' }}>ABOUT ME</h1>


            <p style={width < 900 ? { columnCount: 1,padding:'2em 0em 6em 0em',lineHeight:'2em',fontSize:'1.25em' } : { columnCount: 2 ,padding:'2em 0em 6em 0em',lineHeight:'2em',fontSize:'1.25em' }}  > “That brain of mine is something more than merely mortal; as time will show.”

“If you can’t give me poetry, can’t you give me poetical science?”

“I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me, how the matter in question was first thought of or arrived at…”

“Religion to me is science and science is religion.”

“The more I study, the more insatiable do I feel my genius for it to be.”

“Your best and wisest refuge from all troubles is in your science.”

“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”

“Imagination is the Discovering Faculty, pre-eminently. It is that which penetrates into the unseen worlds around us, the worlds of Science.”

“Mathematical science shows what is. It is the language of unseen relations between things. But to use and apply that language, we must be able to fully to appreciate, to feel, to seize the unseen, the unconscious.”

“As soon as I have got flying to perfection, I have got a scheme about a steam engine.” </p>
          </div>
        </Container>
      </div>

    </>
  )
}

export default About
