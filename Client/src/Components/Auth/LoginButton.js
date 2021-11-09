import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from "@material-ui/core/Button";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (

        !isAuthenticated ?
            <Button color="inherit" variant="outlined"
                className="btn btn-primary btn-block"
                onClick={() => loginWithRedirect()}
            >
                Log In
            </Button>
            : null
    );
};

export default LoginButton;