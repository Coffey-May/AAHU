import React from 'react'
import Card from './CardComponent';
import Grid from '@material-ui/core/Grid';

const Projects = () => {
    return (
        <>
     <Grid  container spacing={2}  id="Projects" style={{ padding:'2em',minHeight:'70vh',width:'100%',margin:'0 auto',backgroundColor:'#688E26',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around',alignItems:'center' }} >
     
                <Grid spacing={2} item xs={10} sm={5} md={5} lg={4}>
            <Card/>
             </Grid>
         
             <Grid item xs={10} sm={5} md={5} lg={4} >
            <Card/>
             </Grid>
       
             </Grid>
          
        <div style={{height:'70vh',width:'100%',margin:'0 auto',backgroundColor:'#FAA613' }}>
            
            <div style={{width:'80%',margin:'0 auto', backgroundColor:'blue' }}>
         dff
            </div>
        
      </div>
      <div style={{height:'70vh',width:'100%',margin:'0 auto',backgroundColor:'#F44708' }}>
            
            <div style={{width:'80%',margin:'0 auto', backgroundColor:'blue' }}>
         dff
            </div>
        
      </div>
      <div style={{height:'70vh',width:'100%',margin:'0 auto',backgroundColor:'#F43E8A' }}>
            
            <div style={{width:'80%',margin:'0 auto', backgroundColor:'blue' }}>
         dff
            </div>
        
      </div>    
   </>
    )
}

export default Projects