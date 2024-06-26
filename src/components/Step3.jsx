import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./FirstPage.css"
const Step3 = ({ data, prevStep, handleSubmit }) => {
  return (
    <div className="containerfirstpage">
      <h1>Step 3: Confirmation</h1>
      <div>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Address Line 1:</strong> {data.address1}</p>
        <p><strong>Address Line 2:</strong> {data.address2}</p>
        <p><strong>City:</strong> {data.city}</p>
        <p><strong>State:</strong> {data.state}</p>
        <p><strong>Zip Code:</strong> {data.zip}</p>
      </div>
     <div className="btns">
     <Button variant="contained" color="primary" onClick={prevStep}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
     </div>
    </div>
  );
};

export default Step3;


// import React from 'react';

// const Step3 = ({ data, prevStep, handleSubmit }) => {
//   return (
//     <div>
//       <h2>Step 3: Confirmation</h2>
//       <div>
//         <p><strong>Name:</strong> {data.name}</p>
//         <p><strong>Email:</strong> {data.email}</p>
//         <p><strong>Phone:</strong> {data.phone}</p>
//         <p><strong>Address Line 1:</strong> {data.address1}</p>
//         <p><strong>Address Line 2:</strong> {data.address2}</p>
//         <p><strong>City:</strong> {data.city}</p>
//         <p><strong>State:</strong> {data.state}</p>
//         <p><strong>Zip Code:</strong> {data.zip}</p>
//       </div>
//       <button onClick={prevStep}>
//         Back
//       </button>
//       <button onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Step3;

