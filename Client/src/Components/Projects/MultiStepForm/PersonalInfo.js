import React from "react";
import useStyles from './styles';

function PersonalInfo({ formData, setFormData }) {
    const classes = useStyles();
    return (
        <div className={classes.page}>
            <input
                type="text"
                placeholder="First Name..."
                value={formData.firstName}
                onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                }}
            />
            <input
                type="text"
                placeholder="Last Name..."
                value={formData.lastName}
                onChange={(e) => {
                    setFormData({ ...formData, lastName: e.target.value });
                }}
            />
            <input
                type="text"
                placeholder="Username..."
                value={formData.username}
                onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                }}
            />
        </div>
    );
}

export default PersonalInfo;