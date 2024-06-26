import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './FirstPage.css';

const Step2 = ({ data, handleChange, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({
    address1: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleNextStep = () => {
    const newErrors = {};
    if (!data.address1) {
      newErrors.address1 = 'Address Line 1 is required';
    }
    if (!data.city) {
      newErrors.city = 'City is required';
    }
    if (!data.state) {
      newErrors.state = 'State is required';
    }
    if (!data.zip) {
      newErrors.zip = 'Zip Code is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      nextStep();
    }
  };

  return (
    <div className="containerfirstpage">
      <h1>Step 2: Address Information</h1>
      <TextField
        label="Address Line 1"
        name="address1"
        value={data.address1}
        onChange={handleChange}
        error={!!errors.address1}
        helperText={errors.address1}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address Line 2"
        name="address2"
        value={data.address2}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="City"
        name="city"
        value={data.city}
        onChange={handleChange}
        error={!!errors.city}
        helperText={errors.city}
        fullWidth
        margin="normal"
      />
      <TextField
        label="State"
        name="state"
        value={data.state}
        onChange={handleChange}
        error={!!errors.state}
        helperText={errors.state}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Zip Code"
        name="zip"
        value={data.zip}
        onChange={handleChange}
        error={!!errors.zip}
        helperText={errors.zip}
        fullWidth
        margin="normal"
      />
     
      <div className="btns">
        <Button variant="contained" color="primary" onClick={prevStep}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNextStep}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2;
