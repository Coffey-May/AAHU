
// import Avatar from '@mui/material/Avatar';
// import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import useStyles from "./styles";

function PersonalInfo({ formData, setFormData,setError }) {
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
          Personal Info
        </Typography>

        <TextField
          required
          margin="normal"
          name="first-name"
          label="First Name"
          autoFocus
          id="first-name"
          autoComplete="first-name"
          type="text"
          placeholder="First Name..."
          value={formData.firstName}
          onChange={(e) => {
         setError(false)
            setFormData({ ...formData, firstName: e.target.value });
          }}
        />
        <TextField
          required
          name="last-name"
          label="Last Name"
          autoFocus
          id="last-name"
          autoComplete="last-name"
          type="text"
          placeholder="Last Name..."
          value={formData.lastName}
          onChange={(e) => {
           
         setError(false)
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
        <TextField
          required
          name="user-name"
          label="User Name"
          autoFocus
          id="user-name"
          autoComplete="user-name"
          type="text"
          placeholder="Username..."
          value={formData.userName}
          onChange={(e) => {
         setError(false)
            setFormData({ ...formData, userName: e.target.value });
          }}
        />
      </Box>
    </>
  );
}

export default PersonalInfo;
