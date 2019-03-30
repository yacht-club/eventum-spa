import React from 'react';
import styled from 'styled-components';

const History = ({
  className,
  match: {
    params: { id },
  },
}) => {
  console.log(`loading history for event: ${id}`);
  // const history = [{}, {}];

  return <div className={className}>HISTORY WILL BE HERE</div>;
};

const StyledHistory = styled(History)``;

export default StyledHistory;
