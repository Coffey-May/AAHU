import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from "@material-ui/core/Button";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (

        !isAuthenticated ?
            <Button color="inherit"
                className="btn btn-primary btn-block"
                onClick={() => loginWithRedirect()}
            >
             <h3>Log In</h3>
            </Button>
            : null
    );
};

export default LoginButton;