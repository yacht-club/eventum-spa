import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from 'components/common/Title';
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
  console.log(`loading history for event: ${id}`);
  const [history, setHistory] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getHistory({ id }).then(data => setHistory({ isLoading: false, data }));
  }, []);

  return (
    <div className={className}>
      <Title>История коммуникаций</Title>
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
`;

export default StyledHistory;
