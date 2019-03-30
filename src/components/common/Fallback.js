import React from 'react';

const Fallback = ({ isLoading, children, Component }) =>
  isLoading ? <Component /> : <React.Fragment>{children}</React.Fragment>;

export default Fallback;
