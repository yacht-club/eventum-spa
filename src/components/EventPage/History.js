import React from 'react';
import styled from 'styled-components';
import Title from 'components/common/Title';

const History = ({
  className,
  match: {
    params: { id },
  },
}) => {
  console.log(`loading history for event: ${id}`);
  // const history = [{}, {}];

  return (
    <div className={className}>
      <Title>История</Title>
      HISTORY WILL BE HERE
    </div>
  );
};

const StyledHistory = styled(History)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default StyledHistory;
