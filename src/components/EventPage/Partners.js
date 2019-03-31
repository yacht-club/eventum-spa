import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import TitleContainer from 'components/TitleContainer';
import PlusButton from 'components/PlusButton';
import Title from 'components/common/Title';
import Partner from 'components/Partner';
import Fallback from 'components/common/Fallback';
import Loader from 'components/common/Loader';
import SearchBar from 'components/SearchBar';
import { getPartners } from 'apis/partners';

const filterPredicate = filterValue => partner => {
  const isNameAlike = partner.name.toLowerCase().startsWith(filterValue.toLowerCase());
  const isTagsAlike = partner.tags.filter(tag => tag.toLowerCase().startsWith(filterValue.toLowerCase())).length > 0;

  return isNameAlike || isTagsAlike;
};

const Partners = ({
  className,
  match: {
    params: { id },
  },
  history,
}) => {
  const [partners, setPartners] = useState({ isLoading: true, data: [] });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getPartners({ id }).then(data => setPartners({ isLoading: false, data }));
  }, []);

  return (
    <div className={className}>
      <TitleContainer>
        <Title>Партнеры</Title>
        <PlusButton onClick={() => history.push(`/events/${id}/create/task/`)} />
      </TitleContainer>
      <SearchBar onChange={setFilter} value={filter} />
      <Fallback isLoading={partners.isLoading} Component={Loader}>
        {partners.data.filter(filterPredicate(filter)).map(partner => (
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

  ${SearchBar} {
    margin-bottom: 20px;
  }

  ${TitleContainer} {
    ${PlusButton} {
      margin-bottom: 20px;
      margin-left: 10px;
    }
  }
`;

export default withRouter(StyledPartners);
