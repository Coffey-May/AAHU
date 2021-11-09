import { makeStyles } from '@material-ui/core/styles';


// let pine = '#157A6E'
// let shamRock = '#157A6E',
// let ashGray = '#C2C5BB'
// let darkSea = '#77B28C'
// let brownSugar = '#B4654A'

export const useStyles = makeStyles(theme => ({
    container:{
height:'100vh',
    },
    paper:{

    },
    paperLeft:{
        backgroundImage:'radial-gradient(circle at center, #EAF2D7, black 300%)',
// backgroundColor:'#EAF2D7',
    },
    nameTitle:{
        margin: '0',
        position: 'absolute',
        top: '40%',
        // left: '20%',
        transform: 'translate(-50%, -50%)',
    },
    paperRight:{
        backgroundColor:'#B3DEE2',
    }
}));