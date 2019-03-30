import React from 'react';
import styled from 'styled-components';
import Partner from './Partner';

const Partners = ({
  className,
  match: {
    params: { id },
  },
}) => {
  console.log(`loading partners for event: ${id}`);

  return (
    <div className={className}>
      <Partner name="КРОК" partnerType="LEGAL" />
    </div>
  );
};

const StyledPartners = styled(Partners)``;

export default StyledPartners;
