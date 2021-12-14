import useStyles from "./styles";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function SignUpInfo({ formData, setFormData }) {
  const classes = useStyles();
  return (
    <>
     

          <CssBaseline />
          <Box
              sx={{
                // width:'60vw',
              marginTop: 8,
              display: "flex",
              flexDirection: "column",

              // alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <TextField
              margin="normal"
              required
              
              name="e-mail"
              label="Email"
              id="e-mail"
              autoComplete="e-mail"
              autoFocus
              type="text"
              placeholder="Email..."
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
            <TextField
              required
           
              name="password"
              label="PassWord"
              autoFocus
              id="password"
              autoComplete="password"
              type="text"
              placeholder="Password..."
              value={formData.password}
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
            <TextField
              required
            
              name="confirm-password"
              label="Confirm PassWord"
              autoFocus
              id="confirm-password"
              autoComplete="confirm-password"
              type="text"
              placeholder="Confirm Password..."
              value={formData.confirmPassword}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  confirmPassword: event.target.value,
                })
              }
            />
          </Box>
       
    </>
  );
}

export default SignUpInfo;
