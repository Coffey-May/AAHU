
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from "@material-ui/core/Button";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated ?
            <Button color="secondary" variant="outlined"
                className="btn btn-danger btn-block"
                onClick={() =>
                    logout({
                        returnTo: window.location.origin,
                    })
                }
            >
                Log Out
            </Button>
            : null
    );
};

export default LogoutButton;