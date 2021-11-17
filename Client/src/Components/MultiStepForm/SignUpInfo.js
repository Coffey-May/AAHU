
import useStyles from './styles';

function SignUpInfo({ formData, setFormData }) {
    const classes = useStyles();
    return (
        <div className={classes.page}>
            <input
                type="text"
                placeholder="Email..."
                value={formData.email}
                onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                }
            />
            <input
                type="text"
                placeholder="Password..."
                value={formData.password}
                onChange={(event) =>
                    setFormData({ ...formData, password: event.target.value })
                }
            />
            <input
                type="text"
                placeholder="Confirm Password..."
                value={formData.confirmPassword}
                onChange={(event) =>
                    setFormData({ ...formData, confirmPassword: event.target.value })
                }
            />
        </div>
    );
}

export default SignUpInfo;