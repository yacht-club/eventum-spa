import React from 'react';

const OptionalRender = ({ children, when }) => (when ? <React.Fragment>{children}</React.Fragment> : null);

export default OptionalRender;
