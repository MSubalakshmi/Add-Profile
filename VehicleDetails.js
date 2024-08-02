
import { TextField, Typography, Box, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

const VehicleDetails = ({ profile, handleChange, classes }) => {
  return (
    <Box>
      <Typography variant="h6" className={classes.sectionTitle} sx={{ fontSize: '1.25rem' }}>
        Vehicle Details
      </Typography>
      <TextField
        fullWidth
        label="Plate Number"
        name="plateNumber"
        value={profile.plateNumber}
        onChange={handleChange}
        margin="normal"
        required
        className={classes.textField}
      />
      <FormGroup className={classes.checkboxGroup}>
        <FormControlLabel
          control={<Checkbox icon={<DirectionsCarIcon />} checkedIcon={<DirectionsCarIcon />} name="car" checked={profile.vehicleType.car} onChange={handleChange} />}
          label="Car"
        />
        <FormControlLabel
          control={<Checkbox icon={<TwoWheelerIcon />} checkedIcon={<TwoWheelerIcon />} name="bike" checked={profile.vehicleType.bike} onChange={handleChange} />}
          label="Bike"
        />
      </FormGroup>
      <TextField
        fullWidth
        label="Vehicle Mobile No"
        name="vehicleMobile"
        value={profile.vehicleMobile}
        onChange={handleChange}
        margin="normal"
        required
        className={classes.textField}
      />
      <TextField
        fullWidth
        label="Model Name"
        name="modelName"
        value={profile.modelName}
        onChange={handleChange}
        margin="normal"
        required
        className={classes.textField}
      />
    </Box>
  );
};

export default VehicleDetails;
