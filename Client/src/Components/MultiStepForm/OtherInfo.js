
import useStyles from './styles';

function OtherInfo({ formData, setFormData }) {
    const classes = useStyles();
    return (
        <div className={classes.page}>
            <input
                type="text"
                placeholder="Nationality..."
                value={formData.nationality}
                onChange={(e) => {
                    setFormData({ ...formData, nationality: e.target.value });
                }}
            />
            <input
                type="text"
                placeholder="Other..."
                value={formData.other}
                onChange={(e) => {
                    setFormData({ ...formData, other: e.target.value });
                }}
            />
        </div>
    );
}

export default OtherInfo;