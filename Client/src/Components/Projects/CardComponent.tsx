import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';






export default function ImgMediaCard({ projectData }: { projectData: any }, { index }: { index: any }) {
    
// {projectData.image.includes("http") ?"blank":null}

//  let condition = true
    return (

        <Grid container  id="Projects" style={{ color: 'white', padding: '2em', minHeight: '70vh', width: '100%', margin: '0 auto', backgroundColor: `${projectData.bgColor}`, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }} >

            <Grid  item xs={10} sm={5} md={5} lg={4}>
                <h1 style={{fontSize:'xx-large'}}>{projectData.title}</h1>
                <h2>{projectData.description}</h2>
            </Grid>

            <Grid item xs={10} sm={5} md={5} lg={4} >
                <Card>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="240"
                        image={projectData.image}
                   />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" >
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>
                            <a href={projectData.linkMultiForm}
                            target={projectData.linkMultiForm.includes("http")?"_blank":undefined}
                            >View Project </a>

                            {/* <Link target="_blank" to={projectData.linkMultiForm}>View Project </Link> */}
                        </Button>

                        <a href={projectData.linkMultiForm}></a>

                    </CardActions>
                </Card>
            </Grid>
        </Grid >

    );
}