import React, { useState } from 'react';

const Step1 = ({ onNext }) => {
  const [documents, setDocuments] = useState(null);

  const handleNext = () => {
    onNext({ documents });
  };

  return (
    <div>
      <h2>Step 1: Upload Documents (Academic)</h2>
      <input type="file" multiple onChange={(e) => setDocuments(e.target.files)} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;
