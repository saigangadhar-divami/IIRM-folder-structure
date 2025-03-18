import React from 'react';

const CustomFallback: React.FC = () => {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>We're working to fix the issue. Please try again later.</p>
    </div>
  );
};

export default CustomFallback;