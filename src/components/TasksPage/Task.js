import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from 'components/common/Box';
import { convertTimestampToDate } from '../../utils/timeUtils';

const Name = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
`;

const MetaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CreatedStatus = styled.div`
  font-weight: bold;
  color: #FFC336;
`;

const InProgressStatus = styled.div`
  font-weight: bold;
  color: #1B32B2;
`;

const ResolvedStatus = styled.div`
  font-weight: bold;
  color: #43B258;
`;

const getStatusName = status => {
  switch (status) {
    case `CREATED`:
      return <CreatedStatus>Не начато</CreatedStatus>;
    case `IN_PROGRESS`:
      return <InProgressStatus>В процессе</InProgressStatus>;
    case `RESOLVED`:
      return <ResolvedStatus>Решено</ResolvedStatus>;
    default:
      return ``;
  }
};

const Task = ({ className, name, status, deadlineTime, history, id }) => (
  <div className={className}>
    <Box onClick={() => history.push(`/tasks/${id}/`)}>
      <MetaContainer>
        <Name>{name}</Name>
        {getStatusName(status)}
      </MetaContainer>
      дедлайн {convertTimestampToDate(deadlineTime)}
    </Box>
  </div>
);

const StyledTask = styled(Task)`
  ${Box} {
    padding: 20px;
    transition: all 0.1s ease-in-out;

    &:hover {
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    }
  }

  ${MetaContainer} {
    margin-bottom: 16px;
  }

  cursor: pointer;
`;

export default withRouter(StyledTask);
