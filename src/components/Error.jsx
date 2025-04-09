import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;

  return (
    <div className="error">
      <p>Error: {error}</p>
      <p>Please try another city.</p>
    </div>
  );
};

export default Error;