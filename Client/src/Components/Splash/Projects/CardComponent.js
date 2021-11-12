import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Memphis from '../../../assets/memphis.png';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import MultiStep from './MultiStepForm/MultiStep';

export default function ImgMediaCard() {
    return (

        <Grid container spacing={2} id="Projects" style={{ color: 'white', padding: '2em', minHeight: '70vh', width: '100%', margin: '0 auto', backgroundColor: '#688E26', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }} >

            <Grid spacing={2} item xs={10} sm={5} md={5} lg={4}>
                <h1>Multi Step Form</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nam odit inventore veritatis? Non, eos accusantium! Unde dignissimos nemo hic sapiente harum officia quisquam consectetur est voluptatibus! Laudantium accusamus, eveniet aperiam, numquam fugit, nemo dolor amet totam beatae harum culpa!</p>
            </Grid>

            <Grid item xs={10} sm={5} md={5} lg={4} >
                <Card sm={12} md={3} lg={2}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="240"
                        image={`${Memphis}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>
                            <Link target="_blank" to="/multi-step-form">View Project </Link>
                        </Button>

                    </CardActions>
                </Card>
            </Grid>
        </Grid >

    );
}