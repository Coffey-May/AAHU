import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    foot: {
        background: 'black',
        color:'lightgrey',
        minHeight:'150px',
        position:'absolute',
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    boxWrap: {
        display: 'flex',
        flexDirection: 'row',

    },
    // gridItem:{
    //   paddingLeft:'7em', 
    // }
}));