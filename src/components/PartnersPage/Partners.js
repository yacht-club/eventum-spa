import React from 'react';
import styled from 'styled-components';

import Title from 'components/common/Title';
import Partner from 'components/Partner';

const Partners = ({
  className,
  match: {
    params: { id },
  },
}) => {
  console.log(`loading partners for event: ${id}`);

  const partners = [
    { id: 1, name: 'Фонд Огромное Сердце', partnerType: 'LEGAL', site: 'https://google.com' },
    { id: 2, name: 'Константин Хабенский', partnerType: 'INDIVIDUAL', email: 'google@google.com' },
  ];

  return (
    <div className={className}>
      <Title>Партнеры</Title>

      {partners.map(partner => (
        <Partner {...partner} />
      ))}
    </div>
  );
};

const StyledPartners = styled(Partners)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default StyledPartners;
