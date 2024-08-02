import React, { useState } from 'react';
import { Button, Typography, Container, Box, Divider, FormGroup, FormControlLabel, Checkbox, TextField, Grid, MenuItem, Select, Snackbar, Alert, List, ListItem, ListItemText } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    mobile: '',
    companyName: '',
    plateNumber: '',
    vehicleType: {
      car: false,
      bike: false,
    },
    modelName: ''
  });

  const [vehicles, setVehicles] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setProfile((prevProfile) => ({
        ...prevProfile,
        vehicleType: {
          ...prevProfile.vehicleType,
          [name]: checked,
        }
      }));
    } else {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value
      }));
    }
  };

  const handleCancel = () => {
    setProfile({
      name: '',
      email: '',
      mobile: '',
      companyName: '',
      plateNumber: '',
      vehicleType: {
        car: false,
        bike: false,
      },
      modelName: ''
    });
    setVehicles([]);
    setSuccessMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage('Your profile has been created!');
    console.log('Profile created:', profile, vehicles);
  };

  const handleAddVehicle = () => {
    const newVehicle = {
      plateNumber: profile.plateNumber,
      modelName: profile.modelName,
      vehicleType: profile.vehicleType,
    };
    setVehicles([...vehicles, newVehicle]);
    setSuccessMessage('Vehicle added successfully!');

    // Reset the vehicle fields after adding a vehicle
    setProfile((prevProfile) => ({
      ...prevProfile,
      plateNumber: '',
      modelName: '',
      vehicleType: {
        car: false,
        bike: false,
      }
    }));
  };

  const handleSnackbarClose = () => {
    setSuccessMessage('');
  };

  return (
    <Container maxWidth="sm" sx={{ padding: '20px', backgroundColor: '#f0f4f8', borderRadius: '10px' }}>
      <Box sx={{ backgroundColor: '#1a237e', color: '#fff', padding: '10px', borderRadius: '5px', textAlign: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" sx={{ fontSize: '2rem' }}>Add Profile</Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom sx={{ fontSize: '1.5rem', textAlign: 'left' }}>Enter Details</Typography>
        <p>Enter the below details to create the profile </p>
        <Divider variant="h6" sx={{ fontSize: '1.25rem', marginTop: '20px', marginBottom: '10px' }}>Personal Details</Divider>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Typography variant="h5" color="black" gutterBottom sx={{ fontSize: '1rem', textAlign: 'left' }}>Full Name</Typography>
            <TextField fullWidth label="Enter Name" variant="filled" name="name" value={profile.name} onChange={handleChange} margin="normal" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" color="black" gutterBottom sx={{ fontSize: '1rem', textAlign: 'left' }}>Email id</Typography>
            <TextField fullWidth label="Enter Email" variant="filled" name="email" value={profile.email} onChange={handleChange} margin="normal" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" color="black" gutterBottom sx={{ fontSize: '1rem', textAlign: 'left' }}>Mobile No.</Typography>
            <TextField fullWidth label="Enter Mobile No" variant="filled" name="mobile" value={profile.mobile} onChange={handleChange} margin="normal" required />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h5" color="black" gutterBottom sx={{ fontSize: '1rem', textAlign: 'left' }}>Company</Typography>
            <Select
              fullWidth
              variant="filled"
              name="companyName"
              value={profile.companyName}
              onChange={handleChange}
              margin="normal"
              required
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Company1">Company1</MenuItem>
              <MenuItem value="Company2">Company2</MenuItem>
              <MenuItem value="Company3">Company3</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Divider variant="h6" sx={{ fontSize: '1.25rem', marginTop: '20px', marginBottom: '10px' }}>Vehicle Details</Divider>

        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" color="black" gutterBottom sx={{ fontSize: '1rem', textAlign: 'left' }}>Plate Number</Typography>
            <TextField fullWidth label="Enter Plate Number" variant="filled" name="plateNumber" value={profile.plateNumber} onChange={handleChange} margin="normal" required />
            <Typography variant="h5" color="black" gutterBottom sx={{ fontSize: '1rem', textAlign: 'left' }}>Model Name</Typography>
            <TextField fullWidth label="Enter Model Name" variant="filled" name="modelName" value={profile.modelName} onChange={handleChange} margin="normal" required />
          </Grid>
          <Grid item xs={6} sm={2} sx={{ display: 'flex', alignItems: 'center' }}> 
            <FormGroup>
            <Typography variant="h5" color="black" gutterBottom sx={{ fontSize: '1rem', textAlign: 'left' }}>Type</Typography>
              <FormControlLabel control={<Checkbox icon={<DirectionsCarIcon />} checkedIcon={<DirectionsCarIcon />} name="car" checked={profile.vehicleType.car} onChange={handleChange} />} label="Car" />
              <FormControlLabel control={<Checkbox icon={<TwoWheelerIcon />} checkedIcon={<TwoWheelerIcon />} name="bike" checked={profile.vehicleType.bike} onChange={handleChange} />} label="Bike" />
            </FormGroup>
          </Grid>
          <Grid item xs={6} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
              sx={{
                border: '2px dashed #1a237e',
                borderRadius: '5px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '10px',
                minWidth: '150px', // Ensures the button has a minimum width
              }}
            >
              <Button variant="contained" color="grey" onClick={handleAddVehicle} sx={{ color: 'black', fontSize: '1.2rem', padding: '12px 20px' }}>+ Add Vehicle</Button>
            </Box>
            </Grid>
        </Grid>

        <List sx={{ marginTop: '20px' }}>
          {vehicles.map((vehicle, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Plate Number: ${vehicle.plateNumber}, Model Name: ${vehicle.modelName}, Type: ${vehicle.vehicleType.car ? 'Car' : ''} ${vehicle.vehicleType.bike ? 'Bike' : ''}`}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" sx={{ backgroundColor: '#f44336', '&:hover': { backgroundColor: '#d32f2f' } }} onClick={handleCancel}>Cancel</Button>
          <Button variant="contained" sx={{ backgroundColor: '#1a237e', color: '#fff', '&:hover': { backgroundColor: '#1a237e' } }} type="submit">Create Profile</Button>
        </Box>
      </Box>

      <Snackbar open={!!successMessage} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProfileForm;
