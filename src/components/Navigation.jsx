import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
const Navigation = ({ currentStep, setStep }) => {
  return (
    <Tabs value={currentStep} onChange={(e, val) => setStep(val)} centered>
      <Tab label="Step 1" disabled={currentStep < 0} />
      <Tab label="Step 2" disabled={currentStep < 1} />
      <Tab label="Step 3" disabled={currentStep < 2} />
    </Tabs>
  );
};

export default Navigation;
