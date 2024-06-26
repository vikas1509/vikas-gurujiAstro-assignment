import React, { useState, useEffect } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Navigation from './components/Navigation';
// import { Container } from '@material-ui/core';
import Container from '@mui/material/Container';

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 0) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone is required';
    } else if (step === 1) {
      if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zip) newErrors.zip = 'Zip Code is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      console.log('Form submitted:', formData);
      localStorage.removeItem('formData');
      // Handle form submission logic here
    }
  };

  return (
    <Container maxWidth="sm">
      <Navigation currentStep={currentStep} setStep={setCurrentStep} />
      {currentStep === 0 && (
        <Step1
          data={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          errors={errors}
        />
      )}
      {currentStep === 1 && (
        <Step2
          data={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          errors={errors}
        />
      )}
      {currentStep === 2 && (
        <Step3 data={formData} prevStep={prevStep} handleSubmit={handleSubmit} />
      )}
    </Container>
  );
};

export default App;
