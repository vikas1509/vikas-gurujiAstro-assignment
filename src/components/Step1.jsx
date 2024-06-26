import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './FirstPage.css';

const Step1 = ({ data, handleChange, nextStep }) => {
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleNextStep = () => {
    const newErrors = {};
    if (!data.name) {
      newErrors.name = 'Name is required';
    }
    if (!data.email) {
      newErrors.email = 'Email is required';
    }
    if (!data.phone) {
      newErrors.phone = 'Phone is required';
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
      <h1>Step 1: Personal Information</h1>
      <TextField
        label="Name"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        margin="normal"
        id="jobApplicationForm"
      />
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        fullWidth
        margin="normal"
      />
      <Button className='submit-btn' variant="contained" color="primary" onClick={handleNextStep}>
        Next
      </Button>
    </div>
  );
};

export default Step1;
