import React from 'react';
import styled from 'styled-components';
import Box from 'components/common/Box';

const Name = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;

const Partner = ({ className, name }) => (
  <div className={className}>
    <Box>
      <Name>{name}</Name>
    </Box>
  </div>
);

const StyledPartner = styled(Partner)`
  ${Box} {
    padding: 20px;
  }
`;

export default StyledPartner;
