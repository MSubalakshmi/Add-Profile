
import { TextField, Typography, Box } from '@mui/material';

const PersonalDetails = ({ profile, handleChange, classes }) => {
  return (
    <Box>
      <Typography variant="h6" className={classes.sectionTitle} sx={{ fontSize: '1.25rem' }}>
        Personal Details
      </Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={profile.name}
        onChange={handleChange}
        margin="normal"
        required
        className={classes.textField}
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        margin="normal"
        required
        className={classes.textField}
      />
      <TextField
        fullWidth
        label="Mobile No"
        name="mobile"
        value={profile.mobile}
        onChange={handleChange}
        margin="normal"
        required
        className={classes.textField}
      />
      <TextField
        fullWidth
        label="Company Name"
        name="companyName"
        value={profile.companyName}
        onChange={handleChange}
        margin="normal"
        required
        className={classes.textField}
      />
    </Box>
  );
};

export default PersonalDetails;
