import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from 'components/common/Title';
import TitleContainer from 'components/TitleContainer';
import PlusButton from 'components/PlusButton';
import { getHistory } from '../../apis/history';
import Loader from '../common/Loader';
import Fallback from '../common/Fallback';
import HistoryItem from '../HistoryItem';

const History = ({
  className,
  match: {
    params: { id },
  },
}) => {
  const [history, setHistory] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getHistory({ id }).then(data => setHistory({ isLoading: false, data }));
  }, []);

  return (
    <div className={className}>
      <TitleContainer>
        <Title>История коммуникаций</Title>
        <PlusButton onClick={() => history.push(`/events/${id}/create/task/`)} />
      </TitleContainer>

      <Fallback isLoading={history.isLoading} Component={Loader}>
        {history.data.map(historyItem => (
          <HistoryItem {...historyItem} />
        ))}
      </Fallback>
    </div>
  );
};

const StyledHistory = styled(History)`
  ${Title} {
    margin-bottom: 20px;
  }

  ${TitleContainer} {
    ${PlusButton} {
      margin-bottom: 20px;
      margin-left: 10px;
    }
  }
`;

export default StyledHistory;
