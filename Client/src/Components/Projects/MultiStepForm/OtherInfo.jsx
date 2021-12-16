
// import useStyles from "./styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@material-ui/core/Typography";

// import useStyles from "./styles";

// { projectData }: { projectData: any }, { index }: { index: any }

function OtherInfo({ formData, setFormData,setError }) {
  // const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography component="h1" variant="h5">
          Other Info
        </Typography>
        <TextField
          required
          margin="normal"
          name="nationality"
          label="Nationality"
          autoFocus
          id="nationality"
          autoComplete="nationality"
          type="text"
          placeholder="Nationality..."
          value={formData.nationality}
          onChange={(e) => {
       
            setFormData({ ...formData, nationality: e.target.value });
          }}
        />
        <TextField
          required
          margin="normal"
          name="other"
          label="Other"
          autoFocus
          id="other"
          autoComplete="other"
          type="text"
          placeholder="Other..."
          value={formData.other}
          onChange={(e) => {
             
            setFormData({ ...formData, other: e.target.value });
          }}
        />
      </Box>
    </>
  );
}

export default OtherInfo;
