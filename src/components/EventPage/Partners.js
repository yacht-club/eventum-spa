import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Title from 'components/common/Title';
import Partner from 'components/Partner';
import Fallback from 'components/common/Fallback';
import Loader from 'components/common/Loader';

import { getPartners } from 'apis/partners';

const Partners = ({
  className,
  match: {
    params: { id },
  },
}) => {
  const [partners, setPartners] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getPartners({ id }).then(data => setPartners({ isLoading: false, data }));
  }, []);

  return (
    <div className={className}>
      <Title>Партнеры</Title>
      <Fallback isLoading={partners.isLoading} Component={Loader}>
        {partners.data.map(partner => (
          <Partner {...partner} />
        ))}
      </Fallback>
    </div>
  );
};

const StyledPartners = styled(Partners)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default StyledPartners;
